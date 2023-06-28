import db from "../db/connection.js";
import Countryinfo from "../models/countries.js";
import countryjson from "./country.json" assert { type: "json" };

const insertData = async () => {
  
  await db.dropDatabase();
  
  await Countryinfo.insertMany(countryjson);
  
  db.close();
};

insertData();