import express from "express";
import {countByCity, createmon, deletemon, getallmon, getmon, updatemon } from "../controllers/monuments.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";



const router = express.Router();


router.get("/", getallmon)
router.get("/countByCity", countByCity)

                                    
router.post("/create_mon", createmon)


router.put("/:id",verifyAdmin, updatemon)


router.delete("/:id",verifyAdmin,deletemon)



router.get("/find/:id", getmon)




export default router
