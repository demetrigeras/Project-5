import mongoose from "mongoose";

const Schema = mongoose.Schema

let Products = new Schema({
    Name:{type: String, required: true},
    Price:{type: Number, required: true},
    logo:{type: String},
    Details:{type: String}
})

export default mongoose.model("Product", Products);