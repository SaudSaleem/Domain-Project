'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("resources", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4(),
      },
      server_id: {
        type: Sequelize.UUID,
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
        type: Sequelize.STRING,
      },
      vCPU: {
        type: Sequelize.STRING,
      },
      disk_type: {
        type: Sequelize.STRING,
      },
      disk: {
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
    await queryInterface.dropTable("resources");
  }
};
