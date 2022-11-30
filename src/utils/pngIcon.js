import React, { Component, useEffect } from "react";
import Logo from "../assets/icons/Logo.png";
import Menubar from "../assets/icons/Menubar.png";
import M_Memoji from "../assets/icons/M_Memoji.png";

const iconTypes = {
  logo: Logo,
  menubar: Menubar,
  m_memoji: M_Memoji,
};

const IconComponentPng = ({ name, ...props }) => {
  let Img = iconTypes[name];

  return <img src={Img} />;
};

export default IconComponentPng;
