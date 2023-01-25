import React from 'react';
import { faBrain} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from '../data';

export default function Skills() {

  return (
    <section id="skills" className="o-section">
      <FontAwesomeIcon icon={faBrain} alt="waving hello" className="c-icon" />
      <h2 className="title">
        My Skills
      </h2>
      <div className="o-container__text">
        <p> I specialise in front-end development, working with javascript frameworks.</p>
        <div className="o-container--full-width column-flexbox">
            {skills.map((skill) => (
              <div key={skill.title}  className="c-list__box">
                <img src={skill.logo} className="c-icon--small" />
                <h3>{skill.title}</h3>
              </div>
            ))}
            </div>


      </div>
    </section>
  );
}
