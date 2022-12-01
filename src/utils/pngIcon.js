import React, { Component, useEffect } from "react";
import Logo from "../assets/icons/Logo.png";
import Menubar from "../assets/icons/Menubar.png";
import M_Memoji from "../assets/icons/M_Memoji.png";
import M_React from "../assets/icons/M_React_ic.png";
import M_Node from "../assets/icons/M_Node_ic.png";
import M_Mysql from "../assets/icons/M_Mysql_ic.png";
import Global from "../assets/icons/Global_ic.png";
import Github from "../assets/icons/Github_ic.png";

const iconTypes = {
  logo: Logo,
  menubar: Menubar,
  m_memoji: M_Memoji,
  m_react: M_React,
  m_node: M_Node,
  m_mysql: M_Mysql,
  global: Global,
  github: Github,
};

const IconComponentPng = ({ name, ...props }) => {
  let Img = iconTypes[name];

  return <img src={Img} />;
};

export default IconComponentPng;
