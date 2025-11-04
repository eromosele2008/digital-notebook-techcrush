// models/setting.model.js
import { DataTypes } from "sequelize";
import db from "../config/db.js";
import User from "./user.model.js";

const Setting = db.define(
  "Setting",
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
    currency: {
      type: DataTypes.STRING(10),
      defaultValue: "USD",
    },
    theme: {
      type: DataTypes.ENUM("light", "dark"),
      defaultValue: "light",
    },
    language: {
      type: DataTypes.STRING(20),
      defaultValue: "English",
    },
    notifications: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "settings",
    timestamps: true,
  }
);

// relationships
User.hasOne(Setting, { foreignKey: "userId" });
Setting.belongsTo(User, { foreignKey: "userId" });

export default Setting;
