import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  identity: {
    type: String,
    required: true,
  },
  identitynum: {
    type: Number,
    required: true,
  },
  adult: {
    type: Number,
    required: true,
  },
  children: {
    type: Number,
    required: true,
  },

  mon_name: {
    type: String,
    required: true,
  },
  mon_place: {
    type: String,
    required: true,
  },
  total_fee: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Bookings", BookingSchema);
