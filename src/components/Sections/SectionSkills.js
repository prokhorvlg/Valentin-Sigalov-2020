import React, { Component } from 'react';
import * as d3 from "d3";

import WebIcon from "../../images/SkillsIcons/web-technologies-skills-icon.png";
import GeneralIcon from "../../images/SkillsIcons/general-programming-skills-icon.png";
import CreativeIcon from "../../images/SkillsIcons/creative-tools-skills-icon.png";

class SectionSkills extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="section-all-content">
        <div className="section-content section-skills">

          <div className="section-content-startheader no-dot" id="skills-web">
            <div className="section-content-startheader-left">
              <div className="section-startheader-square">
                <div className="section-startheader-highlight"></div>
              </div>
              <div className="section-startheader-line"></div>
            </div>
            <div className="section-startheader-right">
              <div className="section-startheader-right-inner">
                <img src={WebIcon} />
                <h3>Web Technologies</h3>                
              </div>
              <div className="section-startheader-right-line"></div>
            </div>
          </div>

          <div className="section-content-skillsblock">
            <div className="skillsblock-inner">
              <div className="skillsblock-inner-top">
                <svg 
                 width="34px" height="28px">
                <path fill-rule="evenodd"  fill="rgb(25, 23, 20)"
                 d="M33.535,14.719 C33.437,14.953 33.303,15.156 33.132,15.327 C32.961,15.498 32.761,15.634 32.532,15.737 C32.302,15.839 32.056,15.891 31.792,15.891 C31.294,15.891 30.911,16.018 30.642,16.272 C30.373,16.526 30.239,16.911 30.239,17.429 L30.269,22.556 C30.269,23.210 30.176,23.796 29.990,24.314 C29.805,24.831 29.556,25.290 29.243,25.691 C28.931,26.091 28.572,26.433 28.167,26.716 C27.761,26.999 27.336,27.231 26.892,27.412 C26.448,27.592 25.999,27.724 25.544,27.807 C25.090,27.890 24.663,27.932 24.263,27.932 L21.373,27.932 L21.344,24.079 L23.263,24.079 C23.390,24.079 23.575,24.067 23.819,24.043 C24.063,24.018 24.305,23.955 24.544,23.852 C24.784,23.750 24.991,23.598 25.167,23.398 C25.343,23.198 25.431,22.927 25.431,22.585 L25.431,17.400 C25.431,16.872 25.521,16.306 25.702,15.700 C25.882,15.095 26.168,14.528 26.559,14.001 C26.217,13.581 25.936,13.086 25.716,12.514 C25.497,11.943 25.387,11.282 25.387,10.529 L25.387,5.388 L25.387,5.359 C25.338,5.085 25.248,4.856 25.116,4.670 C24.984,4.485 24.820,4.333 24.625,4.216 C24.430,4.099 24.212,4.016 23.973,3.967 C23.734,3.918 23.487,3.894 23.233,3.894 L21.314,3.894 L21.314,0.085 L24.233,0.085 C25.024,0.085 25.781,0.210 26.504,0.459 C27.226,0.708 27.864,1.064 28.416,1.528 C28.967,1.992 29.404,2.549 29.727,3.198 C30.049,3.847 30.210,4.568 30.210,5.359 C30.210,5.427 30.215,5.888 30.225,6.743 C30.234,7.597 30.239,8.860 30.239,10.529 C30.239,11.027 30.366,11.406 30.620,11.665 C30.874,11.924 31.265,12.053 31.792,12.053 C32.056,12.063 32.302,12.119 32.532,12.221 C32.761,12.324 32.961,12.461 33.132,12.631 C33.303,12.802 33.437,13.003 33.535,13.232 C33.633,13.462 33.682,13.708 33.682,13.972 C33.682,14.235 33.633,14.485 33.535,14.719 ZM10.034,3.974 C9.776,4.028 9.539,4.113 9.324,4.231 C9.109,4.348 8.933,4.499 8.797,4.685 C8.660,4.870 8.592,5.095 8.592,5.359 L8.592,5.388 L8.592,10.529 C8.592,11.282 8.484,11.943 8.269,12.514 C8.054,13.086 7.776,13.581 7.434,14.001 C7.845,14.528 8.135,15.095 8.306,15.700 C8.477,16.306 8.562,16.872 8.562,17.400 L8.562,22.585 C8.562,22.927 8.650,23.198 8.826,23.398 C9.002,23.598 9.212,23.750 9.456,23.852 C9.700,23.955 9.944,24.018 10.188,24.043 C10.432,24.067 10.623,24.079 10.760,24.079 L12.649,24.079 L12.649,27.932 L9.730,27.932 C9.330,27.932 8.903,27.890 8.449,27.807 C7.994,27.724 7.545,27.592 7.101,27.412 C6.656,27.231 6.232,26.999 5.826,26.716 C5.421,26.433 5.065,26.091 4.757,25.691 C4.450,25.290 4.205,24.831 4.025,24.314 C3.844,23.796 3.754,23.210 3.754,22.556 L3.754,17.429 C3.754,16.911 3.619,16.526 3.351,16.272 C3.082,16.018 2.709,15.891 2.230,15.891 C1.957,15.891 1.703,15.839 1.469,15.737 C1.234,15.634 1.031,15.498 0.861,15.327 C0.690,15.156 0.555,14.953 0.458,14.719 C0.360,14.485 0.311,14.235 0.311,13.972 C0.311,13.708 0.360,13.462 0.458,13.232 C0.555,13.003 0.690,12.802 0.861,12.631 C1.031,12.461 1.232,12.324 1.461,12.221 C1.691,12.119 1.937,12.063 2.201,12.053 C2.728,12.053 3.124,11.924 3.388,11.665 C3.651,11.406 3.783,11.027 3.783,10.529 L3.783,5.359 C3.783,4.519 3.954,3.772 4.296,3.117 C4.637,2.463 5.092,1.911 5.658,1.462 C6.224,1.013 6.867,0.671 7.584,0.437 C8.302,0.202 9.037,0.085 9.789,0.085 L12.679,0.085 L12.679,3.894 L10.789,3.894 C10.545,3.894 10.293,3.921 10.034,3.974 Z"/>
                </svg>
                <h4>Languages</h4>
              </div>
              <div className="skillsblock-inner-bottom">
                <div className="skillsblock-bottom-content">
                  <p>I’m ultra-familiar with the standard web development languages. They’re my bread and butter!</p>
                </div>
                <div className="skillsblock-bottom-chart">

                  <div className="skillsblock-chart-row g-orange">
                    <div className="skillsblock-row-title">
                      <p>HTML5</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '95%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-web">
                    <div className="skillsblock-row-title">
                      <p>CSS3</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '93%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-web">
                    <div className="skillsblock-row-title">
                      <p>LESS, SCSS</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '90%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-magenta">
                    <div className="skillsblock-row-title">
                      <p>JavaScript</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '95%'}}></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="section-content-skillsblock">
            <div className="skillsblock-inner">
              <div className="skillsblock-inner-top">
                <svg 
                 width="27px" height="31px">
                  <path fill-rule="evenodd"  fill="rgb(25, 23, 20)"
                 d="M26.000,23.000 L15.000,30.000 C15.000,30.000 8.926,31.788 6.000,29.000 C5.192,27.097 -0.000,11.000 -0.000,11.000 L-0.000,10.000 L12.000,-0.000 L13.000,1.000 L13.318,1.000 L20.000,22.000 L15.227,1.000 L15.333,1.000 L18.000,9.000 L17.111,1.000 L19.000,1.000 L20.000,-0.000 L27.000,22.000 L26.000,23.000 ZM11.000,6.000 L4.000,11.000 L5.000,13.000 L12.000,8.000 L11.000,6.000 Z"/>
                </svg>
                <h4>Libraries</h4>
              </div>
              <div className="skillsblock-inner-bottom">
                <div className="skillsblock-bottom-content">
                  <p>I have used dozens of libraries to make my projects work.</p>
                  <p>jQuery is a great general-use library (but shouldn’t be over-used), and I really enjoy working with D3 to create visual representations of data.</p>
                </div>
                <div className="skillsblock-bottom-chart">

                  <div className="skillsblock-chart-row g-purple">
                    <div className="skillsblock-row-title">
                      <p>jQuery</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '95%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-web">
                    <div className="skillsblock-row-title">
                      <p>Bootstrap</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '85%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-web">
                    <div className="skillsblock-row-title">
                      <p>D3</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '78%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-web">
                    <div className="skillsblock-row-title">
                      <p>three.js</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '55%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-web">
                    <div className="skillsblock-row-title">
                      <p>babylon.js</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '65%'}}></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="section-content-skillsblock">
            <div className="skillsblock-inner">
              <div className="skillsblock-inner-top">
                <svg 
                 width="33px" height="34px">
                  <path fill-rule="evenodd"  fill="rgb(25, 23, 20)"
                 d="M-0.000,34.000 L-0.000,13.161 L20.900,-0.000 L33.000,13.161 L33.000,34.000 L-0.000,34.000 ZM5.500,30.710 L7.700,30.710 L5.500,26.322 L5.500,30.710 ZM5.500,23.032 L12.100,30.710 L25.300,30.710 L28.862,24.495 L20.900,17.548 L6.600,17.548 L5.500,23.032 ZM12.675,10.781 L8.800,14.258 L13.750,14.532 L12.675,10.781 ZM19.800,4.387 L15.698,8.068 L16.500,12.064 L23.257,8.696 L19.800,4.387 ZM25.025,10.899 L19.724,14.863 L28.600,15.355 L25.025,10.899 ZM26.217,17.548 L29.353,21.300 L28.600,17.548 L26.217,17.548 Z"/>
                </svg>
                <h4>Frameworks</h4>
              </div>
              <div className="skillsblock-inner-bottom">
                <div className="skillsblock-bottom-content">
                  <p>This site was my React learning experience.</p>
                  <p>Admittedly, I still have a lot to learn with frameworks, but I’m always learning!</p>
                </div>
                <div className="skillsblock-bottom-chart">

                  <div className="skillsblock-chart-row g-green">
                    <div className="skillsblock-row-title">
                      <p>React</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '67%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-web">
                    <div className="skillsblock-row-title">
                      <p>Jekyll</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '87%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-web">
                    <div className="skillsblock-row-title">
                      <p>Angular</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '32%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-web">
                    <div className="skillsblock-row-title">
                      <p>Node.js</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '54%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-web">
                    <div className="skillsblock-row-title">
                      <p>Selenium</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '48%'}}></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="section-content-startheader no-dot top-padding" id="skills-general">
            <div className="section-content-startheader-left">
              <div className="section-startheader-square">
                <div className="section-startheader-highlight"></div>
              </div>
              <div className="section-startheader-line"></div>
            </div>
            <div className="section-startheader-right">
              <div className="section-startheader-right-inner">
                <img src={GeneralIcon} />
                <h3>General Programming</h3>                
              </div>
              <div className="section-startheader-right-line"></div>
            </div>
          </div>

          <div className="section-content-skillsblock">
            <div className="skillsblock-inner">
              <div className="skillsblock-inner-top">
                <svg 
                 width="34px" height="28px">
                <path fill-rule="evenodd"  fill="rgb(25, 23, 20)"
                 d="M33.535,14.719 C33.437,14.953 33.303,15.156 33.132,15.327 C32.961,15.498 32.761,15.634 32.532,15.737 C32.302,15.839 32.056,15.891 31.792,15.891 C31.294,15.891 30.911,16.018 30.642,16.272 C30.373,16.526 30.239,16.911 30.239,17.429 L30.269,22.556 C30.269,23.210 30.176,23.796 29.990,24.314 C29.805,24.831 29.556,25.290 29.243,25.691 C28.931,26.091 28.572,26.433 28.167,26.716 C27.761,26.999 27.336,27.231 26.892,27.412 C26.448,27.592 25.999,27.724 25.544,27.807 C25.090,27.890 24.663,27.932 24.263,27.932 L21.373,27.932 L21.344,24.079 L23.263,24.079 C23.390,24.079 23.575,24.067 23.819,24.043 C24.063,24.018 24.305,23.955 24.544,23.852 C24.784,23.750 24.991,23.598 25.167,23.398 C25.343,23.198 25.431,22.927 25.431,22.585 L25.431,17.400 C25.431,16.872 25.521,16.306 25.702,15.700 C25.882,15.095 26.168,14.528 26.559,14.001 C26.217,13.581 25.936,13.086 25.716,12.514 C25.497,11.943 25.387,11.282 25.387,10.529 L25.387,5.388 L25.387,5.359 C25.338,5.085 25.248,4.856 25.116,4.670 C24.984,4.485 24.820,4.333 24.625,4.216 C24.430,4.099 24.212,4.016 23.973,3.967 C23.734,3.918 23.487,3.894 23.233,3.894 L21.314,3.894 L21.314,0.085 L24.233,0.085 C25.024,0.085 25.781,0.210 26.504,0.459 C27.226,0.708 27.864,1.064 28.416,1.528 C28.967,1.992 29.404,2.549 29.727,3.198 C30.049,3.847 30.210,4.568 30.210,5.359 C30.210,5.427 30.215,5.888 30.225,6.743 C30.234,7.597 30.239,8.860 30.239,10.529 C30.239,11.027 30.366,11.406 30.620,11.665 C30.874,11.924 31.265,12.053 31.792,12.053 C32.056,12.063 32.302,12.119 32.532,12.221 C32.761,12.324 32.961,12.461 33.132,12.631 C33.303,12.802 33.437,13.003 33.535,13.232 C33.633,13.462 33.682,13.708 33.682,13.972 C33.682,14.235 33.633,14.485 33.535,14.719 ZM10.034,3.974 C9.776,4.028 9.539,4.113 9.324,4.231 C9.109,4.348 8.933,4.499 8.797,4.685 C8.660,4.870 8.592,5.095 8.592,5.359 L8.592,5.388 L8.592,10.529 C8.592,11.282 8.484,11.943 8.269,12.514 C8.054,13.086 7.776,13.581 7.434,14.001 C7.845,14.528 8.135,15.095 8.306,15.700 C8.477,16.306 8.562,16.872 8.562,17.400 L8.562,22.585 C8.562,22.927 8.650,23.198 8.826,23.398 C9.002,23.598 9.212,23.750 9.456,23.852 C9.700,23.955 9.944,24.018 10.188,24.043 C10.432,24.067 10.623,24.079 10.760,24.079 L12.649,24.079 L12.649,27.932 L9.730,27.932 C9.330,27.932 8.903,27.890 8.449,27.807 C7.994,27.724 7.545,27.592 7.101,27.412 C6.656,27.231 6.232,26.999 5.826,26.716 C5.421,26.433 5.065,26.091 4.757,25.691 C4.450,25.290 4.205,24.831 4.025,24.314 C3.844,23.796 3.754,23.210 3.754,22.556 L3.754,17.429 C3.754,16.911 3.619,16.526 3.351,16.272 C3.082,16.018 2.709,15.891 2.230,15.891 C1.957,15.891 1.703,15.839 1.469,15.737 C1.234,15.634 1.031,15.498 0.861,15.327 C0.690,15.156 0.555,14.953 0.458,14.719 C0.360,14.485 0.311,14.235 0.311,13.972 C0.311,13.708 0.360,13.462 0.458,13.232 C0.555,13.003 0.690,12.802 0.861,12.631 C1.031,12.461 1.232,12.324 1.461,12.221 C1.691,12.119 1.937,12.063 2.201,12.053 C2.728,12.053 3.124,11.924 3.388,11.665 C3.651,11.406 3.783,11.027 3.783,10.529 L3.783,5.359 C3.783,4.519 3.954,3.772 4.296,3.117 C4.637,2.463 5.092,1.911 5.658,1.462 C6.224,1.013 6.867,0.671 7.584,0.437 C8.302,0.202 9.037,0.085 9.789,0.085 L12.679,0.085 L12.679,3.894 L10.789,3.894 C10.545,3.894 10.293,3.921 10.034,3.974 Z"/>
                </svg>
                <h4>Languages</h4>
              </div>
              <div className="skillsblock-inner-bottom">
                <div className="skillsblock-bottom-content">
                  <p>My experience with programming languages is quite varied. I've used C# for writing games, Java for writing desktop applications and some web back-ends, and Python for web scripting.</p>
                </div>
                <div className="skillsblock-bottom-chart">

                  <div className="skillsblock-chart-row g-sharp">
                    <div className="skillsblock-row-title">
                      <p>C#</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '78%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-java">
                    <div className="skillsblock-row-title">
                      <p>Java</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '78%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-general">
                    <div className="skillsblock-row-title">
                      <p>Python</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '65%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-general">
                    <div className="skillsblock-row-title">
                      <p>SQL</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '58%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-general">
                    <div className="skillsblock-row-title">
                      <p>C++</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '35%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-general">
                    <div className="skillsblock-row-title">
                      <p>Visual Basic</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '15%'}}></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="section-content-skillsblock">
            <div className="skillsblock-inner">
              <div className="skillsblock-inner-top">
                <svg 
                 width="26px" height="26px">
                <path fill-rule="evenodd"  fill="rgb(25, 23, 20)"
                 d="M23.000,26.000 L3.000,26.000 C1.343,26.000 0.000,24.657 0.000,23.000 L0.000,3.000 C0.000,1.343 1.343,0.000 3.000,0.000 L23.000,0.000 C24.657,0.000 26.000,1.343 26.000,3.000 L26.000,23.000 C26.000,24.657 24.657,26.000 23.000,26.000 ZM13.250,9.438 L4.875,3.181 C4.700,3.062 4.492,3.002 4.253,3.002 C4.077,3.002 3.913,3.041 3.761,3.119 C3.610,3.197 3.478,3.300 3.366,3.428 C3.254,3.557 3.164,3.708 3.097,3.882 C3.029,4.056 2.995,4.244 2.995,4.446 C2.995,4.968 3.202,5.386 3.618,5.697 L10.231,10.704 L3.618,15.737 C3.202,16.049 2.995,16.462 2.995,16.975 C2.995,17.388 3.116,17.729 3.360,18.000 C3.604,18.270 3.901,18.405 4.253,18.405 C4.492,18.405 4.700,18.346 4.875,18.226 L13.250,11.983 C13.689,11.671 13.909,11.245 13.909,10.704 C13.909,10.199 13.689,9.778 13.250,9.438 ZM22.616,20.318 C22.355,20.012 22.041,19.859 21.673,19.859 L9.351,19.859 C8.974,19.859 8.656,20.012 8.394,20.318 C8.133,20.624 8.003,20.997 8.003,21.439 C8.003,21.870 8.133,22.239 8.394,22.545 C8.656,22.851 8.974,23.004 9.351,23.004 L21.673,23.004 C22.041,23.004 22.355,22.851 22.616,22.545 C22.877,22.239 23.008,21.870 23.008,21.439 C23.008,20.997 22.877,20.624 22.616,20.318 Z"/>
                </svg>
                <h4>IDE</h4>
              </div>
              <div className="skillsblock-inner-bottom">
                <div className="skillsblock-bottom-content">
                  <p>Here are some of the IDEs that I'm familiar with. My personal favorite is Sublime Text 3 (I'm currently using it to write this...)</p>
                </div>
                <div className="skillsblock-bottom-chart">

                  <div className="skillsblock-chart-row g-general">
                    <div className="skillsblock-row-title">
                      <p>Visual Studio</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '75%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-general">
                    <div className="skillsblock-row-title">
                      <p>IntelliJ</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '85%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-general">
                    <div className="skillsblock-row-title">
                      <p>Eclipse</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '82%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-orange-2">
                    <div className="skillsblock-row-title">
                      <p>Sublime Text</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '95%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-general">
                    <div className="skillsblock-row-title">
                      <p>Atom</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '55%'}}></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="section-content-skillsblock twin-block">
            <div className="skillsblock-inner">
              <div className="skillsblock-inner-top">
                <svg 
                 width="32px" height="32px">
                  <path fill-rule="evenodd"  fill="rgb(25, 23, 20)"
                 d="M31.333,17.582 L17.576,31.339 C16.699,32.216 15.278,32.216 14.401,31.339 L0.644,17.582 C-0.233,16.705 -0.233,15.284 0.644,14.407 L10.139,4.912 L12.677,7.450 C12.622,7.673 12.584,7.903 12.584,8.143 C12.584,9.461 13.473,10.561 14.681,10.905 L14.681,20.269 C13.751,20.748 13.108,21.706 13.108,22.824 C13.108,24.417 14.399,25.708 15.992,25.708 C17.584,25.708 18.876,24.417 18.876,22.824 C18.876,21.706 18.233,20.748 17.303,20.269 L17.303,12.076 L20.542,15.315 C20.487,15.538 20.449,15.768 20.449,16.008 C20.449,17.601 21.740,18.892 23.332,18.892 C24.925,18.892 26.216,17.601 26.216,16.008 C26.216,14.416 24.925,13.124 23.332,13.124 C22.949,13.124 22.586,13.203 22.252,13.338 L18.138,9.224 C18.273,8.890 18.351,8.526 18.351,8.143 C18.351,6.551 17.060,5.260 15.467,5.260 C15.085,5.260 14.721,5.338 14.387,5.473 L11.982,3.069 L14.401,0.650 C15.278,-0.227 16.699,-0.227 17.576,0.650 L31.333,14.407 C32.210,15.284 32.210,16.705 31.333,17.582 Z"/>
                </svg>
                <h4>Version Control</h4>
              </div>
              <div className="skillsblock-inner-bottom">
                <div className="skillsblock-bottom-chart">

                  <div className="skillsblock-chart-row g-general">
                    <div className="skillsblock-row-title">
                      <p>Git</p>
                    </div>

                  </div>

                  <div className="skillsblock-chart-row g-general">
                    <div className="skillsblock-row-title">
                      <p>Github</p>
                    </div>

                  </div>

                  <div className="skillsblock-chart-row g-general">
                    <div className="skillsblock-row-title">
                      <p>SourceTree</p>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <div className="skillsblock-inner">
              <div className="skillsblock-inner-top">
                <svg 
                 width="28px" height="28px">
                <path fill-rule="evenodd"  fill="rgb(25, 23, 20)"
                 d="M14.000,28.000 C7.299,28.000 1.705,23.289 0.330,17.000 L10.000,17.000 L10.000,21.000 L19.000,14.000 L10.000,7.000 L10.000,11.000 L0.330,11.000 C1.705,4.711 7.299,-0.000 14.000,-0.000 C21.732,-0.000 28.000,6.268 28.000,14.000 C28.000,21.732 21.732,28.000 14.000,28.000 Z"/>
                </svg> 
                <h4>Agile</h4>
              </div>
              <div className="skillsblock-inner-bottom">
                <div className="skillsblock-bottom-chart">

                  <div className="skillsblock-chart-row g-general">
                    <div className="skillsblock-row-title">
                      <p>Jira</p>
                    </div>

                  </div>

                  <div className="skillsblock-chart-row g-general">
                    <div className="skillsblock-row-title">
                      <p>Azure DevOps</p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="section-content-startheader no-dot top-padding" id="skills-creative">
            <div className="section-content-startheader-left">
              <div className="section-startheader-square">
                <div className="section-startheader-highlight"></div>
              </div>
              <div className="section-startheader-line"></div>
            </div>
            <div className="section-startheader-right">
              <div className="section-startheader-right-inner">
                <img src={CreativeIcon} />
                <h3>Creative Tools</h3>                
              </div>
              <div className="section-startheader-right-line"></div>
            </div>
          </div>

          <div className="section-content-skillsblock">
            <div className="skillsblock-inner">
              <div className="skillsblock-inner-top">
                <svg 
                 width="33px" height="28px">
                  <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"
                 d="M11.433,-0.000 L0.000,28.000 L18.449,28.000 L16.370,22.606 L11.173,22.606 L16.110,10.789 L23.906,28.000 L33.000,28.000 L20.787,-0.000 L11.433,-0.000 Z"/>
                </svg>
                <h4>Adobe Creative Suite</h4>
              </div>
              <div className="skillsblock-inner-bottom">
                <div className="skillsblock-bottom-content">
                  <p>While my most used creative program is Photoshop (by far - I even use it for most vectoring), I am familiar with the other major Adobe applications.</p>
                </div>
                <div className="skillsblock-bottom-chart">

                  <div className="skillsblock-chart-row g-photoshop">
                    <div className="skillsblock-row-title">
                      <p>Photoshop</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '95%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-creative">
                    <div className="skillsblock-row-title">
                      <p>Illustrator</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '68%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-creative">
                    <div className="skillsblock-row-title">
                      <p>Premiere Pro</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '42%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-creative">
                    <div className="skillsblock-row-title">
                      <p>After Effects</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '38%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-creative">
                    <div className="skillsblock-row-title">
                      <p>InDesign</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '15%'}}></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="section-content-skillsblock twin-block">
            <div className="skillsblock-inner">
            <div className="skillsblock-inner-top">
            <svg 
             width="31px" height="28px">
              <path fill-rule="evenodd"  fill="rgb(25, 23, 20)"
               d="M30.653,6.385 L18.203,19.163 L10.246,21.282 L12.307,13.135 L24.758,0.358 L27.454,0.012 L30.991,3.629 L30.653,6.385 ZM15.183,13.823 L13.718,16.527 L14.897,17.733 L17.541,16.234 L15.183,13.823 Z"/>
              <path fill-rule="evenodd"  fill="rgb(25, 23, 20)"
             d="M20.731,6.741 L20.796,6.741 L20.796,6.855 L20.731,6.741 ZM11.079,11.144 L4.326,11.144 L4.326,23.597 L16.470,23.597 L16.470,16.733 L16.607,16.800 L20.796,13.269 L20.796,28.000 L-0.000,28.000 L-0.000,6.741 L13.626,6.741 L11.079,11.144 Z"/>
            </svg>
                <h4>Sketching</h4>
              </div>
              <div className="skillsblock-inner-bottom">
                <div className="skillsblock-bottom-chart">

                  <div className="skillsblock-chart-row g-procreate">
                    <div className="skillsblock-row-title">
                      <p>Procreate</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '75%'}}></div>
                    </div>
                  </div>

                  <div className="skillsblock-chart-row g-creative">
                    <div className="skillsblock-row-title">
                      <p>Sketchbook</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '55%'}}></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="skillsblock-inner">
            <div className="skillsblock-inner-top">
                <svg 
                 width="29px" height="32px">
                  <path fill-rule="evenodd"  fill="rgb(25, 23, 20)"
                 d="M16.836,31.999 L16.836,17.727 L28.998,10.783 L28.998,25.006 L16.836,31.999 ZM2.649,6.755 L14.499,-0.003 L26.471,6.880 L14.520,13.955 L2.649,6.755 ZM12.155,17.336 L12.155,31.995 L-0.000,25.006 L-0.000,10.325 L12.155,17.336 Z"/>
                </svg>
                <h4>3D</h4>
              </div>
              <div className="skillsblock-inner-bottom">
                <div className="skillsblock-bottom-chart">

                  <div className="skillsblock-chart-row g-creative">
                    <div className="skillsblock-row-title">
                      <p>Blender</p>
                    </div>
                    <div className="skillsblock-row-amount">
                      <div className="skillsblock-row-amount-fill" style={{width: '58%'}}></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    //console.log("drawing");
  
}
}

export default SectionSkills;