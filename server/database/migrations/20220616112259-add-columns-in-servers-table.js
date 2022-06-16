"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("servers", "memory", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("servers", "vCPU", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("servers", "disk_type", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("servers", "disk", {
      type: Sequelize.STRING,
    });
  },
  async down(queryInterface, Sequelize) {},
};
