import React from 'react';
import { faCode} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <section id="about" className="o-section sunburst">
      <FontAwesomeIcon icon={faCode} alt="code brackets" className="c-icon" />
      <h2 className="title">Front End Development</h2>
      <div className="o-container__text">
        <p>Hi, I'm Harrie.</p>
        <p>I am a junior front end developer and graphic designer specialising in accessibility,
          reliability and creativity.</p>
        <p>Take a look at what I have to offer,
          and get in touch if I can help with your next web app project.</p>
        <a href="#contact" className="c-button">
          Get in touch
        </a>
      </div>
    </section>

  )

}
