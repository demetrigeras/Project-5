import fetch from "node-fetch"
import fs from "fs";


async function fetchAllCountriesData() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      console.log('All countries data:', data);
  
      fs.writeFile('country.json', JSON.stringify(data), (err) => {
        if (err) {
          throw new Error('Something went wrong writing the file.');
        }
        console.log('Data written to country.json file.');
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchAllCountriesData();

  
  
  
  
  
  
  