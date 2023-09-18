import {getPosts,getPostsLimit,getPostNewPost ,getOutstandingPost,createNew,getPostsLimitCurrent,updatePost,deletePost} from '../controllers/post';

import  {verifyToken}  from '../middlewares/verifyToken';
import express from 'express';

const postRouter=express.Router();
postRouter.get('/all',getPosts); 
postRouter.get('/limit',getPostsLimit); 
postRouter.get('/newPost',getPostNewPost);
postRouter.get('/outstandingPost',getOutstandingPost)
postRouter.get('/limit-current',verifyToken,getPostsLimitCurrent)
postRouter.post('/create-new',verifyToken,createNew);
postRouter.put('/update',verifyToken,updatePost);
postRouter.delete('/delete',verifyToken,deletePost)
module.exports={
    postRouter 
}     