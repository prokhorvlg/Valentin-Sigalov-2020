import React from 'react';
import $ from "jquery";

// Full.js serves as the container for the entire app.

// STYLESHEET
import '../../styles/compiler.scss';

// CONTAINERS
import Splash from '../Splash/Splash.js';
import Section from '../Section/Section.js';

// COMPONENTS

// IMAGES

//import logo from './logo.svg';

class Full extends React.Component {
  constructor(props) {
    super(props);

    this.aboutme = "aboutme";
    this.skills = "skills";
    this.experience = "experience";
    this.projects = "projects";
    this.contact = "contact";

    this.sections = ["aboutme", "skills", "experience", "projects", "contact"];

    this.sidebarNav = $('.splash-left-sidebar-nav li');
    this.splashLowerBar = $('.splash-lower-bar');

    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
    this.handleWaypointLeave = this.handleWaypointLeave.bind(this);

    this.bgboxAnims = [];
  }

  componentDidMount() {
    //document.querySelector('body').style.zoom = `${1 / window.devicePixelRatio * 100}%`;

    this.sidebarNav = $('.splash-left-sidebar-nav li');
    this.splashLowerBar = $('.splash-lower-bar');

        // Begin background boxes animation.

    // Clear any existing animations.
    for (var i = 0; i < this.bgboxAnims.length; i++) {
      clearInterval(this.bgboxAnims[i]);
    }

    var section = this;
    // For each one...
    $('.section-bgbox').each(function() {
      if ($(this).hasClass('big')) {
        $(this).css('top', randomChoose(randomNumber(-10, 10), randomNumber(90, 110)) + '%');
        $(this).css('left', randomChoose(randomNumber(-10, 20), randomNumber(80, 110)) + '%');
      } else {
        $(this).css('top', randomNumber(0, 100) + '%');
        $(this).css('left', randomNumber(0, 100) + '%');
      }

      var thisBox = this;
      animateSectionHeaderSquare(thisBox);
      
      section.bgboxAnims.push(
        setInterval(function() {
            // Then, run the scale animation.
            animateSectionHeaderSquare(thisBox);
          }, randomNumber(10000, 15000))
        );
    });
  }

  // Updates active nav item on scroll into.
  handleWaypointEnter(waypointTitle, previousPosition, currentPosition) {
    this.setState({
      currentSelectedTitle: waypointTitle
    });
    this.updateSidebarNav();
  }

  // Updates active nav item on scroll leave.
  handleWaypointLeave(waypointTitle, previousPosition, currentPosition) {
    // If scrolling up and leaving this element...
    if (previousPosition === "inside" && currentPosition === "below") {
      // If this is the first section, remove current selected entirely.
      if (waypointTitle === "aboutme") {
        this.setState({
          currentSelectedTitle: ""
        });
      } 
      else { // If it isn't, set the current state to the previous element.
        this.setState({
          currentSelectedTitle: this.sections[this.sections.indexOf(waypointTitle) - 1]
        });
      }
    } 
    // If scrolling down and leaving this element...
    else if (previousPosition === "inside" && currentPosition === "above") {
      // If this is the last section, remove current selected entirely.
      if (waypointTitle === "contact") {
        this.setState({
          currentSelectedTitle: ""
        });
      } 
      else { // If it isn't, set the current state to the next element.
        this.setState({
          currentSelectedTitle: this.sections[this.sections.indexOf(waypointTitle) + 1]
        });
      }
    }
    this.updateSidebarNav();
  }
  
  render() {
    return (
      <div className="full">
        <Splash />
        <div className="space"></div>
        <Section 
          id={this.aboutme} 
          handleWaypointEnter={this.handleWaypointEnter} 
          handleWaypointLeave={this.handleWaypointLeave} 
          title={"About Me"} />
        <Section 
          id={this.skills}  
          handleWaypointEnter={this.handleWaypointEnter} 
          handleWaypointLeave={this.handleWaypointLeave}
          title={"Skills"} />
        <Section 
          id={this.experience} 
          handleWaypointEnter={this.handleWaypointEnter} 
          handleWaypointLeave={this.handleWaypointLeave}
          title={"Experience"} />
        <Section 
          id={this.projects} 
          handleWaypointEnter={this.handleWaypointEnter} 
          handleWaypointLeave={this.handleWaypointLeave}
          title={"Projects"} />
        <Section
          id={this.contact} 
          handleWaypointEnter={this.handleWaypointEnter} 
          handleWaypointLeave={this.handleWaypointLeave} 
          title={"Contact"} />
        <div className="full-footer">
          <p>Valentin Sigalov <span>© 2023</span></p>
        </div>
      </div>
    );
  }

  // Updates active item on sidebar nav based on state.
  updateSidebarNav() {
    // Remove active class from all of the sidebar nav anchors.
    this.sidebarNav.find('a').removeClass('active');

    // Add active class to just this one.
    this.sidebarNav.filter('.splash-nav-' + this.state.currentSelectedTitle).find('a').addClass('active');

    // Add correct class to splash-lower-bar.
    this.splashLowerBar.attr('class', 'splash-lower-bar');
    this.splashLowerBar.addClass('splash-nav-' + this.state.currentSelectedTitle);

    if (window.innerWidth <= 1024) {
      $('.mobile-nav-open').attr('class', 'mobile-nav-open');
      $('.mobile-nav-open').addClass('mobile-nav-' + this.state.currentSelectedTitle);
      $('.splash-right-para-select').attr('class', 'splash-right-para-select');
      $('.splash-right-para-select').addClass('splash-nav-' + this.state.currentSelectedTitle);
    }
  }
  
}

function animateSectionHeaderSquare(el) {
  var newState = randomChoose(0, 1);
  
  if (newState === 0) {
    $(el).css('transform', 'translate(-50%, -50%) scale(' + randomNumber(10, 13)/10 + ')');
    newState = 1;
  } else {
    $(el).css('transform', 'translate(-50%, -50%) scale(' + randomNumber(9, 10)/10 + ')');
    newState = 0;
  }

  $(el).css('transition-duration', randomNumber(7000, 10000) + 'ms');
}


// Randomly returns one of the two given elements.
function randomChoose(value1, value2) {
  return Math.random() < 0.5 ? value1 : value2;
}

// Provides a random number within the range.
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Full;
