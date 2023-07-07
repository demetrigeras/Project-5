import Product from "../models/product.js"
import Countryinfo from "../models/countries.js"
// import { getCountries, getCountry} from "./countries.js";
// import mongoose from "mongoose";
// import { Types } from 'mongoose';


export const getProducts = async (req, res) => {
    try {
      const product = await Product.find();
      res.json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };

  export const getProductCountry = (req, res) => {
    const productId = req.params.id;
  
    Product.findById(productId)
      .populate('country') // Populate the 'country' field and select only the 'name' field
      .exec((err, product) => {
        if (err) {
          res.status(500).json({ error: 'Failed to fetch product' });
        } else {
          res.json(product);
        }
      });
  };
  export const getProductsByCountry = async (req, res) => {
    try {
      const { countryName } = req.params;
      
      // Retrieve the country by name
      const country = await Countryinfo.findOne({ 'name.common': countryName });
      if (!country) {
        return res.status(404).json({ error: 'Country not found' });
      }
  
      // Retrieve the products associated with the country
      const products = await Product.find({ Country: country._id });
      res.json(products);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findOne({ _id: id} );
      res.json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };

  // export const createProduct = async (req, res) => {
  //   try {
  //     const product = new Product(req.body);
  //     await product.save();
  //     console.log(req.body)
  //     res.status(201).json(product); // Send the complete charity object in the response
  //   } catch (error) {
  //     console.log(error.message);
  //     res.status(500).json({ error: error.message });
  //   }
  // };


  export const createProduct = async (req, res) => {
    try {
      const { countryName, ...productData } = req.body;
  
      // Retrieve the country by name
      const countryinfo = await Countryinfo.find({ 'name.common': countryName });
      if (!countryinfo) {
        return res.status(404).json({ error: 'Country not found!' });
      }
  
      // Create a new product and associate it with the country
      const product = new Product({
        ...productData,
        country: countryinfo._id // Associate the product with the country
      });
  
      await product.save();
  
      res.status(201).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };
  

  
  // export const createProduct = async (req, res) => {
  //   try {
  //     const { countryName, ...productData } = req.body;
  
  //     // Create a new product and associate it with the country
  //     const product = new Product({
  //       ...productData,
  //       Country: countryName
  //     });
  
  //     await product.save();
  
  //     res.status(201).json(product);
  //   } catch (error) {
  //     console.log(error.message);
  //     res.status(500).json({ error: error.message });
  //   }
  // };
  
  
  
  
  export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    res.status(200).json(product);
  };
  
  export const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Product.findByIdAndDelete(id);
  
      if (deleted) {
        return res.status(200).send("Product Deleted!");
      }
      throw new Error("Product not found");
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };