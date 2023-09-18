
import {getAreasService} from '../services/areas'
const getAreas=async (req,res)=>{
     try {
          const response= await getAreasService();
          return res.status(200).send(response)
     } catch (error) {
         return res.status(500).send({
             err: -1,
             msg: 'Fail at getAreas controller '+error
         })
     }
}

module.exports={
    getAreas
}         