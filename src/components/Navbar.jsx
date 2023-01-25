import React from 'react';
import { faBrain, faCode, faBriefcase, faHandshake} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navbar () {
  return (
    <nav id="c-navbar">
      <a href="#about" className="c-nav__item" aria-label="About">
        <FontAwesomeIcon icon={faCode} alt="waving hello" className="c-icon" />
        About
      </a>
      <a href="#skills" className="c-nav__item">
        <FontAwesomeIcon icon={faBrain} alt="waving hello" className="c-icon" />
        Skills
      </a>
      <a href="#work" className="c-nav__item">
        <FontAwesomeIcon icon={faBriefcase} alt="waving hello" className="c-icon" />
        Work
      </a>
      <a href="#contact" className="c-nav__item">
      <FontAwesomeIcon icon={faHandshake} alt="waving hello" className="c-icon" />
      Contact
      </a>
    </nav>
  )
}
