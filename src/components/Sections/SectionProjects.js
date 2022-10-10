import React, { Component } from 'react';
import $ from "jquery";
import Modal from 'react-modal';
import FlipMove from 'react-flip-move';

import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'

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
import ProjPomodoro from "../../images/ProjectImages/p-pomo.png";
import ProjTeammates from "../../images/ProjectImages/p-teammates.png";
import ProjNotebot from "../../images/ProjectImages/p-notebot.png";
import ProjSiteZeus from "../../images/ProjectImages/p-sz.png";

import ProjJThello from "../../images/ProjectImages/p-jthello.png";
import ProjTMSBro from "../../images/ProjectImages/p-tmsbro.png";

import VidVS2017 from "../../video/vs2017.gif";
import VidMorningArtifice from "../../video/ma1.gif";
import VidJPMCCareers from "../../video/careers1.gif";
import VidPlaces from "../../video/places.gif";
import VidJThello from "../../video/jthello.gif";
import VidUNTS from "../../video/unts.gif";

import VidSZ from "../../video/sz.mp4";
import VidPomo from "../../video/pomo.mp4";
import VidTeammates from "../../video/teammates.mp4";
import VidNotebot from "../../video/notebot.mp4";

class SectionProjects extends Component {

  constructor () {
    super();

    this.state = {
      filter: "",
      modalOpen: false,
      modalData: '',
      data: [
        {
          title: "SiteZeus",
          tags: "Professional / Front-End / Vue 3",
          type: "key-web",
          image: ProjSiteZeus,
          class: "p-sz",
          video: VidSZ,
          text: <div><p>At SiteZeus, I had the pleasure of working on an extensive GIS-based enterprise web application, with a front-end written in both Vue 3 and a legacy portion using Knockout (an older framework).</p>
          <p>I implemented and participated in the design process for a wide variety of features related to statistical analysis and business planning.</p></div>,
        },
        {
          title: "pomodoro",
          tags: "Personal / Portfolio / React",
          type: "key-web",
          image: ProjPomodoro,
          class: "p-pomo",
          url: "https://prokhorvlg.github.io/pomodoro/",
          video: VidPomo,
          text: <div><p>pomodoro is a demo for a React-based pomodoro-styled timer web app.</p>
          <p>Fairly straight forward and strictly front-end, this was a quick project to demonstrate React hooks, functional components, and SCSS knowledge.</p></div>,
        },
        {
          title: "Teammates",
          tags: "Personal / Portfolio / React",
          type: "key-web",
          image: ProjTeammates,
          video: VidTeammates,
          class: "p-teammates",
          url: "https://teammates-demo.herokuapp.com/",
          text: <div><p>teammates is a demo for a React-based employee directory application. It features a node server, React hooks, Typescript, and Jest unit testing.</p>
          <p>This, unfortunately, may go offline once Heroku's free tier goes away as it is hosted using a Heroku free dyno.</p></div>,
        },
        {
          title: "Notebot",
          tags: "Personal / Portfolio / React",
          type: "key-web",
          image: ProjNotebot,
          video: VidNotebot,
          class: "p-notebot",
          url: "https://prokhorvlg.github.io/notebot/",
          text: <div><p>Notebot is a learning project and tech demo that I designed and wrote, with the purpose of writing, storing, and organizing text-based notes.</p>
          <p>In Notebot, I explored React Hooks and other modern JS framework concepts, as well as an integration with Google Firebase to serve as the back-end. I encourage you to open it and try it for yourself! All notes are associated with the ID generated in the query string.</p>
          <p>Note: there is a minor bug in which the first few opened notes get registered as changed.</p></div>,
        },
        {
          title: "Valentin Sigalov 2020",
          tags: "Personal / Portfolio / React",
          type: "key-web",
          image: ProjVS2020,
          class: "p-vs-2020",
          url: "https://www.valentinsigalov.com/",
          text: <div><p>This is the website you're currently on. Besides being a revamped personal/portfolio site for 2020 with a cool new design, it was my way of learning how React works. So this site is powered by React - yay!</p></div>,
        },
        {
          title: "Morning Artifice",
          tags: "Personal / Worldbuilding / Jekyll",
          type: "key-web",
          image: ProjMorningArtifice,
          gif: VidMorningArtifice,
          class: "p-morning-artifice",
          url: "https://www.morningartifice.com/",
          text: <div><p>Morning Artifice is my primary worldbuilding project. It's a alternative-future world in which technology progressed very differently from our own, creating an interstellar retro-futuristic society experiencing a catastrophic introduction to the concept of ubiquitous computing and weaponized artificial intelligence.</p>
          <h5>Blog-based Approach</h5>
          <p>This site took a more blog-based format (the structure of which could be seen within Collection). Unfortunately, my work on this site was cut short by my college's senior design project, Endpoint. I plan on coming back eventually, as the functionality is all there.</p></div>,
        },
        {
          title: "JPMC Careers",
          tags: "Professional / Front-End",
          type: "key-web",
          image: ProjJPMCCareers,
          gif: VidJPMCCareers,
          class: "p-jpmc-careers",
          url: "https://careers.jpmorgan.com/us/en/home",
          text: <div><p>I've worked on (and still work on) many JPMC websites, but I'm most proud of the work I did on this one. Among other things, I planned out and implemented the filtering component - it does everything from multiple API calls to retrieve options and job data, to the filtering logic for each variation of the component, to smooth UI look and feel.</p></div>,
        },
        {
          title: "Unturned Stones 2018",
          tags: "Personal / Worldbuilding / Jekyll",
          type: "key-web",
          image: ProjUnturnedStones2018,
          class: "p-unts-2018",
          gif: VidUNTS,
          text: <div><p>Unturned Stones (later revamped and renamed to Morning Artifice) was my primary worldbuilding project a while ago. It was meant to be a way of introducing people to, and storing info about, the science-fiction world I created that centered around the emergence of hyper-intelligent AI in an alternative future.</p>
          <h5>Wiki-based Approach</h5>
          <p>With Unturned Stones, I tried to create a wiki-esque site to store and present this info. However, after implementing the system and beginning to populate the content, I realized that a single person cannot reasonably manage a wiki. This (as well as changes in creative vision) led to the creation of Morning Artifice.</p></div>,
        },
        {
          title: "Valentin Sigalov 2017",
          tags: "Personal / Portfolio / Front-End",
          type: "key-web",
          image: ProjVS2017,
          gif: VidVS2017,
          class: "p-vs-2017",
          url: "https://prokhorvlg.github.io/Valentin-Sigalov/",
          text: <div><p>This was my previous personal/portfolio site. It was meant to be a sleek, static site with a simple clean design. I've taken some inspiration from it for this portfolio site, clearly.</p>
            <p>If you want to go down the rabbit hole of older projects that didn't make this list, feel free head there...</p></div>,
        },
        {
          title: "Places Demo",
          tags: "Personal / Worldbuilding / D3js",
          type: "key-web",
          image: ProjPlacesDemo,
          gif: VidPlaces,
          class: "p-places-demo",
          url: "http://www.unturnedston.es/places.html",
          text: <div><p>As part of an earlier attempt to create a site for my old worldbuilding project Unturned Stones, I wanted to create a dynamic, changeable map of the setting, since it was constantly changing. The best way to do that turned out to be D3js, an awesome JavaScript library made for data visualization.</p>
          <p>You can see the result here, in the "Places Demo". Midway through the project, I moved on to a new redesign of the setting and site, and abandoned this one. Thankfully though... it's a nice demo of what D3js could be used for!</p></div>,
        },
        {
          title: "Sunset System",
          tags: "Collaborative / C# / Unity",
          type: "key-game",
          image: ProjRemnant,
          class: "p-remnant",
          text: <div><p>Sunset System is a side project I began as a spiritual successor to Endpoint. It is a 2D metroidvania-styled action platformer set in an alternative future, a retro-futuristic world in which mankind vanished leaving only their machines behind.</p>
          <h5>Roles</h5>
          <p>In this project, I will be directing, illustrating most of the art and design, and creating many of the systems.</p></div>,
        },
        {
          title: "Endpoint",
          tags: "Class Group / C# / Unity",
          type: "key-game",
          image: ProjEndpoint,
          class: "p-endpoint",
          url: "http://www.cci.drexel.edu/SeniorDesign/2019_2020/Endpoint/endpoint-index.html",
          text: <div><p>Endpoint is a 2.5d video game that I worked on as part of a team for my Senior Project for Drexel. It was my first experience with Unity. We used C#/Visual Studio to code it, Git/Github for repository and issue management, Azure DevOps for sprint tracking.</p>
          <h5>Development</h5>
          <p>I implemented most of the UI, and worked on some of the back-end systems.</p>
          <h5>Art</h5>
          <p>I also designed all of the graphic/UI elements, and drew all of the concept art for the game.</p></div>,
        },
        {
          title: "jThello",
          tags: "Collaborative / Java",
          type: "key-other",
          image: ProjJThello,
          gif: VidJThello,
          class: "p-jthello",
          text: <div><p>As part of a course on my Human-Computer Interaction track, I collaborated with another student to create jThello. jThello is a Java-based Othello board game. I designed and implemented most of the interface.</p></div>,
        },
        {
          title: "TMSBro Script",
          tags: "Personal / Python / Selenium",
          type: "key-other",
          image: ProjTMSBro,
          class: "p-tmsbro",
          text: <div><p>Before Drexel's current registration system, the process for planning and getting the courses you wanted was awful. My personal solution was to create a small, cloud-based Python script which would use Selenium to visit Drexel's Term Schedule and check if the classes I wanted were open. If it was, it would send me an email informing me.</p>
          <p>It was only useful for about 2 quarters, because Drexel soon implemented a massively improved new registration system.</p></div>,
        },
      ]
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.setPlayBack = this.setPlayBack.bind(this);
  }

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

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    // Add active class to this filter link.
    $('.projects-first').addClass('active');

    // Change state of component to reflect filter.
    this.setState({ filter: "key-web" });
  }

  openModal(e) {
    e.preventDefault();

    // Find target data.
    var target = e.target.getAttribute('data-key');
    //var found = this.state.data.find(element => element.class == target);

    // Change modal state.
    this.setState({ modalOpen: true, modalData: target });
  }

  afterOpenModal(section) {
    var target = section.state.modalData;

    // Hide all modal data.
    $('.projects-modal-item').css('display', 'none');

    // Show corresponding modal data.
    $(".projects-modal-item").filter('[data-key="' + target + '"]').css('display', 'block');
  }

  closeModal() {
    // Change modal state.
    this.setState({ modalOpen: false });
  }

  // Set playback rate of element to high on play
  setPlayBack(e) {
    if (e !== null) {
      e.target.playbackRate = 2;
    }
  }

  render() {
    // Get filter data as variable.
    const filter = this.state.filter;
    const data = this.state.data;

    // Get data filtered by the filter.
    // item: { ..., type: 'key-something' }
    const filteredData = data.filter((item) => {
      if (item.type === filter || filter === "") {
        return true;
      }
      return false;
    });

    return (
      <div className="section-all-content">
        <div className="section-content section-projects">

          <div className="section-segment segment-dev-projects">
            <div className="segment-inner">
              <div className="segment-inner-image-container">
                  <div className="segment-inner-floaty segment-inner-floaty-1"></div>
                  <div className="segment-inner-floaty segment-inner-floaty-2"></div>
                  <div className="segment-inner-floaty segment-inner-floaty-3"></div>
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

          <Modal
             isOpen={this.state.modalOpen}
             onAfterOpen={() => this.afterOpenModal(this)}
             onRequestClose={this.closeModal}
             className="Modal"
             overlayClassName="Overlay"
             closeTimeoutMS={300}
             autoFocus={false}
              >
            <div className={"modal-body " + this.state.modalData}>
              <div className="modal-body-closepad" onClick={this.closeModal}></div>
              <div className="modal-body-inner">
                <div className="modal-close">
                  <button autoFocus={true} onClick={this.closeModal}><Burger isOpen={true} /></button>
                </div>
                <div className="projects-modal">
                  {this.state.data.map((item, index) => (

                    <div key={index} data-key={item.class} className={"projects-modal-item " + item.class}>
                      <p className="modal-flavor"><span className="highlight">> DISPLAYING</span> DETAILED DATA<span className="blinkingScore">_</span></p>
                      <div className="modal-image">
                        {(() => {
                          if (item.gif) {
                            return (
                              <img src={item.gif} />
                            )
                          }
                          else if (item.video) {
                            return (
                              <video src={item.video} 
                                width="650"
                                autoPlay muted
                                onPlay={this.setPlayBack}
                              />
                            )
                          }
                          else {
                            return (
                              <img src={item.image} />
                            )
                          }
                        })()}
                      </div>
                      <h4 className="modal-title">{item.title}</h4>
                      <p className="modal-tags">{item.tags}</p>
                      {item.text}
                      {item.url ? <div class="modal-visit"><a href={item.url} target="_blank">Visit</a></div> : '' }
                    </div>

                  ))}
                </div>
              </div>
              <div className="modal-body-closepad" onClick={this.closeModal}></div>
            </div>
          </Modal>

          <div className="projects-filter-body" id="projects-modal-container">
            <div className="projects-filter-items">
              <FlipMove
                typeName={null}
                duration={200}
                staggerDelayBy={20}
                >
              {filteredData.map((item, index) => (
                <a href="#" key={item.class} data-key={item.class} className={"projects-filter-item " + item.class} onClick={(e) => this.openModal(e)}>
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
              </FlipMove>
            </div>
          </div>

          <div className="section-segment segment-art-projects">
            <div className="segment-inner">
              <div className="segment-inner-image-container">
                  <div className="segment-inner-floaty segment-inner-floaty-1"></div>
                  <div className="segment-inner-floaty segment-inner-floaty-2"></div>
                  <div className="segment-inner-floaty segment-inner-floaty-3"></div>
                  <img className="segment-inner-image" src={ProjectsArt} alt="" />
              </div>
              <div className="segment-inner-content-container">
                <h3>If you want to see my <span>art projects</span>...</h3>
                <p>Please feel free to check out my numerous art projects over on my <a href="https://www.deviantart.com/prokhorvlg" target="_blank"><i className="fab fa-deviantart" style={{marginRight: "3px"}}></i>DeviantArt</a> profile! Note that I am currently working on Remnant artwork, which is typically not posted... it may seem as though I am inactive even though I'm not.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default SectionProjects;
