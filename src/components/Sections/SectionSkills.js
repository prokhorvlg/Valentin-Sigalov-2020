import React, { Component } from 'react';
import * as d3 from "d3";

class SectionSkills extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="section-all-content">


        <div className="section-content">

          <div className="section-content-startpoint">
              <div className="section-startpoint-square">
                <div className="section-startpoint-highlight"></div>
              </div>
              <div className="section-startpoint-line"></div>
          </div>

          <div className="section-content-cheader">
            <div className="section-cheader-lines">
              <div className="section-cheader-bottomline"></div>
              <div className="section-cheader-topline"></div>
            </div>
            <div className="section-cheader-angledlines">
              <div className="section-cheader-angledlinetop"></div>
              <div className="section-cheader-angledlinebottom"></div>
              <div className="section-cheader-angledmiddleline"></div>
            </div>
            <div className="section-cheader-point">
              <div className="section-cheader-pointwrap">
                <svg 
                 width="8px" height="8px">
                <path fill-rule="evenodd" className="section-cheader-pointfill"
                 d="M4.000,-0.000 C6.209,-0.000 8.000,1.791 8.000,4.000 C8.000,6.209 6.209,8.000 4.000,8.000 C1.791,8.000 -0.000,6.209 -0.000,4.000 C-0.000,1.791 1.791,-0.000 4.000,-0.000 Z"/>
                </svg>
              </div>
            </div>
            <div className="section-cheader-frames">
              <svg width="97px" height="125px" className="section-cheader-frametop">
                <path fill-rule="evenodd"  stroke="rgb(0, 0, 0)" stroke-width="4px" stroke-linecap="round" stroke-linejoin="miter" fill="none"
               d="M4.000,119.000 L4.000,91.000 L91.000,4.000 "/>
              </svg>
              <svg width="97px" height="125px" className="section-cheader-framebottom">
                <path fill-rule="evenodd"  stroke="rgb(0, 0, 0)" stroke-width="4px" stroke-linecap="round" stroke-linejoin="miter" fill="none"
               d="M4.000,119.000 L4.000,91.000 L91.000,4.000 "/>
              </svg>
              <div className="section-cheader-frame-topline"></div>
              <div className="section-cheader-frame-bottomline"></div>
            </div>
            <div className="section-cheader-content">
              <h3>{this.props.links[0].text}</h3>
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