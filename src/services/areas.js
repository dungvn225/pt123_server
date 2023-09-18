
import db from '../models'
const getAreasService= async()=>{
   try {
    const response=   await db.area.findAll({
         attributes:['code','value','order']
    });
    
        return {
             err: response? 0 : 1,
             msg: response? 'ok' : 'Fail to get AreasService', 
             response
        }
   } catch (error) {
       return error
   }

}

module.exports={
    getAreasService
}
    