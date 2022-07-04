const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category=require("../categories/category")

const Article= connection.define('articles',{

                  title:{
                  type:Sequelize.STRING,
                  allowNull:false
                  },slug:{
                  type:Sequelize.STRING,
                  allowNull:false                
                  },
                  body:{
                    type: Sequelize.TEXT,
                    allowNull:false                
                  }

});

Category.hasMany(Article);//relacionamento com muitos 
Article.belongsTo(Category);//relacionamento um para um



module.exports= Article;