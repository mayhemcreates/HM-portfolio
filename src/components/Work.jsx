import React from 'react';
import { useState, useEffect } from 'react';
import { faBriefcase} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills, work } from '../data';
import Tabs from './Tabs';




export default function Work () {



  return (
  <section id="work" className="o-section">
    <FontAwesomeIcon icon={faBriefcase} alt="waving hello" className="c-icon" />
    <h2 className="title">
      My Work
    </h2>
    <div className="o-container__text">
      <p>Click below to take a look through my portfolio</p>
    </div>
      <div className="c-tabs">
        <Tabs work={work}/>
      </div>
  </section>
  )
}
