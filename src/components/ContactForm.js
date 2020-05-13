import React from "react";

import ContactMeIcon from "../images/contactme-icon.png";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="section-contact-form">

        <div className="form-header">
          <div className="form-header-inner">
            <img src={ContactMeIcon} />
            <h3>Contact Me</h3>
            <div className="form-header-line"></div>
          </div>
        </div>

        <div className="form-body">
          <form className="form-body-inner"
            onSubmit={this.submitForm}
            action="https://formspree.io/mwkrpwyv"
            method="POST">
            <div className="form-content">

              <div className="form-content-row">
                <label>Name <span>*</span></label>
                <input type="text" name="name" id="name" placeholder="Illusive Man" required/>
              </div>

              <div className="form-content-row">
                <label>Email <span>*</span></label>
                <input type="email" name="email" id="email" placeholder="illusive_man@cerberus.net" required/>
              </div>

              <div className="form-content-row">
                <label>Company</label>
                <input type="text" name="company" id="company" placeholder="Cerberus Corporation"/>
              </div>

              <div className="form-content-row">
                <label>Subject</label>
                <input type="text" name="subject" id="subject" placeholder="Big Opportunity" />
              </div>

              <div className="form-content-row">
                <label className="textarea"><span>Message *</span></label>
                <textarea type="text" name="message" id="message" placeholder="You always have a choice, Shepard..." required/>
              </div>

            </div>
            <div className="form-submit">
              {status === "SUCCESS" ? <p className="form-success"><span role="img" aria-label="heart">❤️</span> Thanks for reaching out!</p> : <button><svg 
 width="40px" height="24px"><path fill-rule="evenodd"  fill="rgb(255, 155, 11)" d="M23.000,19.500 L23.000,24.000 L40.000,15.000 L23.000,6.500 L23.000,11.000 C23.000,11.000 -1.246,11.650 4.000,-0.000 C-7.342,19.905 12.697,19.500 23.000,19.500 Z"/></svg>submit</button>}
              {status === "ERROR" && <p className="form-error"><span role="img" aria-label="sad">😔</span>There was an error.</p>}
            </div>
          </form>
        </div>

      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}