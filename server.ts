import express, { json } from "express";
import journeyRouter from "./routes/journeys";
import stationRouter from "./routes/stations"
import mongoose from "mongoose";
import { MONGO_URI, PORT } from "./config/config";

// Connect to the database
(async function () {
  try {
    await mongoose.connect(MONGO_URI ?? "");
    console.log("DB Connected");
  } catch (error) {
    console.error(error);
  }
})();

const app = express();
app.use(express.json());
app.use("/api/journeys", journeyRouter);
app.use("/api/stations/", stationRouter)

app.listen(PORT, () => {
  console.log("Server online on", PORT);
});
