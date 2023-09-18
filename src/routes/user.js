import express from 'express';
import {getCurrent,updateUser} from '../controllers/user';
import  {verifyToken}  from '../middlewares/verifyToken';



const userRouter=express.Router();

userRouter.get('/getCurrent',verifyToken,getCurrent)

userRouter.put('/update',verifyToken,updateUser);





module.exports={
    userRouter
}    



