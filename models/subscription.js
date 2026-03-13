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
   },
  

  userId:{   //reference vers l'utilisateur
  
  } 
});


// إنشاء model
const subscription = mongoose.model("User", subscriptionSchema);

export default subscription;

