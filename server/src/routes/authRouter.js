import express from "express";
import { RegisterUser, LoginUser, LogoutUser,updateUser } from "../controllers/authcontroller.js";

// import { sample } from "../middlewares/authmiddleware.js";
// import { sample1 } from "../middlewares/authmiddleware.js";
// import { sample2 } from "../middlewares/authmiddleware.js";

const router = express.Router();


router.post("/Register",  RegisterUser);
router.post("/Login", LoginUser);
router.get("/Logout", LogoutUser);
router.put("/update", updateUser);


export default router;


