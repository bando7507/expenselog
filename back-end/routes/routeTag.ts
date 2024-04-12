import { Router } from "express";

import { allTag, createTag } from "../controllers/tagController";

const route = Router();

route.get("/api/v01/tags", allTag);
route.post("/api/v01/createtag", createTag);

export default route;
