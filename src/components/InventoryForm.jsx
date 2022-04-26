import React, { useState } from "react";

import Box from "@mui/material/Box";
import logo from "../assets/img/advent_logo.png";
import Dropdown from "./Dropdown";
import TextArea from "./Textarea";
import ActionButton from "./ActionButton";
import locations from "../assets/data/locations.json";
import statuses from "../assets/data/statuses.json";
import "../screens/Inventory.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function InventoryForm(props) {
  const [serialNumber, setSerialNumber] = useState("");
  const [equipmentLocation, setEquipmentLocation] = useState("");
  const [equipmentStatus, setEquipmentStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    // setItem(e)
    // props.addItem(item);
    // console.log(item);
    // setItem("");
  };

  const handleChange = (e) => {
    // setItem(e.target.value);
    console.log(e);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    console.log("Inside handleCancel");
    console.log(event.target.value);
  };

  const handleDropdown = (e) => {
    console.log(e);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Box className="form">
        <Box className="input">
          <Dropdown
            label="Equipment Location"
            data={locations.data}
            // onChange
            // value={(e) => handleDropdown(e)}
          />
        </Box>
        <Box className="input">
          <Dropdown label="Equipment Status" data={statuses.data} />
        </Box>
        <Box className="input">
          <TextArea label="AHS Serial #s" />
        </Box>
        <Box className="form_buttons">
          <ActionButton
            label="Submit"
            onClick={(event) => handleSubmit(event)}
            color="primary"
          />
          <ActionButton
            label="Cancel"
            onClick={(event) => handleCancel(event)}
            color="secondary"
          />
        </Box>
      </Box>
    </form>
  );
}

export default InventoryForm;
