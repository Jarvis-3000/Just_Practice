const mongoose=require("mongoose")
const Schema=mongoose.Schema
// const { Schema } = mongoose;

const studentSchema=new Schema({
  _id:Number,
  name:String,
  age:Number
})

//Student(collections in mongoDB) is the name of collection
const Student=mongoose.model("Student",studentSchema) 

module.exports=Student