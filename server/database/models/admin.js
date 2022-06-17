"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {}
  }
  Admin.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4(),
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue("first_name", value.toLowerCase());
        },
      },
      last_name: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue("last_name", value.toLowerCase());
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          const hash = bcrypt.hashSync(value, 10);
          this.setDataValue("password", hash);
        },
      },
      token: DataTypes.STRING(255),
    },
    {
      sequelize,
      modelName: "Admin",
      tableName: "admins",
    }
  );
  return Admin;
};
