import cors from "cors";
import express from "express";
import router from "./routes/index";
import handleError from "./middlewares/handleError";
import authenticate from "./middlewares/authenticate";

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
//app.use(authenticate);
app.use(router);
app.use((err: any, req: any, res: any, next: any) => handleError(err, res));
app.get("/", (req, res) => {
  res.json({
    message: "API Rest Online",
  });
});

export default app;
