
import {getPostsService,getPostsLimitService,getPostNewPostService ,getOutstandingPostService,createNewService,getPostsLimitCurrentService,updatePostService,deletePostService} from '../services/post'

 const  getPosts=async(req,res)=>{
    
       
      try {
        const response=await getPostsService();
        return res.status(200).send(response)
      } catch (error) {
         return res.status(500).send({
            err:-1,
            msg:'Fail at getPosts controllers '+error 
         })
      } 
}


const  getPostsLimit=async(req,res)=>{ 
    const {page,priceNumber,areaNumber,order,...query}=req.query;   
  
      
       
       
   try {
     const response=await getPostsLimitService(parseInt(page),query,{priceNumber,areaNumber},order);   
     return res.status(200).send(response)
   } catch (error) {
      return res.status(500).send({ 
         err:-1, 
         msg:'Fail at getPostsLimit controllers '+error     
      })  
   }
}  



const  getPostsLimitCurrent=async(req,res)=>{ 
   const {id}=req.user
   const {page,...query}=req.query;   
       
   
     
      
      
  try {
    const response=await getPostsLimitCurrentService(parseInt(page),query,id);   
    return res.status(200).send(response)
  } catch (error) {
     return res.status(500).send({
        err:-1, 
        msg:'Fail at getPostsLimitCurrent controllers '+error     
     })  
  }
}  


const  getPostNewPost=async(req,res)=>{
  
  try {
    const response=await getPostNewPostService();   
    return res.status(200).send(response)
  } catch (error) {
     return res.status(500).send({
        err:-1, 
        msg:'Fail at getPosts controllers '+error      
     })  
  }
} 


const  getOutstandingPost=async(req,res)=>{
  
   try {
     const response=await getOutstandingPostService();   
     return res.status(200).send(response)
   } catch (error) {
      return res.status(500).send({
         err:-1, 
         msg:'Fail at getOutstandingPost controllers '+error      
      })  
   }
 } 


const createNew=async (req,res)=>{
     const {id}=req.user
    const {title,address,category,categoryCode,target,description,priceNumber,priceCode,areaNumber,areaCode,images} =req.body;
     try {
        const response =await createNewService(title,address,category,categoryCode,target,description,priceNumber,priceCode,areaNumber,areaCode,images,id);
         
       return  res.status(201).send(response)
     } catch (error) {
         return res.status(500).send({
        err:-1, 
        msg:'Fail at createNew controllers '+error      
     })  
     }

}


const updatePost=async (req,res)=>{
   const {id}=req.user
  const {title,address,category,categoryCode,target,description,priceNumber,priceCode,areaNumber,areaCode,images,postId,attributesId,overViewId,imagesId,labelCode} =req.body;
   
   try {
      const response =await updatePostService(id,title,address,category,categoryCode,target,description,priceNumber,priceCode,areaNumber,areaCode,images,postId,attributesId,overViewId,imagesId,labelCode);
     
     return  res.status(200).send(response)
   } catch (error) {
       return res.status(500).send({
      err:-1, 
      msg:'Fail at createNew controllers '+error      
   })   
   }

}
   const deletePost=async (req,res)=>{
        const {postId}=req.query;
      try {
          const response=await deletePostService(postId);
           return res.status(200).send(response);
      } catch (error) {
          res.status(500).send({
             err:-1,
             msg: 'Fail at deletePost controllers '+error
          })
      }
   }
module.exports={
    getPosts,
    getPostsLimit ,
    getPostNewPost, 
    getOutstandingPost,
    createNew ,
    getPostsLimitCurrent,
    updatePost,
    deletePost
}  


 
  