'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('itens_pedidos', [{
        id: 1,
        pedido_id: 1,
        produto_id: 1,
        quantidade: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        pedido_id: 1,
        produto_id: 2,
        quantidade: 1,
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('itens_pedidos', null, {});
  }
};
