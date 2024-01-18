import React, { Component, useState } from 'react';
import Moment from 'moment'

import GalAndMe from "../../images/GalAndMe.png";
import DevelopmentSkill from "../../images/DevelopmentSkill.png";
import RemnantMockup from "../../images/RemnantMockup.png";
import SunsetPic from "../../images/SunsetPic.png";
import LyddieJones from "../../images/LyddieJones.png";
import RandyCat from "../../images/RandyCat.png";
import SkyCat from "../../images/SkyCat.png";

class SectionAboutMe extends Component {

  constructor () {
    super();

    this.state = {
      yearsProfessionalExperience: this.renderTimeAgo("2015-6-01"),
      yearsAlive: this.renderTimeAgo("1997-5-29")
    };
  }

  renderTimeAgo(targetDate) {
    var nowTime = Moment();
    var beforeTime = Moment(targetDate);
    var duration = nowTime.diff(beforeTime, 'years');
    return duration;
  }

  render() {
    return (

      <div className="section-all-content">

        <div className="section-segment segment-hello">
          <div className="segment-inner">

            <div className="segment-inner-image-container">
                <div className="segment-inner-floaty segment-inner-floaty-1"></div>
                <div className="segment-inner-floaty segment-inner-floaty-2"></div>
                <div className="segment-inner-floaty segment-inner-floaty-3"></div>
                <img className="segment-inner-image" src={GalAndMe} alt="The Gal and me in Paris" />
              <span>The gal and me in Paris</span>
            </div>
            <div className="segment-inner-content-container">
                <h3>Hello!</h3>
              <p>I am a Philadelphia-based full-stack web developer with {this.state.yearsProfessionalExperience} years of professional experience, and a passion for interactive software.</p>
              <p>My favorite thing to do is to bring new user experiences to life by combining great design with sleek code.</p>
            </div>
          </div>
        </div>

        <div className="section-stats">
          <div className="stats-status-container">
            <h3>Career Status</h3>
            <div className="stats-status-content">
              <h4>Employment</h4>
              <p><strong>Open to new opportunities</strong></p>
              <p>Previously, I was a senior engineer at Bardavon Health Innovations. I worked on a number of enterprise applications designed to assist workers with physical injury prevention and rehabilitation.</p>
            </div>
          </div>
          <div className="stats-stats-container">
            <h3>Data</h3>
            <div className="stats-stats-content">

              <div className="stats-content-entry">

                <div className="stats-content-title"><span>Name</span></div>
                <div className="stats-content-data"><span>Valentin Aleksandrovich Sigalov</span></div>
              </div>

              {/* <div className="stats-content-entry">
                <div className="stats-content-title"><span>Age</span></div>
                <div className="stats-content-data"><span>{this.state.yearsAlive}</span></div>
              </div> */}

              <div className="stats-content-entry">
                <div className="stats-content-title"><span>Location</span></div>
                <div className="stats-content-data"><span>Philadelphia, Pennsylvania, USA, Earth</span></div>
              </div>

              <div className="stats-content-entry">
                <div className="stats-content-title"><span>Interests</span></div>
                <div className="stats-content-data"><span>Science Fiction, Worldbuilding, Cooking</span></div>
              </div>

            </div>
          </div>
        </div>

        <div className="section-segment segment-learning">
          <div className="segment-inner">
            <div className="segment-inner-floaty segment-inner-floaty-1"></div>
            <div className="segment-inner-floaty segment-inner-floaty-2"></div>
            <div className="segment-inner-floaty segment-inner-floaty-3"></div>
            <div className="segment-inner-image-container">
                <img className="segment-inner-image" src={DevelopmentSkill} alt="React" />
              <span>React</span>
            </div>
            <div className="segment-inner-content-container">
              <h3>I like <span>learning</span> and challenging myself.</h3>
              <p>If I have spare time, I'm probably picking up a new technology as a software engineer, or flexing my creativity. This website was a way of doing both - exploring clean futuristic design, while also learning React!</p>
            </div>
          </div>
        </div>

        <div className="section-segment segment-stuff">
          <div className="segment-inner">
            <div className="segment-inner-image-container">
                <div className="segment-inner-floaty segment-inner-floaty-1"></div>
                <div className="segment-inner-floaty segment-inner-floaty-2"><svg
                 width="35.5px" height="36.5px">
                <path fillRule="evenodd"  stroke="rgb(86, 204, 255)" strokeWidth="3px" strokeLinecap="round" strokeLinejoin="miter" fill="none"
                 d="M16.500,3.500 L16.500,31.500 "/>
                <path fillRule="evenodd"  stroke="rgb(86, 204, 255)" strokeWidth="3px" strokeLinecap="round" strokeLinejoin="miter" fill="none"
                 d="M31.000,18.000 L3.000,18.000 "/>
                </svg></div>
                <img className="segment-inner-image" src={SunsetPic} alt="Parking enforcement bot" />
              <span>Parking enforcement bot</span>
            </div>
            <div className="segment-inner-content-container">
                <h3>I make (subjectively) cool <span>stuff</span>.</h3>
              <p>Outside of work, I have a lot going on. Currently, I'm working on a little worldbuilding project called <a href="https://www.sunset-system.com/" target="_blank">Sunset System</a>, a science fiction setting about robots facing existential crisis after mankind vanished. I'm working with some friends on a video game; we prototyped a lot in Unity, but just started looking at Monogame.</p>
            </div>
          </div>
        </div>

        <div className="section-smalltitle">
          <div className="smalltitle-container">

              <h3>Just a little more...</h3>

            <div className="smalltitle-divider"></div>
          </div>
        </div>

        <div className="section-sidecards">
          <div className="sidecards-card">
            <img src={LyddieJones} alt="Lyddie Jones" />
            <p>Grew up here in Philly. Currently living with my amazing partner/string bean, Lydia <span role="img" aria-label="heart">❤️</span></p>
          </div>
          <div className="sidecards-card">
            <img src={RandyCat} alt="Randy the Cat" />
            <p>Here's my family's cat, Randy <span role="img" aria-label="cat">🐈</span></p>
          </div>
          <div className="sidecards-card">
            <img src={SkyCat} alt="Sky the Cat" />
            <p>We adopted a former-feral of our own. Sky is the sweetest creature <span role="img" aria-label="smiley">😀</span></p>
          </div>
        </div>

      </div>

    );
  }

}

export default SectionAboutMe;
