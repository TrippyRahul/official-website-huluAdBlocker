import React from "react";
import "./button.scss"

const Button = ({ text, width, bg }) => {
  return <button className="btn" style={{width:width, background:bg}}>{text}</button>;
};

export default Button;
