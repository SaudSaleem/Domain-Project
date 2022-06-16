"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("servers", "IPv4", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("servers", "IPv6", {
      type: Sequelize.STRING,
    });
   
  },
  async down(queryInterface, Sequelize) {},
};
