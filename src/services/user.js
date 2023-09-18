
import db from '../models'
const getOneService= async(id)=>{
   try {
    const response=   await db.user.findOne({
       where:{
          id,
        },
       attributes:{
         exclude:['password','passwordConfirm']
       }
    }); 
    
        return {
             err: response? 0 : 1,
             msg: response? 'ok' : 'Fail to get getOneService',   
             response
        }
   } catch (error) {
       return error
   }

}


const updateUserService= async(id,body)=>{
   try {
    const response=   await db.user.update(
      body,
      {
       where:{ 
          id,
        }
    }); 
    
        return {
           err:response?0:1,
           msg:response?'updated':'Fail to get updateUserService'
        }
   } catch (error) {
        return error
   }

}
module.exports={
    getOneService,
    updateUserService
}
 
