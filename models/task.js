'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      task.belongsTo(models.users,{
        foreignKey:'user_id'
      })
      task.hasMany(models.task_inner,{
        foreignKey:'task_id'
      })
    }
  }
  task.init({
    user_id: DataTypes.INTEGER,
    task_title: DataTypes.STRING,
    task_status: DataTypes.ENUM('Important', 'Intermediate', 'Optional')
  }, {
    sequelize,
    modelName: 'task',
  });
  return task;
};