module.exports = {
  up: async function(queryInterface, Sequelize) {
    // logic for transforming into the new state
    await queryInterface.removeColumn(
      'domains',
      'ip4'
    );
    await queryInterface.removeColumn(
      'domains',
      'ip6'
    );
    await queryInterface.removeColumn(
      'domains',
      'mail_server'
    );

  },

  down: function(queryInterface, Sequelize) {
    // logic for reverting the changes
   
  }
}
