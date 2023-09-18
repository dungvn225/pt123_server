import express from 'express';
import {getAreas} from '../controllers/areas';

const areasRouter=express.Router();

areasRouter.get('/all',getAreas);

module.exports={
    areasRouter
}