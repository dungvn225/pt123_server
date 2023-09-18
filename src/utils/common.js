export const getNumberFromString=(value)=>{
     if(value.search('triệu/tháng')!=-1){
        value=  +value.match(/\d+/)[0]    
     }else if(value.search('đồng/tháng')!=-1){
        value=  +value.match(/\d+/)[0] / Math.pow(10,3);
     }else if(value.search('m')!=-1){
     value=+value.match(/\d+/)[0]
     }
return value
}