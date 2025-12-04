import express from "express";
import { SingUp , Login } from "../Controller/Auth.js";
import { authenticate } from "../Controller/authentification.js";
const Router = express.Router();

Router.post("/Singup", SingUp);
Router.post("/Login", Login);
Router.get("/protected" , authenticate)

export default Router;
