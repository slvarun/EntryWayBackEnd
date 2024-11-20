import express from "express";
import { updateUser, deleteUser, getUser, getallUser } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
                                    
router.get("/ca", verifyToken, (req, res, next) =>{
    res.send("Hello you are logged in")
})
router.get("/checkUser/:id", verifyUser, (req, res, next)=>{
    res.send("hello user, you are logged in and you can delete your account!")
})
router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
    res.send("hello user, you are logged in and you can delete any account!")
})




router.put("/:id", verifyUser,updateUser)



router.delete("/:id", verifyUser,deleteUser)



router.get("/:id", verifyUser, getUser)



router.get("/", verifyAdmin, getallUser)
export default router
