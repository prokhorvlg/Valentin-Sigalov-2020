import React, { Component } from 'react';

import JPMLogo from "../../images/experience-img-jpm.png";
import SHMLogo from "../../images/experience-img-shm.png";
import WindberLogo from "../../images/experience-img-windber.png";

import DrexelLogo from "../../images/experience-img-drexel.png";
import CentralLogo from "../../images/experience-img-central.png";

import ProfessionalIcon from "../../images/ExperienceIcons/professional-icon-exp.png";
import EducationIcon from "../../images/ExperienceIcons/education-icon-exp.png";

class SectionExperience extends Component {

  render() {
    return (
      <div className="section-all-content">
        <div className="section-content">

          <div className="section-content-startheader" id="experience-professional">
            <div className="section-content-startheader-left">
              <div className="section-startheader-square">
                <div className="section-startheader-highlight"></div>
              </div>
              <div className="section-startheader-line"></div>
            </div>
            <div className="section-startheader-right">
              <div className="section-startheader-right-inner">
                <img src={ProfessionalIcon} />
                <h3>Professional Experience</h3>                
              </div>
              <div className="section-startheader-right-line"></div>
            </div>
          </div>

          <div className="section-experience-entry first">
            <div className="experience-entry-left">
              <div className="experience-entry-lines">
                <div className="experience-entry-bottomline"></div>
                <div className="experience-entry-topline"></div>
              </div>
              <div className="experience-entry-angledlines">
                <div className="experience-entry-angledlinetop"></div>
                <div className="experience-entry-angledlinebottom"></div>
                <div className="experience-entry-angledmiddleline"></div>
              </div>
              <div className="experience-entry-point">
                <div className="experience-entry-pointwrap">
                  <svg 
                   width="8px" height="8px">
                    <path fill-rule="evenodd" className="experience-entry-pointfill"
                   d="M4.000,-0.000 C6.209,-0.000 8.000,1.791 8.000,4.000 C8.000,6.209 6.209,8.000 4.000,8.000 C1.791,8.000 -0.000,6.209 -0.000,4.000 C-0.000,1.791 1.791,-0.000 4.000,-0.000 Z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="experience-entry-image">
              <img className="experience-entry-inner-image" src={JPMLogo} alt="JP Morgan Chase" />
            </div>
            <div className="experience-entry-content">
              <h4>Front-End Experience Web Developer</h4>
              <h5 className="experience-entry-subtitle">JP Morgan Chase & Co. <span className="experience-entry-subtitle-it">(March 2018 - Present)</span></h5>
              <ul>
                <li>Participate in migration of website components to Adobe Experience Management CMS platform</li>
                <li>Develop new front-end and back-end code for CMS components and websites based off of requirements and designs</li>
                <li>Conceptualize solutions and tech approaches for particular web development issues and challenges</li>
              </ul>
              {/*<h5 className="experience-entry-smalltitle">Technologies Used</h5>
              <p>Stuff, things</p>*/}
            </div>
          </div>

          <div className="section-experience-entry">
            <div className="experience-entry-left">
              <div className="experience-entry-lines">
                <div className="experience-entry-bottomline"></div>
                <div className="experience-entry-topline"></div>
              </div>
              <div className="experience-entry-angledlines">
                <div className="experience-entry-angledlinetop"></div>
                <div className="experience-entry-angledlinebottom"></div>
                <div className="experience-entry-angledmiddleline"></div>
              </div>
              <div className="experience-entry-point">
                <div className="experience-entry-pointwrap">
                  <svg 
                   width="8px" height="8px">
                    <path fill-rule="evenodd" className="experience-entry-pointfill"
                   d="M4.000,-0.000 C6.209,-0.000 8.000,1.791 8.000,4.000 C8.000,6.209 6.209,8.000 4.000,8.000 C1.791,8.000 -0.000,6.209 -0.000,4.000 C-0.000,1.791 1.791,-0.000 4.000,-0.000 Z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="experience-entry-image">
              <img className="experience-entry-inner-image" src={SHMLogo} alt="SHM Logo" />
            </div>
            <div className="experience-entry-content">
              <h4>Web Analyst</h4>
              <h5 className="experience-entry-subtitle">Society of Hospital Medicine <span className="experience-entry-subtitle-it">(April 2017 - September 2017)</span></h5>
              <ul>
                <li>Maintained content on a company's primary website hosting more than 4000 pages</li>
                <li>Worked with a team to redesign and develop WordPress and custom Bootstrap-based satellite sites</li>
                <li>Communicated with members from every department in the company to deliver updates to projects</li>
                <li>Handled over 60 support and project-related tickets per month using and online support desk</li>
              </ul>
            </div>
          </div>

          <div className="section-experience-entry last">
            <div className="experience-entry-left">
              <div className="experience-entry-lines">
                <div className="experience-entry-bottomline"></div>
                <div className="experience-entry-topline"></div>
              </div>
              <div className="experience-entry-angledlines">
                <div className="experience-entry-angledlinetop"></div>
                <div className="experience-entry-angledlinebottom"></div>
                <div className="experience-entry-angledmiddleline"></div>
              </div>
              <div className="experience-entry-point">
                <div className="experience-entry-pointwrap">
                  <svg 
                   width="8px" height="8px">
                    <path fill-rule="evenodd" className="experience-entry-pointfill"
                   d="M4.000,-0.000 C6.209,-0.000 8.000,1.791 8.000,4.000 C8.000,6.209 6.209,8.000 4.000,8.000 C1.791,8.000 -0.000,6.209 -0.000,4.000 C-0.000,1.791 1.791,-0.000 4.000,-0.000 Z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="experience-entry-image">
              <img className="experience-entry-inner-image" src={WindberLogo} alt="Windber Logo" />
            </div>
            <div className="experience-entry-content">
              <h4>Web Developer Intern</h4>
              <h5 className="experience-entry-subtitle">Windber Research Institute <span className="experience-entry-subtitle-it">(June 2015 - March 2017)</span></h5>
              <ul>
                <li>Programmed JavaScript modules used to dynamically display a patient's life</li>
                <li>Implemented front-end design and code into a C# based Model View Controller</li>
              </ul>
            </div>
          </div>

          <div className="section-content-startheader" id="experience-education">
            <div className="section-content-startheader-left">
              <div className="section-startheader-square">
                <div className="section-startheader-highlight"></div>
              </div>
              <div className="section-startheader-line"></div>
            </div>
            <div className="section-startheader-right">
              <div className="section-startheader-right-inner">
                <img src={EducationIcon} />
                <h3>Education</h3>                
              </div>
              <div className="section-startheader-right-line"></div>
            </div>
          </div>

          <div className="section-experience-entry first">
            <div className="experience-entry-left">
              <div className="experience-entry-lines">
                <div className="experience-entry-bottomline"></div>
                <div className="experience-entry-topline"></div>
              </div>
              <div className="experience-entry-angledlines">
                <div className="experience-entry-angledlinetop"></div>
                <div className="experience-entry-angledlinebottom"></div>
                <div className="experience-entry-angledmiddleline"></div>
              </div>
              <div className="experience-entry-point">
                <div className="experience-entry-pointwrap">
                  <svg 
                   width="8px" height="8px">
                    <path fill-rule="evenodd" className="experience-entry-pointfill"
                   d="M4.000,-0.000 C6.209,-0.000 8.000,1.791 8.000,4.000 C8.000,6.209 6.209,8.000 4.000,8.000 C1.791,8.000 -0.000,6.209 -0.000,4.000 C-0.000,1.791 1.791,-0.000 4.000,-0.000 Z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="experience-entry-image">
              <img className="experience-entry-inner-image" src={DrexelLogo} />
            </div>
            <div className="experience-entry-content">
              <h4>Bachelor of Science in Computer Science</h4>
              <h5 className="experience-entry-subtitle">Drexel University <span className="experience-entry-subtitle-it">(August 2015 - June 2020)</span></h5>
              <p>Completed a five-year program with the College of Computing and Informatics, with two tracks:</p>
              <ul>
                <li><span className="smalltitle">Human-Computer Interaction:</span> Designing software systems with consideration for the user.</li>
                <li><span className="smalltitle">Software Engineering:</span> Applying processes, methods, and tools to the problem of building and maintaining computer software with a defined level of quality, at a predictable cost, on a predictable schedule.</li>
              </ul>
            </div>
          </div>

          <div className="section-experience-entry last">
            <div className="experience-entry-left">
              <div className="experience-entry-lines">
                <div className="experience-entry-bottomline"></div>
                <div className="experience-entry-topline"></div>
              </div>
              <div className="experience-entry-angledlines">
                <div className="experience-entry-angledlinetop"></div>
                <div className="experience-entry-angledlinebottom"></div>
                <div className="experience-entry-angledmiddleline"></div>
              </div>
              <div className="experience-entry-point">
                <div className="experience-entry-pointwrap">
                  <svg 
                   width="8px" height="8px">
                    <path fill-rule="evenodd" className="experience-entry-pointfill"
                   d="M4.000,-0.000 C6.209,-0.000 8.000,1.791 8.000,4.000 C8.000,6.209 6.209,8.000 4.000,8.000 C1.791,8.000 -0.000,6.209 -0.000,4.000 C-0.000,1.791 1.791,-0.000 4.000,-0.000 Z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="experience-entry-image">
              <img className="experience-entry-inner-image" src={CentralLogo} />
            </div>
            <div className="experience-entry-content">
              <h4>High School Education</h4>
              <h5 className="experience-entry-subtitle">Central High School <span className="experience-entry-subtitle-it">(Graduated 2015)</span></h5>
              <p>Class 274. Go Lancers!</p>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default SectionExperience;