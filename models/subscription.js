import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {    //prix subscription
    type: Number,
    required: true,
  },

  billingCycle:{  
    type: String,
    enum: ["monthly","yearly"]
  },

   createdAt :{
    type : Date,
    default : Date.now 
   }
 
});


// إنشاء model
const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;

