import { Stack } from "@mui/material"; // Importing Stack component for layout
import { Link } from "react-router-dom"; // Importing Link for navigation between routes

import { logo } from "../utils/constants"; // Importing the logo from constants
import { SearchBar } from "./"; // Importing the SearchBar component

// Navbar component for site navigation and branding
const Navbar = () => (
  <Stack
    direction="row" // Horizontal layout for the navbar items
    alignItems="center" // Center-aligning items vertically
    p={2} // Padding for the navbar
    sx={{
      position: "sticky", // Sticky positioning to keep the navbar at the top on scroll
      background: '#000', // Black background for the navbar
      top: 0, // Position at the top of the viewport
      justifyContent: "space-between" // Space between logo and search bar
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}> {/* Link to homepage */}
      <img src={logo} alt="logo" height={45} /> {/* Logo image with specified height */}
    </Link>
    <SearchBar /> {/* Rendering the SearchBar component for user input */}
  </Stack>
);

// Exporting Navbar component for use in other parts of the application
export default Navbar;
