'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('usuarios', [{
        email: 'admin@email.com',
        senha: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        email: 'guest@email.com',
        senha: 'guest',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuarios', null, {});
  }
};
