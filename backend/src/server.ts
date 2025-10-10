import express from 'express';
import type {Request, Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './lib/db';
dotenv.config({
    path:'./src/.env'
});

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get('/health', (req:Request, res:Response)=>{
    res.json({message: "respond send successfully!"});
})


app.listen(PORT, ()=>{
    db();
    console.log("app is listening..");
})
