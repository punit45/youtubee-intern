import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importing necessary components for routing
import { Box } from '@mui/material'; // Importing Box component from Material-UI for layout styling

// Importing custom components
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

// Main App component
const App = () => (
  <BrowserRouter>
    {/* Main container with a black background */}
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar /> {/* Navigation bar for the application */}
      
      {/* Defining routes for the application */}
      <Routes>
        <Route exact path='/' element={<Feed />} /> {/* Route for the home page showing the feed */}
        <Route path='/video/:id' element={<VideoDetail />} /> {/* Route for displaying video details */}
        <Route path='/channel/:id' element={<ChannelDetail />} /> {/* Route for displaying channel details */}
        <Route path='/search/:searchTerm' element={<SearchFeed />} /> {/* Route for displaying search results */}
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App; // Exporting the App component for use in other parts of the application
