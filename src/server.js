import express from "express";
import cors from "cors";
import userRouter from "./routes/user-router.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectToDatabase from "./config/mongo.js";

dotenv.config();
connectToDatabase();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRouter);

app.listen(4444);
