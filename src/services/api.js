import axios from "axios";

const BASE_URL = "https://staging.thunderscript.com/api/properties";
// const BASE_URL = "http://localhost:3000/api/properties";

export const fetchAllProperties = async () => {
  try {
    console.log(BASE_URL, 'BASE_URL'); // Check the actual URL
    const res = await fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }); // You can also add headers or method here
    console.log(res, 'Response object');

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const responseData = await res.json();
    return responseData.data;
  } catch (error) {
    console.error("Error fetching properties:", error.message);
    return [];
  }
}

export const searchProperties = async (searchTerm) => {
  try {
    const response = await axios.get(`${BASE_URL}/properties?search=${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
};