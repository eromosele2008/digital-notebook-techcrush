import { DataTypes } from "sequelize";
import db from "../config/db.js";
import User from "./user.model.js";

const Sale = db.define(
  "Sale",
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
    tableName: "sales",
    timestamps: true,
  }
);

// Relationship
User.hasMany(Sale, { foreignKey: "userId" });
Sale.belongsTo(User, { foreignKey: "userId" });

export default Sale;
