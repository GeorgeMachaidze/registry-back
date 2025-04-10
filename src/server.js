import express from "express";
import noteRouter from "./routes/node-router.js";

const app = express();

app.use("/api", noteRouter);

app.listen(4444);
