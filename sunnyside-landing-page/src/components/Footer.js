import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="title-container">
        <h1>sunnyside</h1>
      </div>
      <div className="navbar-footer">
        <nav>
          <a href="#top">About</a>
          <a href="#top">Services</a>
          <a href="#top">Projects</a>
        </nav>
      </div>
      <div className="navbar-social-media">
        <nav>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faPinterest} />
        </nav>
      </div>
    </footer>
  );
}
