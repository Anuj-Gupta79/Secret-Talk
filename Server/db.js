import mongoose from "mongoose";

const mongodb = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.DATABASE_URL)
        console.log("Database connected successfully!")
    } catch (error) {
        console.log(error);
    }
};
  

export default mongodb;