import mongoose from "mongoose";

const Schema = mongoose.Schema

let Cart = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    product: {
    type:Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
    createdAt: {
        type:Date,
        default: Date.now,
    },
    
});

export default mongoose.model('Cart', Cart)