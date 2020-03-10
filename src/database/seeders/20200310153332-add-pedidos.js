'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('pedidos', [{
        id: 1,
        preco_total: 479.8,
        pagamento: 'CRÉDITO',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pedidos', null, {});
  }
};
