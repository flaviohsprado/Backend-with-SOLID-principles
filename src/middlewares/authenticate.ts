import asyncHandler from "express-async-handler";
import Token from "../services/Token";
import StandardError from "../services/StandardError";
import { Request } from "express";

require("dotenv").config();

interface ProtectedRequest extends Request {
  user?: {
    id: number;
    personId: number;
  };
}

const authenticate = asyncHandler(async (req: ProtectedRequest, res, next) => {
  const tokenAdmin: string = process.env.TOKEN_ADMIN! || "";

  if (req.url.includes("public")) return next();

  const [, token] = req.headers.authorization?.split(" ") || ["", ""];

  const response: any | false = await Token.verify(
    process.env.ENVIRONMENT === "DEV" ? tokenAdmin : token
  );

  if (!response) throw new StandardError(401, "Expired or malformed token");

  req.user = { id: response.id, personId: response.personId };

  return next();
});

export default authenticate;
