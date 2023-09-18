
import {getPricesService} from '../services/prices'
const getPrices=async (req,res)=>{
     try {
          const response= await getPricesService();
          return res.status(200).send(response)
     } catch (error) {
         return res.status(500).send({
             err: -1,
             msg: 'Fail at getCatagories controller '+error
         })
     }
}

module.exports={
    getPrices
}