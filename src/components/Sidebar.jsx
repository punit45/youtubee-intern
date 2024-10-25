import React from "react"; // Importing React library
import { Stack } from "@mui/material"; // Importing Stack component from Material-UI for layout

import { categories } from "../utils/constants"; // Importing categories data from constants

// Categories component to display category buttons
const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row" // Horizontal stack of category buttons
    sx={{
      overflowY: "auto", // Allow vertical scrolling if needed
      height: { sx: "auto", md: "95%" }, // Responsive height based on screen size
      flexDirection: { md: "column" }, // Column layout on medium screens and above
    }}
  >
    {categories.map((category) => ( // Mapping over the categories array to create buttons
      <button
        className="category-btn" // Class name for styling
        onClick={() => setSelectedCategory(category.name)} // Set selected category on click
        style={{
          background: category.name === selectedCategory ? "#FC1503" : "transparent", // Highlight selected category
          color: "white", // Text color for the button
        }}
        key={category.name} // Unique key for each button
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon} {/* Displaying the category icon */}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name} {/* Displaying the category name */}
        </span>
      </button>
    ))}
  </Stack>
);

// Exporting Categories component for use in other parts of the application
export default Categories;
