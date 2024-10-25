import React, { useEffect, useState } from "react"; // Importing React and hooks for component state and lifecycle
import { Link, useParams } from "react-router-dom"; // Importing Link and useParams for routing
import ReactPlayer from "react-player"; // Importing ReactPlayer for video playback
import { Typography, Box, Stack } from "@mui/material"; // Importing Material-UI components for layout and styling
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Importing an icon for verified channels

import { Videos, Loader } from "./"; // Importing custom components
import { fetchFromAPI } from "../utils/fetchFromAPI"; // Importing API fetch utility

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null); // State to hold video details
  const [videos, setVideos] = useState(null); // State to hold related videos
  const { id } = useParams(); // Extracting video ID from URL parameters

  // Fetch video details and related videos when component mounts or ID changes
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0])); // Set video details from API response

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items)); // Set related videos from API response
  }, [id]); // Dependency array includes ID to refetch on ID change

  // Show loader if video details are not yet available
  if (!videoDetail?.snippet) return <Loader />;

  // Destructuring properties from videoDetail
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh"> {/* Main container with a minimum height */}
      <Stack direction={{ xs: "column", md: "row" }}> {/* Stack layout for responsiveness */}
        <Box flex={1}> {/* Flex item for video player */}
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}> {/* Sticky box for video player */}
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls /> {/* Video player */}
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title} {/* Video title */}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}> {/* Link to the channel's page */}
                <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff">
                  {channelTitle} {/* Channel title */}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} /> {/* Verified icon */}
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center"> {/* Stack for view and like counts */}
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views {/* View count */}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes {/* Like count */}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column" /> {/* Display related videos */}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail; // Exporting the VideoDetail component for use in other parts of the application
