import React, { Component } from 'react';
import SectionAboutMe from '../../components/Sections/SectionAboutMe.js';
import SectionSkills from '../../components/Sections/SectionSkills.js';
import SectionExperience from '../../components/Sections/SectionExperience.js';
import SectionProjects from '../../components/Sections/SectionProjects.js';
import SectionContact from '../../components/Sections/SectionContact.js';
import $ from "jquery";
import { Waypoint } from 'react-waypoint';

import {NavButtonIconAbout, NavButtonIconSkills, NavButtonIconExperience, NavButtonIconProjects, NavButtonIconContact} from "../../images/NavButtonIcons/NavButtonIcons.js";

// Section container
// This is the template for an individual section within.
class Section extends Component {

  constructor(props) {
    super(props);

    this.content = {
      aboutme: {
        description: '',//'Welcome to my personal site! It\'s kind of an online resume, but with extra pretty colors, and a bit about myself.',
        links: [
        ],
        codetexts: [
          "VIDEO-GAME",
          "WEB-DESIGN",
          "BILINGUAL",
          "TECH.ENTHUSIAST",
          "DRAWING",
          "SCIFI",
          "CYBERPUNK",
          "WORLDBUILDING",
          "PHILLY",
        ]
      },
      skills: {
        description: '',//'Here’s what I know! These are technologies I am familiar with, categorized by their general application.',
        links: [
          {
            text: "Web Technologies",
            id: "skills-web"
          },
          {
            text: "General Programming",
            id: "skills-general"
          },
          {
            text: "Creative Tools",
            id: "skills-creative"
          },
        ],
        codetexts: [
          "HTML5",
          "React",
          "CSS.LESS.SCSS",
          "Javascript",
          "Sublime-TEXT",
          "python",
          "java",
          "C#",
          "Visual Studio",
          "Unity",
          "jquery",
        ]
      },
      experience: {
        description: '',//'Here are the jobs I\'ve held (they\'re all web-development related), and my education.',
        links: [
          {
            text: "Professional",
            id: "experience-professional"
          },
          {
            text: "Education",
            id: "experience-education"
          },
        ],
        codetexts: [
          "PROGRAMMER",
          "DESIGNER",
          "STUDENT",
          "ENGINEER",
          "ARCHITECT",
        ]
      },
      projects: {
        description: '',//'Most of my free-time is spent on development and creative work. Most of these are personal, and some are professional!',
        links: [],
        codetexts: [
          "DEV",
          "ART",
        ]
      },
      contact: {
        description: 'Contact form and social links can be found here!',
        links: [
        ],
        codetexts: [
          "LINKEDIN",
          "INTERSTELLAR-RADIO",
          "EMAIL",
        ]
      },
    };

    this.contentTypes = {
      aboutme: <SectionAboutMe />,
      skills: <SectionSkills links={this.content.skills.links} />,
      experience: <SectionExperience />,
      projects: <SectionProjects />,
      contact: <SectionContact />
    };

    this.textAnim = null;
    
  }

  renderContent() {
    // Based on id, display a different set of content.
    return this.contentTypes[this.props.id];
  }

  componentDidMount() {
    // Run text animation.

    var thisSection = $('.section.section-' + this.props.id);
    var headerTextAnimLabel = thisSection.find('.section-codetext-text p');

    var section = this;

    clearTimeout(section.textAnim);
    section.textAnim = setTimeout(function() {
      animateSectionHeaderText(headerTextAnimLabel, section.content[section.props.id].codetexts, section.textAnim);
    }, 300);
  }

  render() {
    return (
      <Waypoint

        handleWaypointEnter={this.props.handleWaypointEnter}
        handleWaypointLeave={this.props.handleWaypointLeave}
        onEnter={function(props) {
          this.props.handleWaypointEnter(this.props.id, props.previousPosition, props.currentPosition);
        }}
        onLeave={function(props) {
          this.props.handleWaypointLeave(this.props.id, props.previousPosition, props.currentPosition);
        }}
        id={this.props.id}
        topOffset="40%" bottomOffset="10%">
          <div className={"section section-" + this.props.id} id={this.props.id}>

            <div className="section-header">
              <div className={"section-line section-topline section-" + this.props.id}></div>
              <div className={"section-line section-bottomline section-" + this.props.id}></div>
              <div className={"section-line section-rightline section-" + this.props.id}></div>
              <div className={"section-line section-leftline section-" + this.props.id}></div>

              <div className="section-bgboxes">
                <div className="section-bgbox big bgbox-1"></div>
                <div className="section-bgbox big bgbox-2"></div>
                <div className="section-bgbox small bgbox-3"></div>
                <div className="section-bgbox small bgbox-4"></div>
                <div className="section-bgbox small bgbox-5"></div>
              </div>

              <div className="section-codetext">
                
                <div className="section-codetext-text">
                  <p>001GRAPHIC_DESIGN</p>
                </div>
                <div className="section-codetext-rect"></div>
              </div>

              <div className="section-inner">
                <div className="section-inner-image">
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
                <div className="section-inner-content">
                  <div className="section-content-title">
                    <h2>{this.props.title}</h2>
                  </div>
                  <div className="section-content-description">
                    <p>{this.content[this.props.id].description}</p>
                  </div>
                  <div className="section-content-links">
                    <ul>
                      {this.content[this.props.id].links.map((item) => {
                        return (
                          <li key={item.id}>
                            <a href="#" data-topic={item.id} onClick={(e) => this.scrollToElement(item.id, e)}>{item.text}</a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            { this.renderContent() }
          </div>
      </Waypoint>
    );
  }

  scrollToElement(targetElement, e) {
    e.preventDefault();
    $(window).scrollTo('#' + targetElement, 200, {offset: function() { return {top:-15}; }});
    $(window).blur();
  }
}

function animateSectionHeaderText(el, arr, timeout) {
  el.html(arr[randomNumber(0, arr.length - 1)] + "... LOADED");

  timeout = setTimeout(function() {
    animateSectionHeaderText(el, arr, timeout);
  }, randomNumber(400,900));
}

// Randomly returns one of the two given elements.
function randomChoose(value1, value2) {
  return Math.random() < 0.5 ? value1 : value2;
}

// Provides a random number within the range.
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Section;