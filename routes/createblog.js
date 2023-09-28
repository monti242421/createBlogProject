const express = require("express");
const router = express.Router();
const createBlogcontroller = require('../controller/createblogController');

router.get('/createblog',createBlogcontroller.getblog)
router.get('/createblog/comments',createBlogcontroller.getblogComments)

router.post('/createblog',createBlogcontroller.addblog)
router.post('/createblog/comments',createBlogcontroller.addblogComments)

router.delete('/createblog/comments/:commentId',createBlogcontroller.deletecomment);

module.exports = router;