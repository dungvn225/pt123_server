
import db from '../models'
const getPricesService= async()=>{
   try {
    const response=   await db.price.findAll({
         attributes:['order','code','value']
    });
    
        return {
             err: response? 0 : 1,
             msg: response? 'ok' : 'Fail to get getPrices', 
             response
        }
   } catch (error) {
       return error
   }

}

module.exports={
    getPricesService
}
  