// models/expense.model.js
import { DataTypes } from "sequelize";
import db from "../config/db.js";
import User from "./user.model.js";

//Expenses for model
const Expense = db.define(
  "Expense",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    synced: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "expenses",
    timestamps: true, // createdAt & updatedAt
  }
);

// define relationship
User.hasMany(Expense, { foreignKey: "userId" });
Expense.belongsTo(User, { foreignKey: "userId" });

export default Expense;
