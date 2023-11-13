const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Candidat extends Model {}

Candidat.init(
   {
      firstname: DataTypes.STRING(64),
      lastname: DataTypes.STRING(64),
      birthday: DataTypes.STRING(64),
      search: DataTypes.STRING(255),
      linkedin: DataTypes.STRING(64),
      description: DataTypes.TEXT,
   },
   {
      sequelize,
      tableName: "candidat",
   }
);

module.exports = { Candidat };
