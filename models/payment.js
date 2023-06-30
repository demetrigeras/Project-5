import mongoose from 'mongoose';

const Schema = mongoose.Schema

let paymentSchema = new Schema({
  cardNumber: {
    type: String,
    required: true,
  },
  cardholderName: {
    type: String,
    required: true,
  },
  expirationMonth: {
    type: Number,
    required: true,
  },
  expirationYear: {
    type: Number,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Payment', paymentSchema);


