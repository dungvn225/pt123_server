import express from 'express';
import {getPrices} from '../controllers/prices';

const pricesRouter=express.Router();

pricesRouter.get('/all',getPrices);

module.exports={
    pricesRouter
}