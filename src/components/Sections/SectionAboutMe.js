import React, { Component, useState } from 'react';
import Moment from 'moment'

import GalAndMe from "../../images/GalAndMe.png";
import DevelopmentSkill from "../../images/DevelopmentSkill.png";
import RemnantMockup from "../../images/RemnantMockup.png";
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
              <p>Currently a web developer at Vanguard! I do full-stack work, anything from front-end components, to business logic, to web services.</p>
            </div>
          </div>
          <div className="stats-stats-container">
            <h3>Data</h3>
            <div className="stats-stats-content">

              <div className="stats-content-entry">

                <div className="stats-content-title"><span>Name</span></div>
                <div className="stats-content-data"><span>Valentin Aleksandrovich Sigalov</span></div>
              </div>

              <div className="stats-content-entry">
                <div className="stats-content-title"><span>Age</span></div>
                <div className="stats-content-data"><span>{this.state.yearsAlive}</span></div>
              </div>

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
                <img className="segment-inner-image" src={DevelopmentSkill} alt="Latest development skill" />
              <span>Latest development skill</span>
            </div>
            <div className="segment-inner-content-container">
                <h3>I like <span>learning</span> and challenging myself.</h3>
              <p>If I have spare time, I'm probably picking up a new technology as a software engineer, or flexing my creativity. This website was a way of doing both - exploring cyberpunk design, while also learning React!</p>
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
                <img className="segment-inner-image" src={RemnantMockup} alt="Some of the robos from Remnant" />
              <span>Some of the robos from Remnant</span>
            </div>
            <div className="segment-inner-content-container">
                <h3>I make (subjectively) cool <span>stuff</span>.</h3>
              <p>Outside of work and school, I have a lot going on. Currently, I'm in progress on a passion project - leading a team of developers and artists into creating a "metroidvania-style" video game called <span>Remnant</span>.</p>
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
