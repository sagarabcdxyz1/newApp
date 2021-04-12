const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    Timestamp: {
      type: DataTypes.STRING(19),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Timestamp"
    },
    Name: {
      type: DataTypes.STRING(33),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Name"
    },
    FHName: {
      type: DataTypes.STRING(35),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Father/Husband Name"
    },
    Surname: {
      type: DataTypes.STRING(72),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Surname"
    },
    VillegeName: {
      type: DataTypes.STRING(44),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Villege Name"
    },
    BirthDate: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Birth Date"
    },
    BloodGroup: {
      type: DataTypes.STRING(13),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Blood Group"
    },
    Gender: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Gender"
    },
    MaritalStatus: {
      type: DataTypes.STRING(9),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Marital Status"
    },
    MobileNo: {
      type: DataTypes.STRING(24),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Mobile No"
    },
    EmailID: {
      type: DataTypes.STRING(54),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Email ID"
    },
    AlternateMobNo: {
      type: DataTypes.STRING(26),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Alternate Mob No"
    },
    JobBusiness: {
      type: DataTypes.STRING(17),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Job / Business"
    },
    BusinessInformation: {
      type: DataTypes.STRING(459),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Business Information"
    },
    JobBusinessName: {
      type: DataTypes.STRING(239),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Job / Business Name"
    },
    Designation: {
      type: DataTypes.STRING(1146),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Designation"
    },
    JobBusinessAddress: {
      type: DataTypes.STRING(159),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Job/Business Address"
    },
    City: {
      type: DataTypes.STRING(93),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "City"
    }
  };
  const options = {
    tableName: "Users",
    comment: "",
    indexes: []
  };
  const UsersModel = sequelize.define("Users_model", attributes, options);
  return UsersModel;
};