import React from 'react';
import $ from "jquery";

import Burger from '@animated-burgers/burger-squeeze' 
import '@animated-burgers/burger-squeeze/dist/styles.css'

import NavButton from "../../components/NavButton/NavButton.js";
import ResumePic from "../../images/2020PS-resume-pic.png";

class SplashProfile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="splash-left-profile">
        <div className="mobile-nav-open" onClick={() => this.props.splash.toggleMobileNav()}>
          <Burger isOpen={this.props.splash.state.mobileNavOpen} />
        </div>


        <div className="splash-left-upper-container">
        <div className="splash-left-upper">
          <div className="splash-profile-picture">

            <img src={ResumePic} alt="Valentin Sigalov "/>

            {/* PROFILE PIC ANIMS: background squares */}

            <svg width="850" height="450" className="splash-profile-anim splash-anim-bgSquares"  style={{opacity: 0.3}}>

              {/* Large Rectangles */}

              <rect className="splash-anim-bgSquare" x="50%" y="50%" width="250" height="250" fill="#ff9b0b" stroke="none" data-constraints="[30,60,10,30]" data-slide-scale="[1,20]"/>

              <rect className="splash-anim-bgSquare" x="50%" y="50%" width="150" height="150" fill="#ff9b0b" stroke="none" data-constraints="[60,80,20,50]" data-slide-scale="[15,30]"/>

              {/* Baby Rectangles */}

              <rect className="splash-anim-bgSquare" x="50%" y="50%" width="45" height="45" fill="#ff9b0b" stroke="none" data-constraints="[80,160,50,60]" data-slide-scale="[30,70]"/>

              <rect className="splash-anim-bgSquare" x="50%" y="50%" width="65" height="65" fill="#ff9b0b" stroke="none" data-constraints="[80,160,50,60]" data-slide-scale="[30,70]"/>


              <rect className="splash-anim-bgSquare" x="50%" y="50%" width="35" height="35" fill="#ff9b0b" stroke="none" data-constraints="[80,160,50,60]" data-slide-scale="[70,90]"/>

              <rect className="splash-anim-bgSquare" x="50%" y="50%" width="15" height="15" fill="#ff9b0b" stroke="none" data-constraints="[120,160,70,80]" data-slide-scale="[70,90]"/>
            </svg>

            <div className="splash-anim-lines">

              <svg className="splash-profile-anim splash-anim-leftline" width="177px" height="42px">
                <path fillRule="evenodd"  stroke="rgb(255, 155, 11)" strokeWidth="6px" strokeLinecap="square" strokeLinejoin="miter" fill="none"
                 d="M168.000,24.000 L40.000,24.016 "/>
                <path fillRule="evenodd"  stroke="rgb(255, 155, 11)" strokeWidth="6px" strokeLinecap="square" strokeLinejoin="miter" fill="none"
                 d="M38.000,16.000 L38.000,32.000 "/>
                <path fillRule="evenodd"  stroke="rgb(255, 155, 11)" strokeWidth="6px" strokeLinecap="square" strokeLinejoin="miter" fill="none"
                 d="M48.000,16.000 L48.000,32.000 "/>
                <path fillRule="evenodd"  stroke="rgb(255, 155, 11)" strokeWidth="6px" strokeLinecap="square" strokeLinejoin="miter" fill="none"
                 d="M58.000,16.000 L58.000,32.000 "/>
                <path fillRule="evenodd"  stroke="rgb(255, 155, 11)" strokeWidth="6px" strokeLinecap="square" strokeLinejoin="miter" fill="none"
                 d="M6.000,6.000 L26.000,6.000 L26.000,26.000 L6.000,26.000 L6.000,6.000 Z"/>
              </svg>

              <svg 
               className="splash-profile-anim splash-anim-rightline" width="177px" height="42px">
                <path fillRule="evenodd"  stroke="rgb(255, 155, 11)" strokeWidth="6px" strokeLinecap="square" strokeLinejoin="miter" fill="none"
                 d="M89.000,8.000 L74.000,23.000 "/>
                <path fillRule="evenodd"  stroke="rgb(255, 155, 11)" strokeWidth="6px" strokeLinecap="square" strokeLinejoin="miter" fill="none"
                 d="M102.000,8.000 L87.000,23.000 "/>
                <path fillRule="evenodd"  stroke="rgb(255, 155, 11)" strokeWidth="6px" strokeLinecap="square" strokeLinejoin="miter" fill="none"
                 d="M139.000,11.000 L161.000,11.000 L161.000,33.000 L139.000,33.000 L139.000,11.000 Z"/>
                <path fillRule="evenodd"  stroke="rgb(255, 155, 11)" strokeWidth="6px" strokeLinecap="square" strokeLinejoin="miter" fill="none"
               d="M138.000,19.016 L6.000,19.000 "/>
              </svg>

            </div>

            {/* PROFILE PIC ANIMS: funky circle frame */}

            <div className="splash-anim-frameCircles">

              <svg className="splash-profile-anim" width="250" height="250">
                <circle cx="50%" cy="50%" r="111" fill="#00000080" stroke="none"/>
              </svg>

              <svg className="splash-profile-anim" width="250" height="250">
                <circle cx="50%" cy="50%" r="113" fill="none" stroke="#ff9b0b" strokeWidth="8"/>
              </svg>

              <svg className="splash-profile-anim" width="250" height="250">
                <circle className="splash-anim-funkyCircle" cx="50%" cy="50%" r="119" fill="none" stroke="#ff9b0b" strokeWidth="8" strokeDasharray="1065" strokeDashoffset="980"/>

                <circle className="splash-anim-funkyCircle2" cx="50%" cy="50%" r="119" fill="none" stroke="#ff9b0b" strokeWidth="8" strokeDasharray="789" strokeDashoffset="600"/>

                <circle className="splash-anim-funkyCircle3" cx="50%" cy="50%" r="119" fill="none" stroke="#ff9b0b" strokeWidth="8" strokeDasharray="990" strokeDashoffset="730"/>
              </svg>

            </div>
            
          </div>
          <div className="splash-profile-details">
            <div className="splash-name">
              <h1>Valentin Sigalov</h1>
            </div>
            <div className="splash-tagline">
              <span>Full-Stack Web Developer</span>
            </div>
          </div>
        </div>
      </div>
                
                <div className="splash-left-lower">
                  <div className="splash-lower-scrollicon">
                    <svg 
                     xmlns="http://www.w3.org/2000/svg"
                     width="58px" height="45px">

                    <path fillRule="evenodd" stroke="rgb(255, 182, 77)" strokeWidth="4px" strokeLinecap="square" strokeLinejoin="miter" fill="none"
                     d="M5.000,15.000 L28.000,38.000 L51.000,15.000 "/>
                    <path fillRule="evenodd"  stroke="rgb(255, 182, 77)" strokeWidth="4px" strokeLinecap="square" strokeLinejoin="miter" fill="none"
                     d="M5.000,5.000 L28.000,28.000 L51.000,5.000 "/>
                     
                    </svg>
                  </div>
                </div>

                <nav className="splash-left-sidebar-nav">
                    <ul>
                      <NavButton topic={"about me"} id={"aboutme"} splash={this.props.splash} />
                      <NavButton topic={"skills"} id={"skills"} splash={this.props.splash} />
                      <NavButton topic={"experience"} id={"experience"} splash={this.props.splash} />
                      <NavButton topic={"projects"} id={"projects"} splash={this.props.splash} />
                      <NavButton topic={"contact"} id={"contact"} splash={this.props.splash} />
                    </ul>
                </nav>

              </div>

      

    );
  }
}

export default SplashProfile;
