import asyncHandler from "express-async-handler";
import express from "express";

const router = express.Router();

const index = asyncHandler(async (req: any, res, next) => {
  return res.status(201).send();
});

router.get("/users", index);

export default router;
