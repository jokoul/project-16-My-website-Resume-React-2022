import React from "react";

import Animations from "../../utils/Animations";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    return Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "As an experienced industrial qualitician, I chose in 2021 to retrain in the web development, a booming sector that has always fascinated me. Following my recent validation of a professional diploma of web developer, I am looking for a company to sign a 24-month professionalization contract with a rhythm of 3 days per week in the company. This will allow me to continue my work-study Java developer training.",
    highlights: {
      bullets: [
        "Creating web application using framework like React.js and Vue.js",
        "Building an API REST connected to a database for a web application using Node.js, Express.js, MySQL, MongoDB, etc.",
        "Building an online shopping website using Javascript",
        "Transforming a sketch model into a website with HTML, CSS, Bootstrap, Sass, etc.",
        "Enhancing an existing website with SEO referencing tools ",
      ],
      heading: "Here are a few Highlights :",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <div className="about-me-description">
              <span>{SCREEN_CONSTANTS.description}</span>
            </div>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me{" "}
              </button>
              <a
                href="CV_Kouloumba_Joan.pdf"
                download="Joan CV_Kouloumba_Joan.pdf"
              >
                <button className="btn highlighted-btn">
                  Get Resume
                  <br />
                  <span>french version</span>
                </button>
              </a>
              <a
                href="Joan_Kouloumba_Resume.pdf"
                download="Joan_Kouloumba_Resume.pdf"
              >
                <button className="btn highlighted-btn">
                  Get Resume
                  <br />
                  <span>english version</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
