import express from 'express';
import type {Request, Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './lib/db';
import MyUserRoutes from './routes/user.routes';
import MyRestaurantRoutes from './routes/restaurant.routes'
dotenv.config({
    path:'./src/.env'
});

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/my/user', MyUserRoutes);
app.use('/api/my/restaurant', MyRestaurantRoutes);

app.get('/health', (req:Request, res:Response)=>{
    res.json({message: "respond send successfully!"});
})

app.listen(PORT, ()=>{
    db();
    console.log(`app is listening at the port: ${PORT}`);
})
