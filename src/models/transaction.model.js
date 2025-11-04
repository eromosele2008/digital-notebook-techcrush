// models/transaction.model.js
import { DataTypes } from "sequelize";
import db from "../config/db.js";
import User from "./user.model.js";

const Transaction = db.define(
  "Transaction",
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
    type: {
      type: DataTypes.ENUM("income", "expense"),
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: "transactions",
    timestamps: true,
  }
);

// relationships
User.hasMany(Transaction, { foreignKey: "userId" });
Transaction.belongsTo(User, { foreignKey: "userId" });

export default Transaction;
