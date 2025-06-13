import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


export async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log('DataBase Connected');
    });
    } catch(error){
        console.error('❌ Database Connection Failed:', error.message);

    // Optional: Retry logic or fallback can go here
    // For now, exit the process safely
    process.exit(1); // Or return a meaningful flag
    }
}
