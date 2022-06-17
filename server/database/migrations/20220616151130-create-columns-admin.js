"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("admins", "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("admins", "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {},
};
