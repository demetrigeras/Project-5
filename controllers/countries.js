import Countryinfo from "../models/countries.js";

export const getCountries = async (req, res) => {
  try {
    const countryinfo = await Countryinfo.find();
    res.json(countryinfo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getCountry = async (req, res) => {
  try {
    const { id } = req.params;

    const countryinfo = await Countryinfo.findOne(id);
    res.json(countryinfo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};



