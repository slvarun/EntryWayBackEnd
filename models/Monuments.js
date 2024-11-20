import mongoose from "mongoose";


const MonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  adult_price: {
    type: Number,
    required: true,
  },
  child_price: {
    type: Number,
    required: true,
  },
  photos:{
    type:String,
    required: true,
  },
  rating:{
    type:Number,
    required: true
  },
  address:{
    type:String,
    required:true
  }
});

export default mongoose.model("Monuments", MonSchema)