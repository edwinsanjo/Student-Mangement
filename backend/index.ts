import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";

import "dotenv/config";

const app: Express = express();
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
};
mongoose.connect(mongoUri, options, (err: any) => {
  if (err) return console.log(`[ SERVER ] : Some Error Occured: ${err}`);
  console.log("[ SERVER ] : Conected to Database");
});

import AuthRoutes from "./routes/auth.routes";

app.use("/api/", AuthRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hi world");
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
