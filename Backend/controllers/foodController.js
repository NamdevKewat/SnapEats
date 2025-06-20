import { response } from "express";
import foodModel from "../models/FoodModel.js";
import fs from 'fs';

const addFood = async(req,res) =>{
    let image_filename = `${req.filename}`;
    console.log(`request=`,req.file);
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:req.file.originalname
    })
    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

//all food list
const listFood = async (req,res)=>{
    try{
        const food = await foodModel.find({});
        console.log("food=",food);
        res.json({success:true,data:food})
    }catch(err){
        console.log(err);
        res.json({successfalse,message:"Error"});
    }
}

//Remove Food
const removeFood = async(req,res)=>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"});
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"});  
    }
}
export  {addFood,listFood,removeFood};