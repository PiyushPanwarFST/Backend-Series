import mongoose from "mongoose";
import { DB_NAME } from "../Constants.js";

const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(err){
        console.log("MongoDB connection error", err);
    }
}

export default connectDB;