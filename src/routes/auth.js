const { register,login   } =require('../controllers/auth');
const express= require('express');
const passport=require('passport')

const authRouter=express.Router();

authRouter.post('/register',register);


authRouter.post('/login',login);




module.exports ={
    authRouter
} 