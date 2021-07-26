/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Facebook = () => <a href="#" id="facebookIcon"></a>;

const Twitter = () => <a href="#" id="twitterIcon"></a>;

const Google = () => <a href="#" id="googleIcon"></a>;

export const SignInMethods = (props) => (
  <div id="alternativeLogin">
    <label>{props.label}</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);
