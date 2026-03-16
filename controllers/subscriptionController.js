import Subscription from "../models/subscription.js";


export const postSubscription = async (req, res, next) => {
try{

 const subscription = await Subscription.create({
    name: req.body.name,
    price: req.body.price, 
    billingCycle: req.body.billingCycle,
    userId:req.userId
});

    res.status(201).json({
        status: "success",
        data: subscription
    });
   
  }catch (err){
    next(err);
  }
};

export const getSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.find({ userId: req.userId });
    res.json({ status: "success", data: subscription });
  } catch (err) {
    next(err);
  }
};

export const getSubscriptionById = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.id);
    res.json({ status: "success", data: subscription });
  } catch (err) {
    next(err);
  }
};

export const updateSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findByIdAndUpdate(req.params.id, req.body,  { new: true });
    res.json({ status: "success", data: subscription });
  } catch (err) {
    next(err);
  }
};

export const deleteSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findByIdAndDelete(req.params.id);
    res.json({ status: "success",
       message: "subscription delelted "});
  } catch (err) {
    next(err);
  }
};