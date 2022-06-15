'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("domains", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4(),
      },
      domain_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subdomain_name: {
        type: Sequelize.STRING,
      },
      tags: {
        type: Sequelize.STRING,
      },
      registration_date: {
        type: Sequelize.DATE,
      },
      updated_date: {
        type: Sequelize.DATE,
      },
      expiry_date: {
        type: Sequelize.DATE,
      },
      ip4:{
        type: Sequelize.STRING,
      },
      ip6:{
        type: Sequelize.STRING,
      },
      mail_server:{
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("domains");
  }
};
