import React from "react"; // Importing React library
import { Stack, Box } from "@mui/material"; // Importing Stack and Box components from Material-UI

// Importing custom components for displaying video and channel cards, and a loader
import { ChannelCard, Loader, VideoCard } from "./";

// Videos component takes in videos array and a direction prop
const Videos = ({ videos, direction }) => {
  // If there are no videos, return the Loader component
  if (!videos?.length) return <Loader />;

  return (
    // Stack layout for the video and channel cards
    <Stack 
      direction={direction || "row"} // Set direction based on prop, default to "row"
      flexWrap="wrap" // Allow items to wrap onto multiple lines
      justifyContent="start" // Align items to the start
      alignItems="start" // Align items to the start vertically
      gap={2} // Space between items
    >
      {/* Mapping through the videos array to create card components */}
      {videos.map((item, idx) => (
        <Box key={idx}> {/* Key for React's reconciliation */}
          {item.id.videoId && <VideoCard video={item} />} {/* Render VideoCard if videoId exists */}
          {item.id.channelId && <ChannelCard channelDetail={item} />} {/* Render ChannelCard if channelId exists */}
        </Box>
      ))}
    </Stack>
  );
}

// Exporting the Videos component for use in other parts of the application
export default Videos;
