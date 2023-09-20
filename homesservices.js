// Normatizar o código, ajuda evitar gambiarras 
'use strict';

// Incluir as bibliotecas
// Criar a constante para receber a MODEL do Sequelize para usar como herança na classe
const { Model } = require('sequelize');

// Exportar a função como modulo
// Como module.exports é possível exportar funções, objetos, variáveis, etc., para serem usados em outras partes do projeto.
module.exports = (sequelize, DataTypes) => {

  // Criar a classe com o nome da tabela "HomesServices" e usar extends para trabalhar com herança, usar como herança a MODEL importada acima
  class HomesServices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // Criar o relacionamento entre as tabelas
    static associate(models) {
      // define association here
    }
  }

  // Criar as colunas que a MODELS pode manipular
  HomesServices.init({
    servTitle: DataTypes.STRING,
    servIconOne: DataTypes.STRING,
    servTitleOne: DataTypes.STRING,
    servDescOne: DataTypes.STRING,
    servIconTwo: DataTypes.STRING,
    servTitleTwo: DataTypes.STRING,
    servDescTwo: DataTypes.STRING,
    servIconThree: DataTypes.STRING,
    servTitleThree: DataTypes.STRING,
    servDescThree: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HomesServices',
  });

  // Retornar a classe HomesTops
  return HomesServices;
};