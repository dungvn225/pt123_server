
import {getOneService,updateUserService} from '../services/user'
const getCurrent=async (req,res)=>{
   
    const {id} = req.user;
   
     try {
          const response= await getOneService(id);
          return res.status(200).send(response)
     } catch (error) {
         return res.status(500).send({
             err: -1, 
             msg: 'Fail at getUser controller '+error
         })
     }
} 


const updateUser=async (req,res)=>{
   
    const {id} = req.user;
    console.log(id)
    const body=req.body;
     console.log(body)
     try {
          const response= await updateUserService(id,body);
          return res.status(200).send(response)
     } catch (error) {
         return res.status(500).send({
             err: -1, 
             msg: 'Fail at updateUser controller '+error
         })
     }
} 
module.exports={
    getCurrent,
    updateUser
} 