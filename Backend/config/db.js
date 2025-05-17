import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://neptune:asuna@cluster0.vbet7ym.mongodb.net/SnapEats').then(()=>console.log("DB Connected"));
}