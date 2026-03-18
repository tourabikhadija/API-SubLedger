import Subscription from "../models/subscription.js";

export const checkOwnership = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.id);

    if (!subscription) {
      return res.status(404).json({ message: "Abonnement introuvable" });
    }
    // subscription.userId = objectid (mongoDB) : req.userId = string (token)
    if (subscription.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "Accès refusé" });
    }

    next();
  } catch (err) {
    next(err);
  }
};