// React Imports
import React, { useState, useEffect } from "react";
// MUI Imports
import { Tooltip } from "@mui/material";
// Custom
import WhiteInputField from "../../shared/InputFields/WhiteInputField";
import PrimaryButton from "../../shared/Buttons/PrimaryButton";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const validateRegisterForm = ({ userName, email, password }) => {
    const isUserNameValid = validateUserName(userName);
    const isMailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    return isUserNameValid && isMailValid && isPasswordValid;
  };

  const validateUserName = (userName) => {
    return userName.length > 0;
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length > 5 && password.length < 13;
  };

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ userName, email, password }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName, email, password, setIsFormValid]);

  const handleRegister = () => {
    console.log(userName, email, password);
  };

  return (
    <>
      <WhiteInputField
        value={userName}
        setValue={setUserName}
        label="User Name"
        placeholder="Enter User Name"
        type="text"
      />

      <WhiteInputField
        value={email}
        setValue={setEmail}
        label="email"
        placeholder="Enter Email"
        type="email"
      />

      <WhiteInputField
        value={password}
        setValue={setPassword}
        label="password"
        placeholder="Enter Password"
        type="password"
      />

      <Tooltip title={!isFormValid ? "Please fill all fields" : ""}>
        <div>
          <PrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            onClick={handleRegister}
            disabled={!isFormValid}
          />
        </div>
      </Tooltip>
    </>
  );
};

export default Register;
