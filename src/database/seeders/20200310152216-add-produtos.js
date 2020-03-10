'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('produtos', [{
        id: 1,
        nome: 'Camiseta Sport Club Internacional 2020/I',
        preco: 249.90,
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: 2,
        nome: 'Camiseta Associação Chapecoense de Futebol 2020/I',
        preco: 229.90,
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('produtos', null, {});
  }
};
