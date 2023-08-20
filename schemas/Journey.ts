import mongoose from "mongoose";

const journeySchema = new mongoose.Schema({
  Departure: {
    type: Date,
  },
  Return: {
    type: Date,
  },
  "Departure station id": {
    type: Number,
  },
  "Departure station name": {
    type: String,
  },
  "Return station id": {
    type: Number,
  },
  "Return station name": {
    type: String,
  },
  "Covered distance (m)": {
    type: Number,
  },
});

const Journey = mongoose.model("Journey", journeySchema);

export default Journey;
