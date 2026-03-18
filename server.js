// imports
import express from "express";
import mongoose from "mongoose";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(express.json());


app.use('/api/subscriptions', subscriptionRoutes);
 app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

// connexion mongo
mongoose
.connect("mongodb://localhost:27017/SubLedger")
.then(()=> {
    console.log("connected to database!");
})
.catch((err) =>{
    console.error("MongoDb connection error:", err);
});

app.listen(8000, () =>{
    console.log("server is started");
});



