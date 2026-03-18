import express from "express";
import { Signup, connexion} from "../controllers/userController.js";
import { validateUser } from "../validationEntrees/Uservalidation.js";
import { validateUserSignup } from "../validationEntrees/UserSignupValidation.js";

const router = express.Router();

router.post("/Signup", validateUserSignup , Signup);
router.post("/connexion", validateUser, connexion);


export default router;