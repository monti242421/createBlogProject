const createblog = require('../models/createblog')
const createblogComments = require('../models/createblogComments')

exports.getblog= async (req,res,next)=>{
    try{
        var result = await createblog.findAll();
        res.send(result);
    }catch(err){
        console.log(err);
    }
}

exports.addblog=async (req,res,next)=>{
    console.log(req.body);
    if(!req.body.title){
        throw new Error('Title is mandatroy');
    }
    if(!req.body.author){
        throw new Error('Author Name is mandatroy');
    }
    if(!req.body.content){
        throw new Error('Blog Content is mandatroy');
    }

    try{
        var result = await createblog.create({
            TITLE:req.body.title,
            AUTHOR:req.body.author,
            CONTENT:req.body.content
        })
        console.log(result.dataValues)
        res.status(201).json({newBlogDetail: result.dataValues});


    }catch(err){
        console.log(err)
        res.status(500).send(err);
    }
}

exports.getblogComments=async (req,res,next)=>{
    try{
        var result = await createblogComments.findAll()
        res.send(result);
    }catch(err){
        console.log(err)
    }
}

exports.addblogComments=async (req,res,next)=>{
    console.log(req.body);
    var comment = req.body.comment;
    var id = req.body.blogid;
    if(!req.body.comment){
        throw new Error('You cant post empty');
    }
    try{
        var result = await createblogComments.create({
            COMMENTS:comment,
            createblogId:id
        })

        console.log(result.dataValues)
        res.status(201).json({newBlogCommentsDetail: result.dataValues});
    }catch(err){
        console.log(err)
        res.status(500).send(err);
    }
}


exports.deletecomment=async (req,res,next)=>{
    console.log(req.params.commentId);
    const commentId = req.params.commentId;
    try{
        var result = await  createblogComments.findByPk(commentId);
        result.destroy();
        res.send(result)
    }catch(err){
        console.log(err)
        res.status(500).send(err);
    }
    
}
