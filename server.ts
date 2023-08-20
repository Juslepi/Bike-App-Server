import express from "express";
import journeyRouter from "./routes/journeys";
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
app.use("/api/journeys", journeyRouter);

app.listen(PORT, () => {
  console.log("Server online on", PORT);
});
