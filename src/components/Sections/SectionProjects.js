import React, { Component } from 'react';
import $ from "jquery";

import ProjectsArt from "../../images/projects-art-image.png";
import ProjectsDev from "../../images/projects-dev-image.png";

import ProjVS2020 from "../../images/ProjectImages/p-valentin-sigalov-2020.png";
import ProjMorningArtifice from "../../images/ProjectImages/p-morning-artifice.png";
import ProjJPMCCareers from "../../images/ProjectImages/p-jpmc-careers.png";
import ProjUnturnedStones2018 from "../../images/ProjectImages/p-unturned-stones.png";
import ProjVS2017 from "../../images/ProjectImages/p-valentin-sigalov-2017.png";
import ProjPlacesDemo from "../../images/ProjectImages/p-places-demo.png";
import ProjEndpoint from "../../images/ProjectImages/p-endpoint.png";
import ProjRemnant from "../../images/ProjectImages/p-remnant.png";

import ProjJThello from "../../images/ProjectImages/p-jthello.png";

class SectionProjects extends Component {

  state = {
    filter: "",
    data: [
      {
        title: "Valentin Sigalov 2020",
        tags: "Personal / Portfolio / React",
        type: "key-web",
        image: ProjVS2020,
        class: "p-vs-2020",
      },
      {
        title: "Morning Artifice",
        tags: "Personal / Worldbuilding / Jekyll",
        type: "key-web",
        image: ProjMorningArtifice,
        class: "p-morning-artifice",
      },
      {
        title: "Unturned Stones 2018",
        tags: "Personal / Worldbuilding / Jekyll",
        type: "key-web",
        image: ProjUnturnedStones2018,
        class: "p-unts-2018",
      },
      {
        title: "JPMC Careers",
        tags: "Professional / Front-End",
        type: "key-web",
        image: ProjJPMCCareers,
        class: "p-jpmc-careers",
      },
      {
        title: "Valentin Sigalov 2017",
        tags: "Personal / Portfolio / Front-End",
        type: "key-web",
        image: ProjVS2017,
        class: "p-vs-2017",
      },
      {
        title: "Places Demo",
        tags: "Personal / Worldbuilding / D3js",
        type: "key-web",
        image: ProjPlacesDemo,
        class: "p-places-demo",
      },
      {
        title: "Remnant",
        tags: "Collaborative / C# / Unity",
        type: "key-game",
        image: ProjRemnant,
        class: "p-remnant",
      },
      {
        title: "Endpoint",
        tags: "Class Group / C# / Unity",
        type: "key-game",
        image: ProjEndpoint,
        class: "p-endpoint",
      },
      {
        title: "jThello",
        tags: "Collaborative / Java",
        type: "key-other",
        image: ProjJThello,
        class: "p-jthello",
      },
      {
        title: "TMSBro Script",
        tags: "Personal / Python / Selenium",
        type: "key-other",
        image: ProjMorningArtifice,
        class: "p-tmsbro",
      },
    ]
  };

  handleFilterChange = (type, e) => {
    // Prevent page reload.
    e.preventDefault();

    // Remove all active classes from the filter links.
    $('a.filter-links').removeClass('active');
    // Add active class to this filter link.
    $(e.target).addClass('active');

    // Change state of component to reflect filter.
    this.setState({ filter: type });
  };

  componentDidMount() {
    // Add active class to this filter link.
    $('.projects-first').addClass('active');

    // Change state of component to reflect filter.
    this.setState({ filter: "key-web" });
  }

  render() {
    // Get filter and data.
    const { filter, data } = this.state;

    // Get filter data as variable.
    const lowercasedFilter = filter.toLowerCase();

    // Get data filtered by the filter.
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key => 
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
      <div className="section-all-content">
        <div className="section-content section-projects">

          <div className="section-segment segment-dev-projects">
            <div className="segment-inner">
              <div className="segment-inner-image-container">
                  <div className="segment-inner-floaty segment-inner-floaty-1"></div>
                  <div className="segment-inner-floaty segment-inner-floaty-2"></div>
                  <img className="segment-inner-image" src={ProjectsDev} />
              </div>
              <div className="segment-inner-content-container">
                <h3>Here’s some <span>dev projects</span> I’ve worked on.</h3>
                <p>You can use the buttons at the top to filter by type, and you can click on items to get an expanded description!</p>
              </div>
            </div>
          </div>

          <div className="projects-filter-menu">
            <div className="projects-filter-inner">
              <span>Filter by type:</span>
              <ul>
                <li><a href="#" className="filter-links" onClick={(e) => this.handleFilterChange("", e)}>All Projects</a></li>
                <li><a href="#" className="filter-links projects-first" onClick={(e) => this.handleFilterChange("key-web", e)}>Web Dev</a></li>
                <li><a href="#" className="filter-links" onClick={(e) => this.handleFilterChange("key-game", e)}>Game Dev</a></li>
                <li><a href="#" className="filter-links" onClick={(e) => this.handleFilterChange("key-other", e)}>Other</a></li>
              </ul>
            </div>
          </div>

          <div className="projects-filter-body">
            <div className="projects-filter-items">

              {filteredData.map(item => (
                <a key={item.class} className={"projects-filter-item " + item.class}>
                  <div className="filter-item-image">
                    <div className="filter-item-image-wrap">
                      <img src={item.image} />
                    </div>
                  </div>
                  <div className="filter-item-body">
                    <div className="filter-item-titles">
                      <h4>{item.title}</h4>
                      <p>{item.tags}</p>
                    </div>
                    <div className="filter-item-button">
                      <svg 
                       width="20px" height="30px">
                        <path fill-rule="evenodd"  stroke="rgb(0, 0, 0)" stroke-width="4px" stroke-linecap="round" stroke-linejoin="round" fill="none"
                       d="M4.000,4.000 L14.000,14.000 L4.000,24.000 "/>
                      </svg>
                    </div>
                  </div>
                </a>
              ))}

            </div>
          </div>

          <div className="section-segment segment-art-projects">
            <div className="segment-inner">
              <div className="segment-inner-image-container">
                  <div className="segment-inner-floaty segment-inner-floaty-1"></div>
                  <div className="segment-inner-floaty segment-inner-floaty-2"></div>
                  <img className="segment-inner-image" src={ProjectsArt} alt="" />
              </div>
              <div className="segment-inner-content-container">
                <h3>If you want to see my <span>art projects</span>...</h3>
                <p>I am currently working on a way to present art projects in a clean, personal way. For now, please feel free to check out my numerous art projects over on my <a href="https://www.deviantart.com/prokhorvlg" target="_blank"><i className="fab fa-deviantart" style={{marginRight: "3px"}}></i>DeviantArt</a> profile!</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default SectionProjects;