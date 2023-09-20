// Normatizar o código, ajuda evitar gambiarras 
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportar o objeto como modulo
// Como module.exports é possível exportar funções, objetos, variáveis, etc., para serem usados em outras partes do projeto.
module.exports = {

  // Criar a tabela HomesServices com as colunas implementas abaixo
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HomesServices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      servTitle: {
        type: Sequelize.STRING
      },
      servIconOne: {
        type: Sequelize.STRING
      },
      servTitleOne: {
        type: Sequelize.STRING
      },
      servDescOne: {
        type: Sequelize.STRING
      },
      servIconTwo: {
        type: Sequelize.STRING
      },
      servTitleTwo: {
        type: Sequelize.STRING
      },
      servDescTwo: {
        type: Sequelize.STRING
      },
      servIconThree: {
        type: Sequelize.STRING
      },
      servTitleThree: {
        type: Sequelize.STRING
      },
      servDescThree: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  // Executar rollback - Permite que seja desfeita a migration, permitindo a gestão das alterações do banco de dados e versionamento.
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HomesServices');
  }
};