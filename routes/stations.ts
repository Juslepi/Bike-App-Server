import { Router } from "express";
import Station from "../schemas/Station";

const stationRouter = Router();

// Get stations
stationRouter.get("/", async (req, res) => {
  try {
    const perPage = 20;
    const pageQueryParam = req.query.page?.toString();
    const page = pageQueryParam ? Number.parseInt(pageQueryParam) : 1;

    const stations = await Station.find({})
      .skip(page * perPage - 1)
      .limit(perPage);

    res.send(stations);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch stations");
  }
});

export default stationRouter;
