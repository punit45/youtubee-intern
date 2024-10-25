import { useState, useEffect } from "react"; // Importing hooks for state and lifecycle management
import { Typography, Box } from "@mui/material"; // Importing Material-UI components for layout and styling
import { useParams } from "react-router-dom"; // Importing useParams for extracting URL parameters

import { fetchFromAPI } from "../utils/fetchFromAPI"; // Importing API fetch utility
import { Videos } from "./"; // Importing Videos component to display search results

// SearchFeed component for displaying search results based on user query
const SearchFeed = () => {
  const [videos, setVideos] = useState(null); // State to hold the fetched videos
  const { searchTerm } = useParams(); // Extracting search term from URL parameters

  // Effect to fetch videos when the searchTerm changes
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`) // Fetching videos based on the search term
      .then((data) => setVideos(data.items)); // Setting the fetched videos in state
  }, [searchTerm]); // Dependency array includes searchTerm to refetch when it changes

  return (
    <Box p={2} minHeight="95vh"> {/* Main container with padding and minimum height */}
      <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px" }}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex"> {/* Flex container for videos display */}
        <Box sx={{ mr: { sm: '100px' } }} /> {/* Spacer for layout */}
        {<Videos videos={videos} />} {/* Rendering the Videos component with fetched videos */}
      </Box>
    </Box>
  );
};

// Exporting SearchFeed component for use in other parts of the application
export default SearchFeed;
