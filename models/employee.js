'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    employee_id: DataTypes.INTEGER,
    employee_name: DataTypes.STRING,
    project_id: DataTypes.INTEGER
  }, {});
  employee.associate = function(models) {
    // associations can be defined here
    models.employee.hasMany(models.project);
  };
  return employee;
};