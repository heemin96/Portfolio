import React, { Component } from "react";
import Logo from "../assets/icons/Logo.png";
import Menubar from "../assets/icons/Menubar.png";

const iconTypes = {
  logo: Logo,
  menubar: Menubar,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
