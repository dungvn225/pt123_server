
import db from '../models'
const getCatagoriesService= async()=>{
   try {
    const response=   await db.category.findAll({
         attributes:['code','value']
    });
    
        return {
             err: response? 0 : 1,
             msg: response? 'ok' : 'Fail to get Categorier', 
             response
        }
   } catch (error) {
       return error
   }

}

module.exports={
    getCatagoriesService
}
   