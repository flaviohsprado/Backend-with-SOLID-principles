import "reflect-metadata";
import { createConnection } from "typeorm";

require("dotenv").config();

interface DBConnection {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  name: string;
}

const dbConfigure: DBConnection = {
  type: process.env.DB_TYPE || "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "postdba",
  name: process.env.DB_NAME || "Valoriza",
};

const connection = await createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postdba",
  database: "Valoriza",
});

export default connection;

/*
const dbType: string = process.env.DB_TYPE! || "postgres";
const dbHost: string = process.env.DB_HOST! || "localhost";
const dbPort: number = Number(process.env.DB_PORT) || 5432;
const dbUsername: string = process.env.DB_USERNAME! || "postgres";
const dbPassword: string = process.env.DB_PASSWORD! || "postdba";
const dbName: string = process.env.DB_NAME! || "Valoriza";

const connection = await createConnection({
  type: dbType,
  host: dbHost,
  port: dbPort,
  username: dbUsername,
  password: dbPassword,
  database: dbName,
  entities: [__dirname + "/entities/*.js"],
  synchronize: true,
  logging: false,
});
*/
