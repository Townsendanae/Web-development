'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('planeta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombrePlaneta: {
        type: Sequelize.STRING
      },
      diametro: {
        type: Sequelize.FLOAT
      },
      periodoOrbita: {
        type: Sequelize.FLOAT
      },
      periodoRotacion: {
        type: Sequelize.FLOAT
      },
      idGalaxia:  {
        type: Sequelize.INTEGER,
        references: {
          model: 'galaxia',
          key:'id'
        }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('planeta');
  }
};