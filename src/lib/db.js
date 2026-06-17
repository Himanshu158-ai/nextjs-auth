import mongoose from "mongoose";

const connectDb = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/nextjs-auth")
        console.log("MongoDB connected")
    } catch (error) {
        console.log("Error in connecting to MongoDB", error)
    }

}

export default connectDb