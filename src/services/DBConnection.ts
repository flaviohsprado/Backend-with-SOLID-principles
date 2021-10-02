import "reflect-metadata";
import { createConnection } from "typeorm";

require("dotenv").config();

export async function initConnection() {
  const connection = await createConnection({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + "/entities/*.js"],
    synchronize: true,
    logging: true,
  }).catch((err) => {
    console.log(err);
  });

  return connection;
}
