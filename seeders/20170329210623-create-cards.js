module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cards', [
      {
        card_id: 'test-1',
        name: 'The Test'
      }, {
        card_id: 'test-2',
        name: 'Another Test'
      }
    ],{});
  },

  down:(queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cards', null, {});
  }
};
