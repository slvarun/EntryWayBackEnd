import express from "express";

import {create_booking, getbooking} from "../controllers/bookingorder.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";




const router = express.Router();


                                    
router.post("/monuments/book/:id", create_booking)

router.get("/monuments/book/:id/qr", getbooking)





export default router
