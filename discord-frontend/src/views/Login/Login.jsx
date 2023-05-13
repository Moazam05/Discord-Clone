// React Imports
import React, { useState } from "react";
// Custom
import WhiteInputField from "../../shared/WhiteInputField/WhiteInputField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    </>
  );
};

export default Login;
