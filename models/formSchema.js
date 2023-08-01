import mongoose from "mongoose";

const form= new mongoose.Schema({
    Name:{type:String,required:true, trim:true},
    Number:{type:Number,required:true, trim:true},
    Email:{type:String,required:true, trim:true, unique: true },
    State:{type:String,required:true, trim:true},
    City:{type:String,required:true, trim:true},
    Address:{type:String,required:true, trim:true}
})  

const formmodel=mongoose.model('formdetails',form);

export default formmodel
