import {getProvince} from '../controllers/province';
import express from 'express';

const provinceRouter=express.Router();
provinceRouter.get('/',getProvince);


module.exports={
    provinceRouter
}