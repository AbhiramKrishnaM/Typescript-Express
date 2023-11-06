import express, { Application } from "express";
import Server from "./src";

const app: Application = express();

const server = new Server(app);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app
  .listen(PORT, "localhost", () => {
    console.log("Server is running at port " + PORT);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: Address already in use.");
    } else {
      console.log(err);
    }
  });
