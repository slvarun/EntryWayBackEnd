import Bookings from "../models/bookingorder.js"

export const create_booking = async (req, res, next) => {
    const newBooking = new Bookings(req.body);
    try {
      const savedBooking = await newBooking.save();
      res.status(200).json(savedBooking);
    } catch (err) {
      next(err);
    }
  };
  export const getbooking = async (req, res, next) => {
    const GetBooking = await Bookings.findById(req.params.id);
    try {
      const savedBooking = await GetBooking.save();
      res.status(200).json(savedBooking);
    } catch (err) {
      next(err);
    }
  };
