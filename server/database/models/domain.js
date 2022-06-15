"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Domain extends Model {
    static associate(models) {}
  }
  Domain.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4(),
      },
      domain_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      subdomain_name: {
        type: DataTypes.STRING,
      },
      tags: {
        type: DataTypes.STRING,
      },
      registration_date: {
        type: DataTypes.DATE,
      },
      updated_date: {
        type: DataTypes.DATE,
      },
      expiry_date: {
        type: DataTypes.DATE,
      },
      ip4: {
        type: DataTypes.STRING,
      },
      ip6: {
        type: DataTypes.STRING,
      },
      mail_server: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Domain",
      tableName:"domains"
    }
  );
  return Domain;
};
