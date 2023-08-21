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
// Post journey

export default journeyRouter;
