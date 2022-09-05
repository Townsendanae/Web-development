'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class galaxia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      galaxia.hasMany(models.planeta,{
        foreignKey:'idGalaxia',
      })
    }
  }
  galaxia.init({
    nombre: DataTypes.STRING,
    foto: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'galaxia',
  });
  return galaxia;
};