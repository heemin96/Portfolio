import React, { Component, useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import Menubar from "../assets/images/Menubar.png";
import M_Memoji from "../assets/images/M_Memoji.png";
import M_React from "../assets/images/M_React_ic.png";
import M_Node from "../assets/images/M_Node_ic.png";
import M_Mysql from "../assets/images/M_Mysql_ic.png";
import Global from "../assets/images/Global_ic.png";
import Github from "../assets/images/Github_ic.png";
import OrangeRightArrow from "../assets/images/Github_ic.png";
import AboutMe_Memoji from "../assets/images/AboutMe_Memoji.png";
import React_ic from "../assets/images/React_ic.png";
import Node_ic from "../assets/images/Node_ic.png";
import Mysql_ic from "../assets/images/Mysql_ic.png";

import IdeaImage from "../assets/images/IdeaImage.png";
import TwitterIcon from "../assets/images/Twitter_ic.png";
import InIcon from "../assets/images/In_ic.png";

const iconTypes = {
  logo: Logo,
  menubar: Menubar,

  orangeRightArrow: OrangeRightArrow,
  aboutMe_Memoji: AboutMe_Memoji,
  m_memoji: M_Memoji,
  react: React_ic,
  node: Node_ic,
  mysql: Mysql_ic,

  m_react: M_React,
  m_node: M_Node,
  m_mysql: M_Mysql,
  global: Global,
  github: Github,

  ideaImage: IdeaImage,
  twitterIcon: TwitterIcon,
  inIcon: InIcon,
};

const IconComponentPng = ({ name, ...props }) => {
  let Img = iconTypes[name];

  return <img src={Img} {...props} />;
};

export default IconComponentPng;
