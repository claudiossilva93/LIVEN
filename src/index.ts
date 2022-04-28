require('dotenv').config()
import "reflect-metadata";
import express from "express";
import morgan from "morgan";

import "./database/connect";
import routes from "./routes";

const app =  express();

app.use(express.json());
app.use(morgan("tiny"));

app.use(routes);

app.listen(3000, ()=> console.log("Server started at http://localhost:3000"))
