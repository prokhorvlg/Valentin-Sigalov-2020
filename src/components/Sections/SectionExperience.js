import React, { Component } from 'react';

import VanguardLogo from "../../images/experience-img-vanguard.png";
import JPMLogo from "../../images/experience-img-jpm.png";
import SHMLogo from "../../images/experience-img-shm.png";
import WindberLogo from "../../images/experience-img-windber.png";
import SZlogo from "../../images/sz.jpg";
import BardavonLogo from "../../images/bardavon.jpg"

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
              <img className="experience-entry-inner-image" src={BardavonLogo} alt="Bardavon" />
            </div>
            <div className="experience-entry-content">
              <h4>Senior Software Engineer</h4>
              <h5 className="experience-entry-subtitle">Bardavon Health Innovations <span className="experience-entry-subtitle-it">(November 2022 - December 2023)</span></h5>
              <ul>
                <li>Engineered front-end solutions using React and various state management tools for features within multiple enterprise applications centered around rehabilitating injured workers</li>
                <li>Developed full-stack solution for care quality tracking dashboard within an application designed to assist physical therapists with tracking patient progress, including new APIs using Python lambdas for creating and updating interventions</li>
                <li>Created new web application using Vite, React, and TanStack Query designed to display physical injury prevention exercises within existing mobile app, in order to bridge services between products from different teams</li>
                <li>Rapidly adapted, coordinated, and prioritized front-end efforts during a temporary team re-assignment to complete critical features within a two week deadline</li>
              </ul>
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
              <img className="experience-entry-inner-image" src={SZlogo} alt="SiteZeus" />
            </div>
            <div className="experience-entry-content">
              <h4>Front End Engineer</h4>
              <h5 className="experience-entry-subtitle">SiteZeus <span className="experience-entry-subtitle-it">(August 2021 - October 2022)</span></h5>
              <ul>
                <li>Implemented a wide variety of new features and panels within a GIS-based enterprise application using modern web technologies including Vue 3, VueX, and Pinia</li>
                <li>Combined Leaflet.js with Pinia and Vue 3 to integrate state management with a geographical map, allowing the user to generate and save map features for use in statistical analysis and business planning</li>
                <li>Brainstormed and developed self-motivated improvements to the product during the team's enhancement days, such as a consistent toast-style notification system</li>
                <li>Utilized Teleport feature to integrate new components and systems with a legacy Knockout application for the ultimate goal of gradually transitioning to a newer codebase</li>
                <li>Coordinated and provided feedback to designers, product owners, and quality assurance specialists in order to create an application with excellent user experience</li>
                <li>Participated in an agile sprint-based workflow and routine code reviews using Azure DevOps</li>
                <li>Led an initiative to incorporate ADA-compliant principles to the product by presenting research to the development and product team and involving ADA-compliant concepts in the design and development process</li>
              </ul>
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
              <img className="experience-entry-inner-image" src={VanguardLogo} alt="Vanguard" />
            </div>
            <div className="experience-entry-content">
              <h4>Full-Stack Developer</h4>
              <h5 className="experience-entry-subtitle">Vanguard Group <span className="experience-entry-subtitle-it">(January 2021 - August 2021)</span></h5>
              <ul>
                <li>Constructed front-end features using Angular and Node.js for the "Open an Account" application with thousands of daily users, as well as a number of shared applications and component libraries</li>
                <li>Ensured longevity of components and services through test-driven development, utilizing unit tests with Jasmine and Karma, and end-to-end tests with Cypress</li>
                <li>Worked closely with product owners and content managers to assure that the features meet the project's requirements and goals</li>
                <li>Identified, analyzed, and resolved dozens of user experience issues in real-time through monitoring Splunk dashboards and automated alerts</li>
                <li>Used Git/Bitbucket version control to collaborate and engage in code reviews</li>
              </ul>
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
              <img className="experience-entry-inner-image" src={JPMLogo} alt="JP Morgan Chase" />
            </div>
            <div className="experience-entry-content">
              <h4>Front-End Experience Web Developer</h4>
              <h5 className="experience-entry-subtitle">JP Morgan Chase & Co. <span className="experience-entry-subtitle-it">(March 2018 - December 2020)</span></h5>
              <ul>
                <li>Create modular components usable on multiple sites within brands, such as site navigation, headers and footers, modals, article grids, tab navigation, accordions, and others</li>
                <li>Conceptualize full-stack tech approaches for reusable components
                which can easily be dropped onto page by content authors</li>
                <li>Develop responsive front-end code based off of requirements and
                designs using HTML5, CSS/LESS, JavaScript, jQuery</li>
                <li>Implement REST APIs and business logic to create dynamic, datadriven interfaces, such as the JPMC Careers search filter components</li>
                <li>Utilize Git/BitBucket version control system, Jira-integrated branch
                management, and SonarQube linter to ensure code quality and
                consistency before reaching production platform</li>
              </ul>
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
              <h4>Software Engineer</h4>
              <h5 className="experience-entry-subtitle">Seagal Solutions Inc. <span className="experience-entry-subtitle-it">(June 2015 - December 2020)</span></h5>
              <p className="experience-entry-history">Senior Software Engineer (July 2020 - Present)</p>
              <p className="experience-entry-history">Software Engineer (2017 - July 2020)</p>
              <p className="experience-entry-history">Intern (2015 - 2017)</p>
              <p className="experience-entry-history small-padding">Client: Chan Soon-Shiong Institute of Molecular Medicine at Windber</p>
              <ul>
                <li>Provide modern design solutions for sections within a complex data warehouse tool used by cancer researchers</li>
                <li>Enhance data-driven components with responsive, clean front-end CSS and JavaScript code to ensure user experience across devices</li>
                <li>Collaborate with back-end engineers utilizing a C#-based Model View Controller to generate interface</li>
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
