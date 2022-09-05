'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class planeta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      planeta.belongsTo(models.galaxia,{
        foreignKey:'idGalaxia',
        target_key: 'id'
      })
    }
  }
  planeta.init({
    nombrePlaneta: DataTypes.STRING,
    diametro: DataTypes.FLOAT,
    periodoOrbita: DataTypes.FLOAT,
    periodoRotacion: DataTypes.FLOAT,
    idGalaxia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'planeta',
  });
  return planeta;
};