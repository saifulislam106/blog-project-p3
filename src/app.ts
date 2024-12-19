import express, { Application, Request, Response } from "express";

const app: Application = express();

//parsers
app.use(express.json());

// application routes

const result = async (req: Request, res: Response) => {
  res.send("server is runnig on browser");
};
app.get("/", result);

export default app;
