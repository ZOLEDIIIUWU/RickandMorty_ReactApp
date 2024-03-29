const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         allownull: false,
         primaryKey:true
      },
      name: {
         type: DataTypes.STRING,
         allownull: false
      },
      status: {
         type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
         allownull: false
      },
      sepecies: {
         type: DataTypes.STRING,
         allownull: false
      },
      gender: {
         type: DataTypes.ENUM('Male','Female','Genderless','unknown'),
         allownull: false
      },
      origin: {
         type: DataTypes.STRING,
         allownull:false
      },
      image: {
         type: DataTypes.STRING,
         allownull: false
      }
   }, { timestamps: false });
};
