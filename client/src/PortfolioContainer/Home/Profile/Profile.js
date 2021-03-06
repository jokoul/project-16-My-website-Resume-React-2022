import React from "react";
import Typical from "react-typical";

import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Profile.css";
import ScrollService from "../../../utils/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/joan-kouloumba-570a7680/">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com/joanKouloumba">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/channel/UCNAnFZ-GPEkayXRv6K6xD6Q">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Joan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Motivated Dev 🔥",
                    1500,
                    "Organized and Rigorous 📊 ",
                    1500,
                    "Hard worker 📚",
                    1500,
                    "Full Stack Dev 💻",
                    1500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me{" "}
            </button>
            <a href="CV_Kouloumba_Joan.pdf" download="CV_Kouloumba_Joan.pdf">
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
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
