import dotenv from "dotenv";
dotenv.config();

export default {
  ENVIRONMENT: process.env.NODE_ENV || "dev",
  PORT: process.env.PORT || 3000,
  DB_NAME: process.env.DB_NAME || "digital_notebook",
  DB_USER: process.env.DB_USER || "admin",
  DB_PASSWORD: process.env.DB_PASSWORD || "password",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: Number(process.env.DB_PORT || 3306),
  DB_DIALECT: process.env.DB_DIALECT || "mysql",
};
