import { Router } from "express";
import Journey from "../schemas/Journey";

const journeyRouter = Router();

// Get journeys
journeyRouter.get("/", async (req, res) => {
  try {
    const perPage = 20;
    const pageQueryParam = req.query.page?.toString();
    const page = pageQueryParam ? Number.parseInt(pageQueryParam) : 1;

    const journeys = await Journey.find({})
      .skip(page * perPage - 1)
      .limit(perPage);

    res.json(journeys);
  } catch (error) {
    console.error("Error retrieving journeys", error);
    res.status(500).json({ error: "An error occured while fetching journeys" });
  }
});
// Get journey by id
journeyRouter.get("/:id", async (req, res) => {
  try {
    const journey = await Journey.findById(req.params.id);
    res.send(journey);
  } catch (e) {
    res.status(404).json({ error: "Journey not found" });
  }
});
// Post journey
journeyRouter.post("/", async (req, res) => {
  const newJourney = new Journey(req.body);

  try {
    await newJourney.save();
    res.status(201).send(newJourney);
  } catch (error) {
    console.log("Error saving to Database");
    console.error(error);
  }
});

export default journeyRouter;
