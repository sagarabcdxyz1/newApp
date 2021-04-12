const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    }
  };
  const options = {
    tableName: "info",
    comment: "",
    indexes: []
  };
  const InfoModel = sequelize.define("info_model", attributes, options);
  return InfoModel;
};