import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.Mongo_URI || "")
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.error("MongoDB connection error:", err));

app.listen(5000, ()=>{
    console.log("server running on port 5000");
})