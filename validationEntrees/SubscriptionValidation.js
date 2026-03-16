export const validateSubscription = [
    body("name").notEmpty().withMessage("Nom de l'abonnement requis"),
    body("price").isFloat({ gt: 0 }).withMessage("Prix doit être supérieur à 0"),
    body("billingCycle").isIn(["daily", "weekly", "monthly", "yearly"]).withMessage("Cycle de facturation invalide"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array().map(e => e.msg) });
        }
        next();
    }
];