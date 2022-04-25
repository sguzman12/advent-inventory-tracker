import React from "react";
import Fab from "@mui/material/Fab";
import PropTypes from "prop-types";

function ActionButton(props) {
  const { label, onClick, color } = props;
  const handleOnClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <Fab
      variant="extended"
      color={color}
      onClick={(event) => handleOnClick(event)}
      value={label}
      name={label}
    >
      {label}
    </Fab>
  );
}

ActionButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

ActionButton.defaultProps = {
  label: "",
  color: "",
};

export default ActionButton;
