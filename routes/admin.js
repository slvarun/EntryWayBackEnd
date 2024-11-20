import express from "express";

import { get_all_mon, find_mon_qrs } from "../controllers/admin.js";


const router = express.Router();


router.get("/Admin/mon", get_all_mon)


router.get("/Admin/:id", find_mon_qrs)

export default router