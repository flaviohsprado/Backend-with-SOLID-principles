import asyncHandler from "express-async-handler";
import express from "express";
import { createUserController } from "../useCases/CreateUser";

const router = express.Router();

const index = asyncHandler(async (req: any, res, next) => {
  return createUserController.handle(req, res);
});

router.get("/users", index);

export default router;
