import React, { useState } from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import LoginWrapper from "../../components/LoginWrapper/LoginWrapper";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Login = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <LoginWrapper>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#fff",
              },
            }}
          >
            <Tab label="Login" sx={{ width: "50%" }} {...a11yProps(0)} />
            <Tab label="Register" sx={{ width: "50%" }} {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Login Page
        </TabPanel>
        <TabPanel value={value} index={1}>
          Register Page
        </TabPanel>
      </Box>
    </LoginWrapper>
  );
};

export default Login;
