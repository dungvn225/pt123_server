

import {catagoriesRouter} from './catagories'
import {postRouter} from './post'
import {pricesRouter} from './prices'
import {areasRouter} from './areas'
import {provinceRouter} from './province'
import {userRouter} from './user'
const { authRouter } =require('./auth');
const express= require('express');



const rootRouter=express.Router();


rootRouter.use('/auth',authRouter);


rootRouter.use('/categories',catagoriesRouter)

rootRouter.use('/post',postRouter);

rootRouter.use('/prices',pricesRouter);

rootRouter.use('/areas',areasRouter);

rootRouter.use('/province',provinceRouter);

rootRouter.use('/user',userRouter)
module.exports={
    rootRouter
}
   