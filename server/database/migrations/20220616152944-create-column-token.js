"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("admins", "token", {
      type: Sequelize.STRING,
    });
  },
  async down(queryInterface, Sequelize) {},
};
