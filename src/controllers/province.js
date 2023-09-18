
import {getProvinceService} from '../services/province'
const getProvince=async (req,res)=>{
     try {
          const response= await getProvinceService();
          return res.status(200).send(response)
     } catch (error) {
         return res.status(500).send({
             err: -1,
             msg: 'Fail at getCatagories controller '+error
         })
     }
}

module.exports={
    getProvince
}