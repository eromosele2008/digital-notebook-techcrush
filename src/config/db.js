import { Sequelize } from "sequelize";
import config from "./index.js";

const db = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,

  {
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    dialect: config.DB_DIALECT,
    port: config.DB_PORT,
    logging: (msg) => console.log(msg),
  }
);

export const connectDB = async () => {
  try {
    await db.authenticate();
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting to the database:", error);
  }
};

export default db;
