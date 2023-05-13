// React Imports
import React, { useState } from "react";
// Custom
import WhiteInputField from "../../shared/InputFields/WhiteInputField";
import PrimaryButton from "../../shared/Buttons/PrimaryButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleLogin = () => {};

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

      <PrimaryButton
        label="Log in"
        additionalStyles={{ marginTop: "30px" }}
        onClick={handleLogin}
        disabled={!isFormValid}
      />
    </>
  );
};

export default Login;
