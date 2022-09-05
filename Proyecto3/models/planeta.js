'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Planeta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Planeta.init({
    idPlaneta: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    diametro: DataTypes.FLOAT,
    periodo_orbita: DataTypes.FLOAT,
    periodo_rotacion: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Planeta',
  });
  return Planeta;
};