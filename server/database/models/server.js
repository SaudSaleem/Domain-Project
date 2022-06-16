"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Server extends Model {
    static associate(models) {
    }
  }
  Server.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4(),
      },
      server_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
      },
      Provider: {
        type: DataTypes.STRING,
      },
      Location: {
        type: DataTypes.STRING,
      },
      estimated_cost: {
        type: DataTypes.STRING,
      },
      currency: {
        type: DataTypes.STRING,
      },
      memory: {
        type: DataTypes.STRING,
      },
      vCPU: {
        type: DataTypes.STRING,
      },
      disk_type: {
        type: DataTypes.STRING,
      },
      disk: {
        type: DataTypes.STRING,
      },
      IPv4: {
        type: DataTypes.STRING,
      },
      IPv6: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Server",
      tableName:"servers"
    }
  );
  return Server;
};
