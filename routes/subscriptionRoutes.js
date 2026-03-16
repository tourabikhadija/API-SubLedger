import express from "express";


import { postSubscription, getSubscription, getSubscriptionById, updateSubscription,deleteSubscription} from "../controllers/subscriptionController.js";

const router = express.Router();

router.post("/", postSubscription);
router.get("/", getSubscription);
router.get("/:id", getSubscriptionById);
router.put("/:id", updateSubscription);
router.delete("/:id", deleteSubscription);

export default router;