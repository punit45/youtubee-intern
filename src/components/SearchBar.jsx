import React, { useState } from 'react'; // Importing React and useState hook
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import { Paper, IconButton } from '@mui/material'; // Importing Material-UI components for styling
import SearchIcon from '@mui/icons-material/Search'; // Importing search icon from Material-UI icons

// SearchBar component for user input to search for videos
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State to hold the current search term
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Function to handle form submission
  const onhandleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // If there's a search term, navigate to the search results page
    if (searchTerm) {
      navigate(`/search/${searchTerm}`); // Navigating to search results

      setSearchTerm(''); // Resetting the search term input field
    }
  };

  return (
    <Paper
      component='form' // Using Paper as a form component
      onSubmit={onhandleSubmit} // Handling form submission
      sx={{
        borderRadius: 20, // Rounded corners for the Paper component
        border: '1px solid #e3e3e3', // Light border for visual separation
        pl: 2, // Padding left
        boxShadow: 'none', // No shadow for the Paper component
        mr: { sm: 5 }, // Right margin for spacing (responsive)
      }}
    >
      <input
        className='search-bar' // Class name for additional styling
        placeholder='Search...' // Placeholder text for the input field
        value={searchTerm} // Controlled input value
        onChange={(e) => setSearchTerm(e.target.value)} // Updating state on input change
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon /> {/* Search icon inside the button */}
      </IconButton>
    </Paper>
  );
};

// Exporting SearchBar component for use in other parts of the application
export default SearchBar;
