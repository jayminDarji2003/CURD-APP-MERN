import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = async () => {
    try {
        const result = await mongoose.connect(process.env.MONGODB_URL);
        console.log("CONNECTED TO MONGODB DATABASE");
    } catch (error) {
        console.log("ERROR OCCURED WHILE CONNECTING TO MONGODB DATABASE")
        console.log(error);
    }
}

export default dbConnect;