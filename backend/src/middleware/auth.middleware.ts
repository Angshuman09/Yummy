import { auth } from "express-oauth2-jwt-bearer";
import dotenv from 'dotenv';
import {Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { User } from "../models/User.model";

dotenv.config({
    path: './src/.env'
});

declare global{
  namespace Express{
    interface Request{
      userId: string,
      authId: string,
    }
  }
}
export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE!,
  issuerBaseURL: process.env.AUTH0_ISSUE_BASE_URL!,
  tokenSigningAlg: 'RS256'
});

export const jwtParse = async (req: Request, res: Response, next: NextFunction)=>{

    const {authorization} = req.headers;
    if(!authorization || !authorization?.startsWith("Bearer ")){
      return res.sendStatus(401);
    }

    const token = authorization.split(" ")[1];

    try {
      const decoded = jwt.decode(token as string) as jwt.JwtPayload;
      const authId = decoded.sub;

      const user = await User.findOne({authId});

      if(!user){
        return res.sendStatus(404);
      }

      req.authId = authId as string; 
      req.userId = user._id.toString();
      next();
    } catch (error) {
      res.sendStatus(401);
    }
}