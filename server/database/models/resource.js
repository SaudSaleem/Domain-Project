"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Resource extends Model {
    static associate(models) {
        console.log(1212, models)
        Resource.belongsTo(models.Server, {
            foreignKey: "server_id",
          });
    }
  }
  Resource.init(
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4(),
          },
          server_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              //Required field
              model: "servers",
              key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: 'CASCADE',
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
          }
    },
    {
      sequelize,
      modelName: "Resource",
    }
  );
  return Resource;
};
