

import moment from "moment"

export const getTime=(str)=>{
  
    let now=moment();
      now=moment(now,'dddd,DD/MM/YYYY hh:mm:ss').valueOf();
 const date=moment(str,'dddd,DD/MM/YYYY hh:mm:ss');
 const dateMilliSeconds=date.valueOf();
      
     const diffMilliseconds=now-dateMilliSeconds;  

     const secondInMillisecs = 1000;
     const minuteInMillisecs = secondInMillisecs * 60; 
     const hourInMillisecs = minuteInMillisecs * 60;  
     const dayInMillisecs = hourInMillisecs * 24; 

     if (diffMilliseconds < minuteInMillisecs) {   
        return `${Math.floor(diffMilliseconds / secondInMillisecs)} giây trước`;   
      } else if (diffMilliseconds < hourInMillisecs) { 
        return `${Math.floor(diffMilliseconds / minuteInMillisecs)} phút trước`;
      } else if (diffMilliseconds < dayInMillisecs) { 
        return `${Math.floor(diffMilliseconds / hourInMillisecs)} giờ trước`
      } else {  
        return `${date.format('dddd,DD/MM/YYYY HH:mm')}` 
      }

}