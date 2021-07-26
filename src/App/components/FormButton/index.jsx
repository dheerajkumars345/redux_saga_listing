import React from "react";

export const FormButton = (props) => (
  <div id="button" className="row">
    <button onClick={() => props.onClick()}>{props.title}</button>
    <div className="new_user">
      New user?
      <a href="#" variant="body2">
        {" Create an account"}
      </a>
    </div>
  </div>
);
