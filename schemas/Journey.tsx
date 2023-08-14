import mongoose from "mongoose";

const journeySchema = new mongoose.Schema({
  Departure: {
    type: "Date",
  },
  Return: {
    type: "Date",
  },
  "Departure station id": {
    $numberInt: {
      type: "Date",
    },
  },
  "Departure station name": {
    type: "String",
  },
  "Return station id": {
    $numberInt: {
      type: "Date",
    },
  },
  "Return station name": {
    type: "String",
  },
  "Covered distance (m)": {
    $numberDouble: {
      type: "String",
    },
  },
});

export const Journey = mongoose.model("Journey", journeySchema);
