import express from 'express';
import {getCatagories} from '../controllers/catagories';

const catagoriesRouter=express.Router();

catagoriesRouter.get('/',getCatagories);

module.exports={
    catagoriesRouter
} 