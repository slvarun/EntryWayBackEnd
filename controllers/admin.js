import Monuments from "../models/Monuments.js";
import bookingorder from "../models/bookingorder.js";
export const get_all_mon = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const all_monuments = await Monuments.find();
    res.status(200).json(all_monuments);
  } catch (err) {
    next(err);
  }
};



export const find_mon_qrs = async (req, res, next) => {
  const { id, ...others } = req.query;
  try {
    
    const all_monuments = await bookingorder.find({...others, mon_name:{$eq:id}});
    res.status(200).json(all_monuments);
  } catch (err) {
    next(err);
  }
};
