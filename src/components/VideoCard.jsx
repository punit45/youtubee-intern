import React from 'react'; // Importing React library
import { Link } from "react-router-dom"; // Importing Link for navigation
import { Typography, Card, CardContent, CardMedia } from "@mui/material"; // Importing Material-UI components
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Importing an icon for verified channels

// Importing demo data from constants for fallback values
import { 
  demoThumbnailUrl, 
  demoVideoUrl, 
  demoVideoTitle, 
  demoChannelUrl, 
  demoChannelTitle 
} from "../utils/constants";

// VideoCard component to display individual video information
const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card 
    sx={{ 
      width: { xs: '100%', sm: '358px', md: "320px" }, // Responsive width based on screen size
      boxShadow: "none", // No shadow for the card
      borderRadius: 0 // No rounding of card edges
    }}
  >
    {/* Link to the video detail page, using videoId if available */}
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia 
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} // Use thumbnail or demo image
        alt={snippet?.title} // Alternative text for accessibility
        sx={{ 
          width: { xs: '100%', sm: '358px' }, // Responsive width
          height: 180 // Fixed height for the media
        }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}> {/* Card content styling */}
      {/* Link to the video detail page, using videoId if available */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)} {/* Display video title, with a character limit */}
        </Typography>
      </Link>
      {/* Link to the channel page, using channelId if available */}
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle} {/* Display channel title */}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} /> {/* Verified icon */}
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

// Exporting VideoCard component for use in other parts of the application
export default VideoCard;
