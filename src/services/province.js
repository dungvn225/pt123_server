
import db from '../models'
const getProvinceService= async()=>{
   try {
    const response=   await db.province.findAll({
         attributes:['code','value']
    });
    
        return {
             err: response? 0 : 1,
             msg: response? 'ok' : 'Fail to get getProvinceService', 
             response
        }
   } catch (error) {
        return error
   }

}

module.exports={
     getProvinceService
}
 


