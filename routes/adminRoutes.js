import express from "express";

import { getusers} from "../controllers/adminController.js";

const router = express.Router();


router.get("/users", getusers);


export default router;