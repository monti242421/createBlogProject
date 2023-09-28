
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const sequelizeUser = require('./models/user');
const sequelizeExpense = require('./models/expense');

const sequelize = require('./util/database')
const CreateBlog = require('./models/createblog');
const CreateBlogComments = require('./models/createblogComments');

app.use(cors());

const userRoute = require('./routes/user');
const expenseRoute = require('./routes/expenseTracker');
const createblogRoute = require('./routes/createblog')

app.use(bodyParser.json({extended:false}));

CreateBlogComments.belongsTo(CreateBlog,{constraints: true, onDelete:'CASCADE'});
CreateBlog.hasMany(CreateBlogComments);

//app.use(userRoute);
//app.use(expenseRoute);
app.use(createblogRoute);
// app.use((req,res,next)=>{
//     res.status(404).send('<h1>Page Not Found</h1>');
// })

//sequelizeUser.sync()
//sequelizeExpense.sync();
sequelize.sync({force:true});
//sequelize.sync();
app.listen(4000);