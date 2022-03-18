import React from "react";

import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";

import "./Achievement.css";

export default function Achievement(props) {
  const fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className="achievementSection fade-in" id={props.id || ""}>
      <ScreenHeading
        title={"Achievement"}
        subHeading={"Take a look around all my projects achieved"}
      />
      <div className="btn-wrapper">
        <a href="https://joan-kouloumba.in" target="_blank">
          Explore my projects
        </a>
      </div>
    </div>
  );
}
