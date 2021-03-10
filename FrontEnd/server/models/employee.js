'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.belongsTo(models.Position)
      // define association here
    }
  };
  Employee.init({
    nama: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          args: true,
          msg: "Nama can not be empty"
        }
      }
    },
    birth_date: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          args: true,
          msg: "birth_date can not be empty"
        }
      }
    },
    Id_number: {
      type: DataTypes.INTEGER,
      unique: true,
      validate:{
        notEmpty: {
          args: true,
          msg: "Id_number can not be empty"
        }
      }
    },
    gender: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: {
          args: true,
          msg: "Nama can not be empty"
        }
      }
    },
    PositionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};