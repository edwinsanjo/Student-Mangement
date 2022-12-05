import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";

const app: Express = express();
const port = process.env.PORT || 8080;
const mongoUri =
  process.env.MONGO_URI || "mongodb://0.0.0.0:27017/student-management-app";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
};
mongoose
  .connect(mongoUri, options)
  .catch((err) => console.log(`[ SERVER ] : Some Error Occured: ${err}`))
  .then(() => console.log("[ SERVER ] : Conected to Database"));

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
