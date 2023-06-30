import Payment from "../models/payment.js"

export const getPayments = async (req, res) => {
    try {
      const payment = await Payment.find();
      res.json(payment);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getPayment = async (req, res) => {
    try {
      const {id} = req.params;
      const payment = await Payment.findOne(id);//maybe do name of product 
      res.json(payment);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };

  export const createPayment = async (req, res) => {
    try {
      const payment = new Payment(req.body);
      await payment.save();
      console.log(req.body)
      res.status(201).json(payment); // Send the complete charity object in the response
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };
 
  
  export const updatePayment = async (req, res) => {
    const { id } = req.params;
    const payment = await Payment.findByIdAndUpdate(id, req.body);
    res.status(200).json(payment);
  };
  
  export const deletePayment = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Payment.findByIdAndDelete(id);
  
      if (deleted) {
        return res.status(200).send("Payment Deleted!");
      }
      throw new Error("Payment not found");
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };