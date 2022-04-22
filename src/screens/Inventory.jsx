import React from "react";
import Box from "@mui/material/Box";
import logo from "../assets/img/advent_logo.png";
import Dropdown from "../components/Dropdown";
import locations from "../assets/data/locations.json";
import "./Inventory.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function Inventory() {
  const options = ["Hola", "Mundo"];
  return (
    <Box className="form">
      {/* <img src={logo} alt="logo" /> */}
      <Box className="input">
        <Dropdown label="Equipment Location" data={locations.data} />
      </Box>
      <Box className="input">
        <Dropdown label="Equipment Status" data={options} />
      </Box>
    </Box>
  );
}

export default Inventory;
