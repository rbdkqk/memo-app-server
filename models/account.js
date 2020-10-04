"use strict";
// const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const accounts = sequelize.define(
    "accounts",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  accounts.associate = function (models) {
    // associations can be defined here
  };
  return accounts;
};

// module.exports = (sequelize, DataTypes) => {
//   class account extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   account.init(
//     {
//       username: DataTypes.STRING,
//       password: DataTypes.STRING,
//     },
//     {
//       sequelize,
//       modelName: "account",
//     }
//   );
//   return account;
// };
