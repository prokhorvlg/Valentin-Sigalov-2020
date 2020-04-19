import React from 'react';

import {NavButtonIconAbout, NavButtonIconSkills, NavButtonIconExperience, NavButtonIconProjects, NavButtonIconContact} from "../../images/NavButtonIcons/NavButtonIcons.js";

class NavButton extends React.Component {
  render() {
    return (

      <li className={"splash-right-nav-element splash-nav-" + this.props.id}>
        <a className="splash-nav-button" href="#" data-topic={this.props.id}>
          
          <div className="splash-nav-icon">

          {(() => {

            if (this.props.id === "aboutme") {
              return (
                <NavButtonIconAbout />
              )
            }
            else if (this.props.id === "skills") {
              return (
                <NavButtonIconSkills />
              )
            }
            else if (this.props.id === "experience") {
              return (
                <NavButtonIconExperience />
              )
            }
            else if (this.props.id === "projects") {
              return (
                <NavButtonIconProjects />
              )
            }
            else if (this.props.id === "contact") {
              return (
                <NavButtonIconContact />
              )
            }

          })()}


          </div>
          <div className="splash-nav-text">{this.props.topic}</div>
          <div className="splash-nav-arrow">

          <svg
 width="21px" height="28px">
<path fillRule="evenodd"  stroke="rgb(255, 200, 11)" strokeWidth="4px" strokeLinecap="square" strokeLinejoin="miter" fill="none"
 d="M5.000,5.000 L14.000,14.000 L5.000,23.000 "/>
</svg>

          </div>
          <div className="splash-nav-bgcolor"></div>
          <div className="splash-nav-border"></div>
        </a>
      </li>

    );
  }
}

export default NavButton;
