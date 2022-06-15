'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("servers", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4(),
      },
      type: {
        type: Sequelize.STRING,
      },
      Provider: {
        type: Sequelize.STRING,
      },
      Location: {
        type: Sequelize.STRING,
      },
      estimated_cost: {
        type: Sequelize.STRING,
      },
      currency: {
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
    await queryInterface.dropTable("servers");
  }
};
