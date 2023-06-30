import Shipping from "../models/shipping.js"

export const getShippings = async (req, res) => {
    try {
      const shipping = await Shipping.find();
      res.json(shipping);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getShipping = async (req, res) => {
    try {
      const {id} = req.params;
      const shipping = await Shipping.findOne(id);//maybe do name of product 
      res.json(shipping);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };

  export const createShipping = async (req, res) => {
    try {
      const shipping = new Shipping(req.body);
      await shipping.save();
      console.log(req.body)
      res.status(201).json(shipping); // Send the complete charity object in the response
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };
 
  
  export const updateShipping= async (req, res) => {
    const { id } = req.params;
    const shipping = await Shipping.findByIdAndUpdate(id, req.body);
    res.status(200).json(shipping);
  };
  
  export const deleteShipping = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Shipping.findByIdAndDelete(id);
      if (deleted) {
        return res.status(200).send("Shipping Deleted!");
      }
      throw new Error("Shipping not found");
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };