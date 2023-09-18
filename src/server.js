
import cors from "cors";
import express from 'express'
import {rootRouter} from './routes'
require("dotenv").config();

 
const app = express();
app.use(
  cors({
    origin: process.env.CLINENT_URL, 
    methods: ["GET", "PUT", "POST", "DELETE"], 
 
  })
);

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8888;  



app.use('/api/v1',rootRouter);
app.listen(port,()=>{
    console.log('server is running on the port '+port); 
})  


