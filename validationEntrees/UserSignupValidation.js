// validationEntrees/UserSignupValidation.js
import { body, validationResult } from "express-validator";

export const validateUserSignup = [
    body("name").notEmpty().withMessage("Nom requis"),
    body("email").isEmail().withMessage("Email invalide").notEmpty().withMessage("Email requis"),
    body("password").notEmpty().withMessage("Mot de passe requis"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array().map(e => e.msg) });
        }
        next();
    }
];