'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    project_id: DataTypes.INTEGER,
    project_name: DataTypes.STRING,
    team_member_id: DataTypes.INTEGER
  }, {});
  project.associate = function(models) {
    // associations can be defined here
    models.project.hasMany(models.employee);
  };
  return project;
};