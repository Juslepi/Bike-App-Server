import mongoose from "mongoose";

const stationSchema = new mongoose.Schema({
    ID: { type: Number, required: true},
    Name: { type: String, required: true},
    Address: { type: String, required: true},
    Capacity: { type: Number, required: false},
    X: {  type: Number, required: false},
    Y: {  type: Number, required: false},
})

const Station = mongoose.model("Station", stationSchema)

export default Station