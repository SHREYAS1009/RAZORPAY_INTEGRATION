import app from './app.js';
import dotenv from 'dotenv'
import Razorpay from 'razorpay'
import cors from 'cors'
dotenv.config({ path: './config/config.env' });

const port=process.env.PORT || 3000;

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET

  
});




app.use(cors());
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    
})

