import React from "react";
import Fab from "@mui/material/Fab";
import PropTypes from "prop-types";

function ActionButton(props) {
  const { label, onClick, color } = props;
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Fab variant="extended" color={color} onClick={handleOnClick}>
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
