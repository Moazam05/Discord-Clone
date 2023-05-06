import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#24C6DC",
  // eslint-disable-next-line no-dupe-keys
  background: "-webkit-linear-gradient(to right, #514A9D, #24C6DC)",
  // eslint-disable-next-line no-dupe-keys
  background: "linear-gradient(to right, #514A9D, #24C6DC)",
});

const LoginWrapper = (props) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          height: 400,
          bgcolor: "rgba(54, 57, 63, 0.45)",
          borderRadius: "4px",
          boxShadow: "0px 2px 10px 0 rgb(0 0 0 / 20%)",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  );
};

export default LoginWrapper;
