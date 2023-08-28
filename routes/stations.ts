import { Router } from "express";
import Station from "../schemas/Station";

const stationRouter = Router()

// Get all stations
stationRouter.get("/", async(req, res) => {
    try {
        const perPage = 20;
        const pageQueryParam = req.query.page?.toString();
        const page = pageQueryParam ? Number.parseInt(pageQueryParam) : 1;

        const stations = await Station.find({}).skip((page - 1) * perPage).limit(perPage)
        res.send(stations)
    } catch (error) {
        res.status(500).send({error: "Fetching stations failed"})
    }
})
// Get single station

export default stationRouter