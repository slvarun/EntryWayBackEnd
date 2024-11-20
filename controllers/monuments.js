import Monuments from "../models/Monuments.js"

export const createmon = async (req, res, next) => {
  const newMonument = new Monuments(req.body);
  try {
    const savedMon = await newMonument.save();
    res.status(200).json(savedMon);
  } catch (err) {
    next(err);
  }
};
export const updatemon = async (req, res, next) => {
  try {
    const updateMon = await Monuments.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateMon);
  } catch (err) {
    next(err);
  }
};
export const deletemon = async (req, res, next) => {
  try {
    await Monuments.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted the monument");
  } catch (err) {
    next(err);
  }
};
export const getmon = async (req, res, next) => {
  try {
    const monument = await Monuments.findById(req.params.id);
    
    res.status(200).json(monument);
  } catch (err) {
    next(err);   
  }
};
export const getallmon = async (req, res, next) => {
  const{min, max, ...others} = req.query
  try {
    const all_monuments = await Monuments.find({...others, adult_price:{$gt: min || 1, $lt: max || 5000},});
    res.status(200).json(all_monuments)
  } catch (err) {
    next(err);
  }

};
export const countByCity = async (req, res, next) => {
  
  const cities = req.query.cities.split(",")
  try {
    const list = await Promise.all(cities.map(city=>{
      return Monuments.countDocuments({city:city})
    }))
    // const all_monuments = await Monuments.find();
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
