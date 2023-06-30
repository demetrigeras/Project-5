import mongoose from "mongoose";

const Schema = mongoose.Schema

let  User = new Schema({
    Name: {type: String, required: true },
    UserName: {type: String, required: true},
    Email:{type: String, required: true },
    password_digest: { type: String, required: true, select: false },
},
{ timestamps: true }

)

export default mongoose.model("users", User);