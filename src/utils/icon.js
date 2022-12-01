import React, { Component } from "react";

import { ReactComponent as Memoji } from "../assets/icons/Memoji_ic.svg";
import { ReactComponent as Rafo } from "../assets/icons/Rafo_logo.svg";
import { ReactComponent as Ecommerce } from "../assets/images/E_commerce.svg";
import { ReactComponent as TrybeCourse } from "../assets/images/TrybeCourse.svg";
import { ReactComponent as TrybeTunes } from "../assets/images/TrybeTunes.svg";

const iconTypes = {
  ecommerce: Ecommerce,
  trybecourse: TrybeCourse,
  trybetunes: TrybeTunes,
  memoji: Memoji,
  rafo: Rafo,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
