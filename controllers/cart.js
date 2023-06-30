import Cart from "../models/cart.js"

export const getCarts = async (req, res) => {
    try {
      const cart = await Cart.find();
      res.json(cart);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getCart = async (req, res) => {
    try {
      const {id} = req.params;
      const cart = await Cart.findOne(id);//maybe do name of product 
      res.json(cart);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };

  export const createCart = async (req, res) => {
    try {
      const cart = new Cart(req.body);
      await cart.save();
      console.log(req.body)
      res.status(201).json(Cart); // Send the complete charity object in the response
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };
 
  
  export const updateCart = async (req, res) => {
    const { id } = req.params;
    const cart = await Cart.findByIdAndUpdate(id, req.body);
    res.status(200).json(cart);
  };
  
  export const deleteCart = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Cart.findByIdAndDelete(id);
  
      if (deleted) {
        return res.status(200).send("Cart Deleted!");
      }
      throw new Error("Cart not found");
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };