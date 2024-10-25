import React from 'react'; // Importing React
import { Box, CircularProgress, Stack } from '@mui/material'; // Importing Material-UI components

// Loader component to indicate loading state
const Loader = () => (
  <Box minHeight="95vh"> {/* Main container with a minimum height for centering */}
    <Stack
      direction='row' 
      justifyContent='center' 
      alignItems='center' 
      height='80vh' 
    >
      <CircularProgress /> {/* Circular progress indicator to show loading state */}
    </Stack>
  </Box>
);

// Exporting Loader component for use in other parts of the application
export default Loader;
