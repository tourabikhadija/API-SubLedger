import User from "../models/user.js";
import bcrypt from "bcrypt";



// l’inscription (تسجيل المستخدم)

export const Signup = async (req, res, next) => {
try{

const reqPassword = req.body.password;
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(reqPassword, saltRounds);

 const usernew = await User.create({
    name: req.body.name,
    email: req.body.email, 
    password: hashedPassword,
});

    res.status(201).json({
        status: "success",
        data: {
            id: usernew._id,
            name:usernew.name,
            email:usernew.email,
            role:usernew.role
        }
    });
   
  }catch (err){
    next(err);
  }
};

//  connexion
   export const connexion = async (req, res, next) => {

   try{
   const user = await User.findOne({ email: req.body.email });
    
   if (!user) {
    return res.status(404).json({
    status: "fail",
    message: "User not found"
   });

   }
   const password =  req.body.password;
   const hashedPasswordDB = user.password;

   const samm = await bcrypt.compare(password, hashedPasswordDB);
   if(samm){
    res.status(200).json({ 
     status: "success",
     message:"Login successful"
   });

   }else{
       res.status(401).json({
        status: "fail",
        message: "Incorrect password"
         });
        }

        
     }catch (err){
       next(err);
     }

   };


   

