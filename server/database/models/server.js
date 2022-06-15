"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Server extends Model {
    static associate(models) {
        Server.belongsTo(models.Resource, {
            foreignKey: "server_id",
          });
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
    },
    {
      sequelize,
      modelName: "Server",
    }
  );
  return Server;
};
