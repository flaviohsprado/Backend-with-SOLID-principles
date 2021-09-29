import fs from "fs";
import express from "express";
import path from "path";

const router = express.Router();

fs.readdir(__dirname, (err, files) => {
  if (err) throw new Error("Error in loading for routes");
  files
    .filter((file) => !["index.ts", "index.js"].includes(file))
    .forEach((file) => {
      const route = require(path.join(__dirname, file));

      router.use(route.default);
    });
});

export default router;
