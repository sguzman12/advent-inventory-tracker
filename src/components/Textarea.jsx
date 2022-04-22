import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function TextArea(props) {
  const { label } = props;

  return (
    <>
      <Typography variant="subtitle1">{label}</Typography>
      <TextField id={label} variant="filled" />
    </>
  );
}

TextArea.propTypes = {
  label: PropTypes.string,
};

TextArea.defaultProps = {
  label: "",
};

export default TextArea;
