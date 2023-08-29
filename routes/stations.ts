import { Router } from "express";
import Station from "../schemas/Station";
import Journey from "../schemas/Journey";

const stationRouter = Router();

// Get stations
stationRouter.get("/", async (req, res) => {
  try {
    const perPage = 20;
    const pageQueryParam = req.query.page?.toString();
    const page = pageQueryParam ? Number.parseInt(pageQueryParam) : 1;

    const stations = await Station.find({})
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.send(stations);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch stations");
  }
});

// Get single station
stationRouter.get("/:id", async (req, res) => {
  try {
    const station = await Station.findById(req.params.id)
    const departures = await Journey.find({ "Departure station id": station?.ID })
    const returns = await Journey.find({ "Return station id": station?.ID })
    const averageDepartureLength = calculateAverageLength(departures, departures.length)
    const averageReturnLength = calculateAverageLength(returns, returns.length)

    const updatedStation = {
      ...station?.toObject(),
      departures: departures.length,
      returns: returns.length,
      ["Average departure length"]: averageDepartureLength,
      ["Average return length"]: averageReturnLength
    }
    
    res.send(updatedStation)
  } catch (error) {
    console.error(error)
    res.status(404).send({ error: "Station not found" })
  }
})

// TODO - add typing to param
function calculateAverageLength(journeys: any[], len: number) {
  const totalLength = journeys.reduce((accumulator, currentValue) => accumulator + currentValue["Covered distance (m)"], 0)
  const average = totalLength / len
  return average
}

export default stationRouter;
