import express from "express";
import { Signup, connexion} from "../controllers/userController.js";

const router = express.Router();

router.post("/Signup", Signup);
router.post("/connexion", connexion);


export default router;