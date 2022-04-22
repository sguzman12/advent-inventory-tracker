import React from "react";
import Box from "@mui/material/Box";
import Inventory from "./screens/Inventory";
import "./css/DefaultStyle.css";

function App() {
  return (
    <Box className="header">
      <Box className="inputForm">
        <Inventory />
      </Box>
    </Box>
  );
}

export default App;
