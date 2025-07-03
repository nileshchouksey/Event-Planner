import express from "express";
import { Register, Login, Logout } from "../controllers/authcontroller.js";


import { sample } from "../middlewares/authmiddleware.js";
import { sample1 } from "../middlewares/authmiddleware.js";
import { sample2 } from "../middlewares/authmiddleware.js";
const router = express.Router();


router.post("/register", sample , Register);
router.post("/Login", sample1,Login);
router.post("/Logout", sample2,Logout);

export default router;
