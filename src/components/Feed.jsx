import React, { useEffect, useState } from "react"; // Importing React and hooks for state management and effects
import { Box, Stack, Typography } from "@mui/material"; // Importing Material-UI components

import { fetchFromAPI } from "../utils/fetchFromAPI"; // Importing API fetching utility
import { Videos, Sidebar } from "./"; // Importing Videos and Sidebar components

// Feed component for displaying a list of videos based on the selected category
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New"); // State for currently selected category
  const [videos, setVideos] = useState(null); // State for storing fetched videos

  useEffect(() => {
    setVideos(null); // Reset videos state when category changes

    // Fetching videos based on the selected category
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items)) // Updating state with fetched video items
  }, [selectedCategory]); // Effect runs when selectedCategory changes

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}> {/* Stack layout with responsive direction */}
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" }, // Dynamic height based on screen size
          borderRight: "1px solid #3d3d3d", // Right border for visual separation
          px: { sx: 0, md: 2 } // Padding based on screen size
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} /> {/* Sidebar for category selection */}

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }} // Styling for copyright text
        >
          Copyright © 2022 Punit Panda
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}> {/* Main content area */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }} // Title styling
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span> {/* Displaying selected category */}
        </Typography>

        <Videos videos={videos} /> {/* Rendering list of videos */}
      </Box>
    </Stack>
  );
};

// Exporting Feed component for use in other parts of the application
export default Feed;
