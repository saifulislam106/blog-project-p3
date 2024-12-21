import express, { Application, Request, Response } from "express";
import router from "./app/routes";
import cors from 'cors'


const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api' ,router )

const result = async (req: Request, res: Response) => {
  res.send("server is runnig on browser");
};
app.get("/", result);
// app.use(globalErrorHandler)
// app.use(apiNotFound)

export default app;
