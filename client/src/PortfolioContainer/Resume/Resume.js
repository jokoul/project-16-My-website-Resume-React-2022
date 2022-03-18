import React, { useState } from "react";

import Animations from "../../utils/Animations";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
  //console.log(props);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* Reusable component */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Relevant Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "React JS", ratingPercentage: 50 },
    { skill: "Vue JS", ratingPercentage: 50 },
    { skill: "Express JS", ratingPercentage: 70 },
    { skill: "Node JS", ratingPercentage: 70 },
    { skill: "MySQL", ratingPercentage: 70 },
    { skill: "PostgreSQL", ratingPercentage: 40 },
    { skill: "Mongo DB", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Bootstrap", ratingPercentage: 60 },
    { skill: "Wordpress", ratingPercentage: 40 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "02-2022", toDate: "02-2022" },
      description:
        "A personal Portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies used : React, Bootstrap",
    },
    {
      title: "Ecommerce Website",
      duration: { fromDate: "10-2021", toDate: "10-2021" },
      description:
        "An Ecommerce website designed to sell vintage cameras device online.",
      subHeading: "Technologies used : Javascript Vanilla, Bootstrap",
    },
    {
      title: "Social Network Application",
      duration: { fromDate: "11-2021", toDate: "01-2022" },
      description:
        "A private Social Network application for a company. It allow the co-worker getting know each other better and share extra professionnal media content",
      subHeading:
        "Technologies used : Vue, Bootstrap, Node JS, Express JS, MySQL",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"OpenClassrooms School, Lyon, France"}
        subHeading={"Web Developer - Professional qualification"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"University Joseph Fourier, Grenoble, France"}
        subHeading={"Bachelor's degree - Industrial production"}
        fromDate={"2011"}
        toDate={"2014"}
      />
      <ResumeHeading
        heading={"High School, Le Puy en Velay, France"}
        subHeading={"High School Diploma in science - Mathematics specialty"}
        fromDate={"2008"}
        toDate={"2009"}
      />
    </div>,

    /*Work experience */
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Ensinger"}
        subHeading={"Product quality technician"}
        fromDate={"2020"}
        toDate={"2021"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Ensinger produces machined parts for aeronautics, automotive and
          medical sector.
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Program the automated control of machined parts on three-dimensional
          measuring machine with CALYPSO software. Result : insure the
          compliance of machined parts with the definition drawing.
        </span>
        <br />
        <span className="resume-description-text">
          -Assist the quality manager in the quality management system. Result :
          better oversight of quality management organization
        </span>
        <br />
        <span className="resume-description-text">
          - Write control report following quality policies and procedures
          related. Result : traceability of the control and certification.
        </span>
      </div>
    </div>,

    /*Programming skills */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              className="active-percentage-bar"
              style={{ width: skill.ratingPercentage + "%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /*Projects */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sport"
        description="Apart from being a tech enthusiast and a code writer, i also like to play basket-ball, running and swimming"
      />
      <ResumeHeading
        heading="Travel"
        description="I like to travel abroad to discover new culture, new landscape other lifestyle and getting know new people."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    console.log(newCarousalOffset);
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        className="resume-details-carousal"
        style={carousalOffSetStyle.style}
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
