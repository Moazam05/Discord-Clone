// React Imports
import React, { useState, useEffect } from "react";
// Custom
import WhiteInputField from "../../shared/InputFields/WhiteInputField";
import PrimaryButton from "../../shared/Buttons/PrimaryButton";
import { Tooltip } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateLoginForm = ({ email, password }) => {
    const isMailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length > 6 && password.length < 12;
  };

  useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password, setIsFormValid]);

  const handleLogin = () => {
    console.log(email, password);
  };

  return (
    <>
      <WhiteInputField
        value={email}
        setValue={setEmail}
        label="Email"
        placeholder="Enter Email Address"
        type="email"
      />

      <WhiteInputField
        value={password}
        setValue={setPassword}
        label="Password"
        placeholder="Enter Password"
        type="password"
      />
      <Tooltip title={!isFormValid ? "Please fill all fields" : ""}>
        <div>
          <PrimaryButton
            label="Log in"
            additionalStyles={{ marginTop: "30px" }}
            onClick={handleLogin}
            disabled={!isFormValid}
          />
        </div>
      </Tooltip>
    </>
  );
};

export default Login;
