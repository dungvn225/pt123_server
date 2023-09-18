 import { registerService,loginService } from "../services/auth";
 const register=async  (req,res)=>{
    const {name,phone,password,passwordConfirm,zalo}=req.body;  
     try {
       
        const response= await registerService(name,password,passwordConfirm,phone,zalo);  
      return  res.status(200).send(response); 
     } catch (error) {
        return  res.status(500).send({
            err:-1,  
            msg:'Fail at register controller '+error
          })
     }
}


const login=async  (req,res)=>{
  const {phone,password}=req.body;  
   try {
     
      const response= await loginService(phone,password);  
    return  res.status(200).send(response);
   } catch (error) {
      return  res.status(500).send({
          err:-1, 
          msg:'Fail at login controller '+error 
        })
   }
}


 


module.exports={
    register,
    login,
    
}



