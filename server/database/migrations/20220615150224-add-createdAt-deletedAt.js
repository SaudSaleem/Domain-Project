"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("domains", "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("domains", "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("servers", "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("servers", "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("resources", "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("resources", "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {},
};
