const createblog = require('../models/createblog')
const createblogComments = require('../models/createblogComments')

exports.getblog=(req,res,next)=>{
    createblog.findAll().then(blogs=>{
        res.send(blogs);
    }).catch(err=>{
        console.log(err)
    });
}

exports.addblog=(req,res,next)=>{
    console.log(req.body);
    createblog.create({
        TITLE:req.body.title,
        AUTHOR:req.body.author,
        CONTENT:req.body.content
    }).then(result =>{
        console.log(result.dataValues)
        res.status(201).json({newBlogDetail: result.dataValues});
    }).catch(err=>{
        console.log(err)
        res.status(500).send(err);
    })
}

exports.getblogComments=(req,res,next)=>{
    createblogComments.findAll().then(comments=>{
        res.send(comments);
    }).catch(err=>{
        console.log(err)
    });
}

exports.addblogComments=(req,res,next)=>{
    console.log(req.body);
    var comment = req.body.comment;
    var id = req.body.blogid;
    createblogComments.create({
        COMMENTS:comment,
        createblogId:id
    }).then(result =>{
        console.log(result.dataValues)
        res.status(201).json({newBlogCommentsDetail: result.dataValues});
    }).catch(err=>{
        console.log(err)
        res.status(500).send(err);
    })
}


exports.deletecomment=(req,res,next)=>{
    console.log(req.params.commentId);
    const commentId = req.params.commentId;
    createblogComments.findByPk(commentId)
    .then(comment=>{
        comment.destroy();
        res.send(comment)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).send(err);
    });
}
