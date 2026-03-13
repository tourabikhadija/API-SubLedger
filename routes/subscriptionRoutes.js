import express from "express";
import Subscription from "../models/subscription.js";


import { postSubscription, getSubscription, updateSubscription,deleteSubscription} from "../controller/subscriptionController";

const router = express.Router();

router.post("/", postSubscription);
router.get("/", getSubscription);
router.put("/id:", updateSubscription);
router.delete("/id:", deleteSubscription);

export default router;