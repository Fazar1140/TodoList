'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task_inner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      task_inner.belongsTo(models.task,{
          foreignKey:'task_id'
      })
    }
  }
  task_inner.init({
    task_id : DataTypes.INTEGER,
    task_step: DataTypes.STRING,
    task_info: DataTypes.STRING,
    task_status: DataTypes.ENUM('Important', 'Intermediate', 'Optional')
  }, {
    sequelize,
    modelName: 'task_inner',
  });
  return task_inner;
};