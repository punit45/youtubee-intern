import React from 'react'; // Importing React
import { Box, CardContent, CardMedia, Typography } from '@mui/material'; // Importing Material-UI components
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Importing check circle icon
import { Link } from 'react-router-dom'; // Importing Link for navigation
import { demoProfilePicture } from '../utils/constants'; // Importing demo profile picture

// ChannelCard component for displaying channel information
const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none', // No shadow for the box
      borderRadius: '20px', // Rounded corners
      display: 'flex', // Flexbox for alignment
      justifyContent: 'center', // Centering content horizontally
      alignItems: 'center', // Centering content vertically
      width: { xs: '356px', md: '320px' }, // Responsive width
      height: '326px', // Fixed height
      margin: 'auto', // Centering the box
      marginTop, // Accepting marginTop from props
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}> {/* Navigating to the channel page */}
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} // Channel thumbnail or demo image
          alt={channelDetail?.snippet?.title} // Alt text for the image
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }} // Image styling
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{' '} {/* Channel title */}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} /> {/* Verification icon */}
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers {/* Subscriber count */}
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

// Exporting ChannelCard component for use in other parts of the application
export default ChannelCard;
