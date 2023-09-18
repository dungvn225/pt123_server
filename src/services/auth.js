import db from '../models'
import {v4} from 'uuid'
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken')
const  registerService=  (name,password,passwordConfirm,phone,zalo) => new Promise(async (resolve, reject) => {
     
   if(password==passwordConfirm){
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);
       try {
           const response=   await db.user.findOrCreate({      
             where:{phone},    
             defaults:{
               name,
               password: hashPassword,
               passwordConfirm:hashPassword,
               phone,
               zalo,
               id:v4()
             },
             raw:true
           
                 }
           )
           const token =response[1] && jwt.sign({  
             id: response[0].id,
             phone: response[0].phone
          }, process.env.SECRET_KEY); 
           resolve({   
            err: token? 0: 2, 
            msg: token? 'Register is successfully': 'phone number has been already used',
            token: token? token: null
   
           });   
        } catch (error) {
           reject(error)
        }
   }
   
}) 
const  loginService=  (phone,password) => new Promise(async (resolve, reject) => {
  
    try {
        const response=   await db.user.findOne({     
          where:{phone},    
          raw: true  
        
              }
        )

       let isCorrectPassword
       if(response){
          isCorrectPassword=bcrypt.compareSync(password,response.password); 
       }
        
        
          
       
        let token;
        if(response && isCorrectPassword){
         token =response && jwt.sign({  
            id: response.id,
            phone: response.phone
         }, process.env.SECRET_KEY,{ expiresIn: 60 * 60 * 24 });  
 
                                                      
        }                                               
                                                          
         
        resolve({
         err: token? 0: 2,   
         msg: token? 'Login is successfully':response?'Password is wrong!': 'phone number not found!',
         token: token? token: null
         
        });   
     } catch (error) {
        reject(error)
     }
}) 


module.exports={
registerService,
loginService,

}

















