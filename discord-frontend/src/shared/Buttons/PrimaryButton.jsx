// React Imports
import React from "react";
// MUI Imports
import { Button } from "@mui/material";

const PrimaryButton = (props) => {
  const { label, additionalStyles, disabled, onClick } = props;

  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#5865f2",
        color: "#fff",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        width: "100%",
        height: "40px",

        "&:hover": {
          bgcolor: "#5865f2",
          color: "#fff",
        },
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
