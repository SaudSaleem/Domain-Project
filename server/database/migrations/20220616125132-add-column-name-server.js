"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("servers", "server_name", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
  async down(queryInterface, Sequelize) {},
};
