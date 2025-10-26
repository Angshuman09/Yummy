import mongoose from 'mongoose';

export const db = async ()=>{
    try {
        console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("mongodb connected successfully!");

    } catch (error) {
        console.log(`Error in connecting mongodb: ${error}`);
        process.exit(1);
    }
}
