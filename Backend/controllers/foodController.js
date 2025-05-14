import { response } from "express";
import foodModel from "../models/FoodModel.js";
import fs from 'fs';

const addFood = async(req,res) =>{
    let image_filename = `${req.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }catch(error){
        console.log(err);
        res.json({success:false,message:"Error"});
    }
}

export  {addFood};