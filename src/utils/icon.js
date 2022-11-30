import React, { Component } from "react";
// import Logo from "../assets/icons/Logo.png";
// import Menubar from "../assets/icons/Menubar.png";

import { ReactComponent as Memoji } from "../assets/icons/Memoji_ic.svg";
import { ReactComponent as Rafo } from "../assets/icons/Rafo_logo.svg";

const iconTypes = {
  // logo:Logo,
  // menubar:Menubar,
  memoji: Memoji,
  rafo: Rafo,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
