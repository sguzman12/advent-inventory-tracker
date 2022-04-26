import React, { useState } from "react";
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

const defaultValues = {
  location: "",
  status: "",
  serial: 0,
};

function Inventory() {
  const [formData, setFormData] = useState(defaultValues);
  const handleForm = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

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
