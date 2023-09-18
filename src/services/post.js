import db from '../models'

import {v4} from 'uuid'
import moment from 'moment'
import 'moment/locale/vi'; 

import {generateCode} from '../utils/generateCode'
const { Op, where } = require("sequelize");
export const getPostsService=async(number)=>{
   
    try {
        const response=await db.post.findAll({
             raw:true,
             nest:true,  
             include:[
               
               {model:db.image, as: 'images',  attributes:['image']},  
               {model:db.attribute, as: 'attributes',attributes:['price','acreage','published','hashtag']},
               {model:db.user, as: 'user',  attributes:['name','zalo','phone']}, 
             ]
        });

        return {
            err:response?0:1,
            msg: response?'ok':'Fail to get getPostsService', 
            response
        }
    } catch (error) {
        return error
       
    }
}
     

 const getPostsLimitService=async(page,query,{priceNumber,areaNumber},order)=>{ 
        const latestNews =order &&  {order: [order]}
     
    
     const queries={
        ...query
     }
     
     if(priceNumber){
        queries.priceNumber= {
            [Op.between]: priceNumber
          }
     }
     if(areaNumber){
        queries.areaNumber= {
            [Op.between]: areaNumber
          }
     }
    
    try {
        const response=await db.post.findAndCountAll({
            
        ...latestNews, 
            where:  queries , 
            offset: (page-1) *  parseInt(process.env.LIMIT) || 0,   
            limit: parseInt(process.env.LIMIT),   
                
             raw:true,
             nest:true,  
             include:[
               
               {model:db.image, as: 'images',  attributes:['image']},  
               {model:db.attribute, as: 'attributes',attributes:['price','acreage','published','hashtag']}, 
               {model:db.user, as: 'user',  attributes:['name','zalo','phone','email','avatar']}, 
               {model:db.overview,as:'overview' }
             ]
        });

        return {
            err:response?0:1,
            msg: response?'ok':'Fail to get getPostsLimitService',         
            response
        }
    } catch (error) { 
        return error     
    }
}  




const getPostsLimitCurrentService=async(page,query,id)=>{ 
 
   
    const queries={
       ...query,userId:id
    }
    
   
   
   try {
       const response=await db.post.findAndCountAll({
           order: [
              
               ['createdAt','DESC']   
           ], 
           where:  queries , 
           offset: (page-1) *  parseInt(process.env.LIMIT) || 0,   
           limit: parseInt(process.env.LIMIT),   
               
            raw:true,
            nest:true,  
            include:[
              
              {model:db.image, as: 'images',  attributes:['image']},  
              {model:db.attribute, as: 'attributes',attributes:['price','acreage','published','hashtag']}, 
              {model:db.user, as: 'user',  attributes:['name','zalo','phone']}, 
              {model:db.overview,as:'overview' }
             
            ]
       });

       return {
           err:response?0:1,
           msg: response?'ok':'Fail to get getPostsLimitCurrentService',         
           response
       }
   } catch (error) { 
      return error
   }
}  



const getPostNewPostService=async()=>{ 

   try {
       const response=await db.post.findAll({ 
           
        order: [
          
            ['createdAt','DESC']  
        ], 
           offset: 0,   
           limit:parseInt(process.env.LIMIT) ,   
           
            raw:true,
            nest:true,  
            include:[
              
              {model:db.image, as: 'images',  attributes:['image']},  
              {model:db.attribute, as: 'attributes',attributes:['price','acreage','published','hashtag']}, 
              {model:db.user, as: 'user',  attributes:['name','zalo','phone']}, 
            ]
       });

       return {
           err:response?0:1,
           msg: response?'ok':'Fail to get getPostsService',            
           response
       }
   } catch (error) { 
       return error      
   }
}   

const getOutstandingPostService=async()=>{ 

    try {
        const response=await db.post.findAll({ 
            
         order: [
           
             ['star','DESC']  
         ], 
            offset: 0,   
            limit:parseInt(process.env.LIMIT) ,   
            
             raw:true,
             nest:true,  
             include:[
               
               {model:db.image, as: 'images',  attributes:['image']},  
               {model:db.attribute, as: 'attributes',attributes:['price','acreage','published','hashtag']}, 
               {model:db.user, as: 'user',  attributes:['name','zalo','phone']}, 
             ]
        });
 
        return {
            err:response?0:1,
            msg: response?'ok':'Fail to get getOutstandingPostService',            
            response
        }
    } catch (error) { 
        return error      
    }
 }   
  

    const createNewService= async(title,address,category,categoryCode,target,description,priceNumber,priceCode,areaNumber,areaCode,images,id)=>{
     
        const postId=v4();
        const attributesId=v4();
        const overViewId=v4();
        const imagesId=v4();
        const labelId=v4();
      
        const labelCode= generateCode(category+' '+address.split(',')[1].trim());
     
        const province=address.split(',')[1].trim();  
        
        
        const hashtag=Math.floor(Math.random() * Math.pow(10,6));
        var currentDate =  moment();
        try {
            await db.post.create({
                id:postId,
                title,
                labelCode,
                address,
                attributesId, 
                categoryCode,
                 target,
                description :JSON.stringify([description]),
                userId:id,
                overViewId,
                imagesId,
                areaCode,
                priceCode,
                provinceCode: province.includes('Tỉnh')? generateCode(province.replace('Tỉnh','')): generateCode(province.replace('Thành phố','')) || null,
                areaNumber,
                priceNumber:priceNumber % 1000000 ==0 ? parseInt(priceNumber/1000000) : (priceNumber/1000000).toFixed(1)
             })
           
             await db.label.create({
                id:labelId,
                code:labelCode,
                value:generateCode(category+' '+address.split(' ')[1])
              })
              await db.attribute.create({
                id:attributesId,
                price:priceNumber / 1000000 < 1 ? priceNumber +' đồng/tháng':
                     priceNumber%1000000==0? priceNumber/1000000 +' triệu/tháng': parseFloat((priceNumber/1000000).toFixed(1)) +' triệu/tháng',  
                acreage:areaNumber +'m2',
                published:moment().format('dddd,DD/MM/YYYY HH:mm').toString(),
                hashtag
            })
            await db.image.create({
                id:imagesId,
                image: JSON.stringify(images) 
            })
            await db.overview.create({
                id:overViewId,
                code:'#'+hashtag,
                area: category+ ' '+address.split(' ')[1],
                type: category,
                target,
                bonus: 'Tin thường',
                created: moment().toString(), 
                expire: currentDate.add(10,'days') .toString()
               
                 })
            await  db.province.findOrCreate({
                where: {
                    [Op.or]: [
                      { value: province.replace('Tỉnh','')},   
                      { value:  province.replace('Thành phố','') }  
                    ]
                  },
                 defaults:{
                     code: province.includes('Tỉnh')? generateCode(province.replace('Tỉnh','')): generateCode(province.replace('Thành phố','')),
                     value:province.includes('Tỉnh')? province.replace('Tỉnh',''): province.replace('Thành phố',''),
    
                 }
                 })
                 return ({
                    err:0,
                    msg:'ok'

                 })
        } catch (error) {
             return error
        }
       
    }



    const updatePostService= async(id,title,address,category,categoryCode,target,description,priceNumber,priceCode,areaNumber,areaCode,images,postId,attributesId,overViewId,imagesId,labelCode)=>{
     
       
      
        const province=address.split(',')[1].trim();  
         
        
        const hashtag=Math.floor(Math.random() * Math.pow(10,6));
        var currentDate =  moment();
        try {
            await db.post.update({
             
                title,
                labelCode,
                address,
                attributesId,  
                categoryCode,
                 target,
                description :JSON.stringify([description]),
                userId:id,
                overViewId, 
                imagesId,
                areaCode,
                priceCode,
                provinceCode: province.includes('Tỉnh')? generateCode(province.replace('Tỉnh','')): generateCode(province.replace('Thành phố','')) || null,
                areaNumber,
                priceNumber:priceNumber % 1000000 ==0 ? parseInt(priceNumber/1000000) : (priceNumber/1000000).toFixed(1)
             },
             {
                where:{
                  id:  postId
                }
             })
           
             await db.label.update({
               
                value:generateCode(category+' '+address.split(' ')[1])
              },{
                where: {
                    code:labelCode
                }
              })
              await db.attribute.update({
               
                price:priceNumber / 1000000 < 1 ? priceNumber +' đồng/tháng':
                     priceNumber%1000000==0? priceNumber/1000000 +' triệu/tháng': parseFloat((priceNumber/1000000).toFixed(1)) +' triệu/tháng',  
                acreage:areaNumber +'m2',
            
            },{
                where:{
                    id:attributesId,
                }
            })
            await db.image.update({
               
                image: JSON.stringify(images) 
            },{
                where:{
                    id:imagesId,
                }
            })
            await db.overview.update({
              
                area: category+ ' '+address.split(' ')[1],
                type: category,
                target,
            
                 },{
                    where:{ 
                        id:overViewId,
                    }
                 })
            await  db.province.findOrCreate({ 
                where: {
                    [Op.or]: [
                      { value: province.replace('Tỉnh','')},  
                      { value:  province.replace('Thành phố','') }  
                    ]
                  },
                 defaults:{
                     code: province.includes('Tỉnh')? generateCode(province.replace('Tỉnh','')): generateCode(province.replace('Thành phố','')),
                     value:province.includes('Tỉnh')? province.replace('Tỉnh',''): province.replace('Thành phố',''),
    
                 }
                 })
                 return ({
                    err:0,
                    msg:'updated'

                 })
        } catch (error) {
             return error
        }
        
     }

     const deletePostService=async (postId)=>{
           try {
                await db.post.destroy({
                    where :{
                        id:postId
                    }
                })
                return {
                    err:0,
                    msg:'ok'
                }
           } catch (error) {
               return error
           }
     }

module.exports={
    getPostsService,
    getPostsLimitService,
    getPostNewPostService,
    getOutstandingPostService,
    createNewService,
    getPostsLimitCurrentService,
    updatePostService,
    deletePostService

}
 

