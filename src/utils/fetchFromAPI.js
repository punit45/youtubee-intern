import axios from 'axios'; // Importing axios for making HTTP requests

// Base URL for the YouTube API through RapidAPI
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// Options for the API request, including query parameters and headers
const options = {
  params: {
    maxResults: 50, // Maximum number of results to fetch from the API
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // API key from environment variables
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com', // Host for the API
  },
};

// Function to fetch data from the API
export const fetchFromAPI = async (url) => {
  // Making a GET request to the specified URL with the predefined options
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data; // Returning the data received from the API
};
