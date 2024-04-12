import express, { Request, Response } from "express";
import cors from "cors";

import routeUser from "./routes/routeUser";

import routTag from "./routes/routeTag";

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(routeUser);
app.use(routTag);
app.listen(port, () => {
  console.log("my server run");
});
