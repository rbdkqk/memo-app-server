"use strict";
// const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const memo = sequelize.define(
    "memo",
    {
      writer: DataTypes.STRING,
      contents: DataTypes.STRING,
      // starred: DataTypes.ARRAY(DataTypes.STRING),  // 별점 기능을 위한 것인데, 포기함. mysql에서는 안되는 것 같다. (PostgreSQL only.)
      is_edited: DataTypes.BOOLEAN,
    },
    {}
  );
  memo.associate = function (models) {
    // associations can be defined here
  };
  return memo;
};

// module.exports = (sequelize, DataTypes) => {
//   class memo extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   memo.init(
//     {
//       writer: DataTypes.STRING,
//       contents: DataTypes.STRING,
//       starred: DataTypes.ARRAY(DataTypes.STRING),
//       is_edited: DataTypes.BOOLEAN,
//     },
//     {
//       sequelize,
//       modelName: "memo",
//     }
//   );
//   return memo;
// };
