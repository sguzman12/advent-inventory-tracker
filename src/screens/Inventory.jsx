import React from "react";
import Box from "@mui/material/Box";
import logo from "../assets/img/advent_logo.png";
import Dropdown from "../components/Dropdown";
import TextArea from "../components/Textarea";
import ActionButton from "../components/ActionButton";
import locations from "../assets/data/locations.json";
import statuses from "../assets/data/statuses.json";
import InventoryForm from "../components/InventoryForm";
import InventoryTable from "../components/table/InventoryTable";
import "./Inventory.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function Inventory() {
  const handleForm = (value) => {};
  return (
    <>
      <InventoryForm />
      <Box className="table">
        <InventoryTable />
      </Box>
    </>
  );
}

export default Inventory;
