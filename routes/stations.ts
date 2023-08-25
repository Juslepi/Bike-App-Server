import { Router } from "express";
import Station from "../schemas/Station";

const stationRouter = Router();

// Get stations
stationRouter.get("/", async (req, res) => {
  try {
    const stations = await Station.find({});
    res.send(stations);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch stations");
  }
});

export default stationRouter;
