import { Router } from "express";
import { connectUser, createUser } from "../controllers/userController";

const route = Router();

route.post("/api/v01/register", createUser);
route.post("/api/v01/log", connectUser);

export default route;
