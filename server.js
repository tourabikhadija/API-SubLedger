// imports
import express from "express";
import mongoose from "mongoose";
import subscriptionRoutes from "./routes/subscriptionRoutes";

const app = express();
app.use(express.json());


app.use('/api/subscriptions', subscriptionRoutes);
// app.use('/api/auth',authRoutes);

// connexion mongo
mongoose
.connect("mongodb://localhost:27017/SubLedger")
.then(()=> {
    console.log("connected to database!");
})
.catch((err) =>{
    console.error("MongoDb connection error:", err);
});

app.listen(3002, () =>{
    console.log("server is started");
});



