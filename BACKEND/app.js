import express from 'express'
import payment from './routes/productRoutes.js';
import cors from 'cors'
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.use(cors());


app.use("/api/v1",payment)
export default app;
