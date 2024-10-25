import React, { useState, useEffect } from "react"; // Importing React and hooks for state and effects
import { useParams } from "react-router-dom"; // Importing useParams to access route parameters
import { Box } from "@mui/material"; // Importing Material-UI Box component

import { Videos, ChannelCard } from "./"; // Importing Videos and ChannelCard components
import { fetchFromAPI } from "../utils/fetchFromAPI"; // Importing API fetching utility

// ChannelDetail component for displaying a specific channel's information and its videos
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(); // State to hold channel details
  const [videos, setVideos] = useState(null); // State to hold videos from the channel

  const { id } = useParams(); // Extracting channel ID from the URL parameters

  useEffect(() => {
    const fetchResults = async () => {
      // Fetching channel details
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]); // Setting channel details state

      // Fetching videos related to the channel
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items); // Setting videos state
    };

    fetchResults(); // Calling the async fetch function
  }, [id]); // Effect runs when channel ID changes

  return (
    <Box minHeight="95vh"> {/* Main container for the channel detail view */}
      <Box>
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)', // Gradient background
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" /> {/* Rendering channel card with details */}
      </Box>
      <Box p={2} display="flex"> {/* Container for videos */}
        <Box sx={{ mr: { sm: '100px' } }} /> {/* Spacer */}
        <Videos videos={videos} /> {/* Rendering videos related to the channel */}
      </Box>
    </Box>
  );
};

// Exporting ChannelDetail component for use in other parts of the application
export default ChannelDetail;
