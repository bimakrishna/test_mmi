'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Position.hasMany(models.Employee)
      // define association here
    }
  };
  Position.init({
    Code: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Code can not be empty"
        }
      }
    },
    nama: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Code can not be empty"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Position',
  });
  return Position;
};