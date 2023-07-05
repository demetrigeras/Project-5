import mongoose from "mongoose";

const Schema = mongoose.Schema

let Countryinfo = new Schema({
    name: {
        common: { type: String, required: true },
      },
      flag: { type: String, required: true },
      region: { type: String, required: true },
      flags: {
          png: { type: String, required: true },
      }
    });
export default mongoose.model("Countryinfo", Countryinfo);