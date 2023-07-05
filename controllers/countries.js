import Countryinfo from "../models/countries.js";
import mongoose from "mongoose";

export const getCountries = async (req, res) => {
  try {
    const countryinfo = await Countryinfo.find();
    res.json(countryinfo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// export const getCountry = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ error: 'Invalid country ID' });
//     }

//     const countryinfo = await Countryinfo.findById({name: name});
//     if (!countryinfo) {
//       return res.status(404).json({ error: 'Country not found' });
//     }
    
//     res.json(countryinfo);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };



export const getCountry = async (req, res) => {
  try {
    const { name } = req.params;

    const countryinfo = await Countryinfo.findOne({ 'name.common': name });
    if (!countryinfo) {
      return res.status(404).json({ error: 'Country not found' });
    }
    
    res.json(countryinfo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
