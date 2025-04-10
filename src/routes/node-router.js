import express from "express";

const noteRouter = express.Router();

noteRouter.get("/notes", getAllUsers);

export default noteRouter;
