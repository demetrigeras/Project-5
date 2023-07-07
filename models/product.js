import mongoose from "mongoose";
import { Types } from 'mongoose';

const Schema = mongoose.Schema

let Products = new Schema({
    Name:{type: String, required: true},
    Price:{type: Number, required: true},
    logo:{type: String},
    Details:{type: String},
    Country: { type: Schema.Types.ObjectId, ref: 'Country', required: true }
})

export default mongoose.model("Product", Products);