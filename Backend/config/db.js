import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://namdevkewat1155:<db_password>@cluster0.1tctxpj.mongodb.net/SnapEats').then(()=>console.log("DB Connected"));
}