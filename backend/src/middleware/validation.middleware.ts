import { body, validationResult } from "express-validator";
import {Request, Response, NextFunction } from "express";

const handleValidationErrors = async (req: Request, res: Response, next: NextFunction)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(401).json({error: error.array() });
    }
    next();
}

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a string"),
    body("addressLine1").isString().notEmpty().withMessage("AddressLine1 must be a string"),
    body("city").isString().notEmpty().withMessage("City must be a string"),
    body("country").isString().notEmpty().withMessage("country must be a string"),
    handleValidationErrors,
]