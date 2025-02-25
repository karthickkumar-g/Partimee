import mongoose from "mongoose"
import Denv from"dotenv"
Denv.config();


export const dbConnect = async() =>{
    await mongoose.connect(process.env.MONGO_URL).then(console.log("Db connected"))
}