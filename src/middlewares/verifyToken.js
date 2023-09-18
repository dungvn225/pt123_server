
import jwt from "jsonwebtoken";
export const verifyToken=(req,res,next)=>{
     console.log(req.headers.authorization)
    let accessToken=req.headers.authorization.split(' ')[1];
    
    if(!accessToken){
        return res.status(401).send({
            err: 1,
            msg:'Missing access token'  
        })
    }
    jwt.verify(accessToken,process.env.SECRET_KEY,(err,decode)=>{ 
         if(err){
            return res.status(401).send({
                err: 1,
                msg:'Access token expired' 
            })
         }
         req.user=decode;
        
         next(); 
    })  

}

  