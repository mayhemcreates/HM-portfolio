import React, { useState } from "react";
import { faHandshake} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import linkedinLogo from '../img/linkedin.svg';
import instaLogo from '../img/insta.svg';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/3f7927f0-7d4a-11ed-b38f-a1ed22f366b1"

export default function Contact () {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

 if (submitted) {
    return (
      <section id="contact" className="o-section cubed">
        <FontAwesomeIcon icon={faHandshake} alt="waving hello" className="c-icon" />
        <h2 className="title">Let's work together</h2>
        <div className="o-section__text">
          <h2>Thanks for the message</h2>
          <p>I'll be in touch soon</p>
        </div>
      </section>
    );
  }


  return (

    <section id="contact" className="o-section cubed">
      <FontAwesomeIcon icon={faHandshake} alt="waving hello" className="c-icon" />
      <h2 className="title">Let's work together</h2>
      <div className="o-section__text">
        <p>You can drop me a line using this form, or connect with me on linkedin</p>
      </div>
      <div className="row-flexbox flex-start">
        <div className="c-contact-form">
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_self"
            className="c-contact-form" >
            <label htmlFor="name" className="c-contact-form__label">
              Name
            </label>
            <input
              type="text"
              placeholder="full name"
              id="name"
              name="name"
              className="c-contact-form__input"
            />
            <label htmlFor="email" className="c-contact-form__label">
              Email
            </label>
            <input
              type="email"
              placeholder="name@domain.com"
              id="email"
              name="email"
              className="c-contact-form__input"
            />
            <label
              htmlFor="message"
              className="c-contact-form__label">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              cols="30"
              name="message"
              className="c-contact-form__input"
              placeholder="let me know how I can help"
            />
            <button
              type="submit"
              className="c-button">
              Submit
            </button>
          </form>
        </div>
        <div className="o-container__icon icon-padding">
          <a href="https://www.linkedin.com/in/mayhemcreates/">
            <img src={linkedinLogo} className="c-icon--small" />
          </a>
          <a href="https://www.instagram.com/mayhemcreates/">
            <img src={instaLogo} className="c-icon--small" />
          </a>
        </div>
      </div>
    </section>
  )
}
