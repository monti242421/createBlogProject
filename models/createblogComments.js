const Sequelize = require('sequelize');
const sequelize = require("../util/database");

const CreateBlogComments = sequelize.define('comments',{
    id:{
        type : Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    COMMENTS :{
        type: Sequelize.STRING,
        allowNull:false
    }

})

module.exports = CreateBlogComments;