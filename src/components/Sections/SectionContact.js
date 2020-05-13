import React, { Component } from 'react';

import ContactHello from "../../images/ContactHello.png";

import ContactForm from '../../components/ContactForm.js';

class SectionContact extends Component {

  render() {
    return (
      <div className="section-all-content">
        <div className="section-content">

          <div className="section-segment segment-get-in-touch">
            <div className="segment-inner">
              
              <div className="segment-inner-image-container">
                  <div className="segment-inner-floaty segment-inner-floaty-1"></div>
                  <div className="segment-inner-floaty segment-inner-floaty-2"></div>
                  <div className="segment-inner-floaty segment-inner-floaty-3"></div>
                  <img className="segment-inner-image" src={ContactHello} alt="Hello" />
              </div>
              <div className="segment-inner-content-container">
                <h3>Want to <span>get in touch</span>?</h3>
                <p>Whether you are looking to hire me, or just want to ask me a question,  feel free to contact me. I can be reached through either <a href="https://www.linkedin.com/in/valentin-sigalov-71a693120/" target="_blank"><i class="fab fa-linkedin"></i>LinkedIn</a>, or by submitting the contact form below.</p>
                <p>I’m excited to hear from you!</p>
              </div>
            </div>
          </div>

          <ContactForm />

        </div>
      </div>
    );
  }

}

export default SectionContact;