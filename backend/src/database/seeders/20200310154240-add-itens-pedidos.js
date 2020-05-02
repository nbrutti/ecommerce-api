"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "itens_pedidos",
      [
        {
          pedido_id: 1,
          produto_id: 1,
          quantidade: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          pedido_id: 1,
          produto_id: 2,
          quantidade: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("itens_pedidos", null, {});
  },
};
