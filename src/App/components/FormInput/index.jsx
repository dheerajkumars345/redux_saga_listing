import React from "react";

export const FormInput = (props) => (
  <div className="row">
    <label></label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);
