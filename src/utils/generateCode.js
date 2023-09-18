
function generateCode(value) { 
 value=value.normalize('NFD')
 .replace(/[\u0300-\u036f]/g, '')
 .replace(/đ/g, 'd').replace(/Đ/g, 'D')
 .split(' ') 
 .join('')  

  let result='';
  let length=value.length;
 for(let i=0;i<3;i++){
     result+=value.charAt(length-1);
     length=length/2
 }
 return value.charAt(2)+ result.toUpperCase();
}

     
module.exports={  
    generateCode    
}
    