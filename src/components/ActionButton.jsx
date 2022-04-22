import React from "react";
import Fab from "@mui/material/Fab";

function ActionButton() {
  const handleOnClick = (event) => {
    console.log(event);
  };
  return (
    <Fab
      variant="extended"
      color="primary"
      onClick={(event) => handleOnClick(event)}
    >
      Submit
    </Fab>
  );
}

export default ActionButton;
