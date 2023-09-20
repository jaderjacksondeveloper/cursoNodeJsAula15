// Normatizar o código, ajuda evitar gambiarras 
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportar o objeto como modulo
// Como module.exports é possível exportar funções, objetos, variáveis, etc., para serem usados em outras partes do projeto.
module.exports = {

  // Cadastrar o registro na tabela "HomesServices"
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('HomesServices', [
      {
        servTitle: 'Serviços',
        servIconOne: 'fa-solid fa-wifi',
        servTitleOne: 'Wifi veloz',
        servDescOne: 'Sed et dui in ipsum sollicitudin efficitur quis sed elit volutpat.',
        
        servIconTwo: 'fa-solid fa-rocket',
        servTitleTwo: 'Espaço inspirador',
        servDescTwo: 'Sed et dui in ipsum sollicitudin efficitur quis sed elit volutpat.',
        
        servIconThree: 'fa-solid fa-handshake',
        servTitleThree: 'Reuniões',
        servDescThree: 'Sed et dui in ipsum sollicitudin efficitur quis sed elit volutpat.',
       
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  // Limpar os registros da tabela "HomesServices"
  async down (queryInterface) {
    await queryInterface.bulkDelete('HomesServices', null, {});
  }
};
