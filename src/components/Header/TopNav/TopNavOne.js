import React, { useState } from "react";
import { Container } from "reactstrap";
import Link from "next/link";

import SocialIcons from "../../Other/SocialIcons";
import Select from "../../Control/Select";
import { renderContainer } from "../../../common/utils";

export default function TopNavOne({ container }) {
  const [currency, setCurrency] = useState("INR");
  const [language, setLanguage] = useState("ENG");

  return (
    <div className="top-nav .-style-1">
      <div className={renderContainer(container)}>
        <div className="top-nav__wrapper">
          <SocialIcons className="-white" />
          <p className="top-nav__wrapper__promo">
Launch special: 20% off on select services          </p>
          <div className="top-nav__wrapper__selectors">
            
            <Select
              id="cur"
              options={["INR"]}
              className="-white -borderless"
            />
            <Select
              id="lang"
              options={["Eng", "Telugu"]}
              className="-white -borderless"
            />
            <Link href="#">
              <a className="top-nav__auth">Login/Register</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
