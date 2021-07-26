import React from "react";
import { useHistory } from "react-router-dom";

import "./index.style.css";
import { FormInput, FormButton, SignInMethods } from "../../components";

function Login() {
  const history = useHistory();

  const onClickLogin = () => {
    history.push("/home");
  };

  return (
    <div id="loginform">
      <h2 id="headerTitle">Login</h2>
      <div>
        <FormInput
          description="Username"
          placeholder="Enter your username"
          type="text"
        />
        <FormInput
          description="Password"
          placeholder="Enter your password"
          type="password"
        />
        <FormButton title="Sign in" onClick={onClickLogin} />
        <SignInMethods label={"Or Sign In with:"} />
      </div>
    </div>
  );
}

export default Login;
