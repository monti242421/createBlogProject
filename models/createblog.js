const Sequelize = require('sequelize');
const sequelize = require("../util/database");

const CreateBlog = sequelize.define('createblog',{
    id:{
        type : Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    TITLE :{
        type: Sequelize.STRING,
        allowNull:false
    },
    AUTHOR:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    CONTENT:{
        type: Sequelize.STRING,
        allowNull:false,
    }

})

module.exports=CreateBlog;