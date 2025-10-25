import { Request, Response } from "express"
import { User } from "../models/User.model"
export const createUser = async (req:Request, res:Response) => {
    try {
        const {auth0Id} = req.body;
        const existingUser = await User.findOne({auth0Id});
        if(existingUser){
            return res.status(200).send();
        }

        const user = new User(req.body);
        await user.save();
        res.status(201).json(user.toObject());
    } catch (error) {
        console.log('error in creating user:',error);
        res.status(500).json({message:"Internal server error while creating user"});
    }
}

export const getUser = async (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        console.log('error in getting user:',error);
        res.status(500).json({message:"internal server error while getting user:", error});
    }
}