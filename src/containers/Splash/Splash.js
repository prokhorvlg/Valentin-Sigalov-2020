import React from 'react';
import $ from "jquery";
import "jquery.scrollto/jquery.scrollTo.js";

// Images
import ResumePic from "../../images/2020PS-resume-pic.png";

// Components
import NavButton from "../../components/NavButton/NavButton.js";

const SLIDE_ANIM_WAIT = [2000, 9000];



// Splash container
// This is the full-page view that the user sees when the first open the page, which turns into a sidebar upon scroll.
class Splash extends React.Component {

  constructor(props) {
    super(props);
    // Initialize the ScrollAnimation object reference.
    this.scrollAnimation = React.createRef();
  }

  // On component load...
  componentDidMount() {
    
    // BG SQUARES ANIMATION

    // Find bg squares.
    var bgSquares = $('.splash-anim-bgSquare');

    // For each bg square...
    $.each(bgSquares, function() {
      var thisSquare = $(this);

      // Randomize bg square positions.
      var dimension = thisSquare.attr("height");
      var constraints = thisSquare.data("constraints");
      var slideScale = thisSquare.data("slide-scale");

      var x = -dimension/2 + randomChoose(randomNumber(-constraints[0], -constraints[1]), randomNumber(constraints[0], constraints[1]));

      var yConstraints = [10, 30];
      var y = -dimension/2 + randomChoose(randomNumber(-constraints[2], -constraints[3]), randomNumber(constraints[2], constraints[3]));

      thisSquare.attr("transform", "translate(" + x + ", " + y + ") scale(1)");

      setTimeout(function(){
        // Then, run the scale animation.
        //animateBGSquareScale(thisSquare, x, y, slideScale);

        animateBGSquareScale(thisSquare, x, y, slideScale);
      }, randomNumber(0.1, SLIDE_ANIM_WAIT[0]));
      
    });

    // NAV HOVER/FOCUS

    // Grab elements with changing colors.
    var scrollIcon = $(".splash-lower-scrollicon");
    var selectPara = $(".splash-right-para-select");
    var splashNavButtons = $('.splash-nav-button');

    // On hover/focus...
    splashNavButtons.bind("mouseenter focus", 
      function(e) { 
        // Grab data from this element.
        var topic = $(this).data("topic");

        // Apply appropriate class to changing color elements.
        scrollIcon.addClass("splash-nav-" + topic);
        selectPara.addClass("splash-nav-" + topic);

        // Apply fade class to all nav elements that are not this.
        splashNavButtons.not($(this)).addClass("fade-away");
      }); 

    splashNavButtons.bind("mouseleave focusout", 
      function(e) { 
        // Grab data from this element.
        var topic = $(this).data("topic");

        // Remove appropriate class to changing color elements.
        scrollIcon.removeClass("splash-nav-" + topic);
        selectPara.removeClass("splash-nav-" + topic);

        // Remove fade class from all nav elements.
        splashNavButtons.removeClass("fade-away");
      });

      // SCROLL WIPE (splash to sidebar on scrolldown, and vice versa)
      // Initialize in the ScrollAnimation component.
      this.scrollAnimation.current.initScrollAnim();
    
  }  

  render() {
    return (
      <div className="splash">
        <ScrollAnimation ref={this.scrollAnimation} />
        <div className="splash-container">
          <div className="splash-upper">
            <div className="splash-left-profile">

              <div className="splash-left-upper-container">
                <div className="splash-left-upper">
                  <div className="splash-profile-picture">

                    <img src={ResumePic} alt="Valentin Sigalov "/>

                    {/* PROFILE PIC ANIMS: background squares */}

                    <svg className="splash-profile-anim splash-anim-bgSquares" width="850" height="450" style={{opacity: 0.3}}>

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

                    <svg className="splash-profile-anim" width="350" height="350">
                      <circle cx="50%" cy="50%" r="111" fill="#00000080" stroke="none"/>
                    </svg>

                    <svg className="splash-profile-anim" width="350" height="350">
                      <circle cx="50%" cy="50%" r="113" fill="none" stroke="#ff9b0b" strokeWidth="8"/>
                    </svg>

                    <svg className="splash-profile-anim" width="350" height="350">
                      <circle className="splash-anim-funkyCircle" cx="50%" cy="50%" r="119" fill="none" stroke="#ff9b0b" strokeWidth="8" strokeDasharray="1065" strokeDashoffset="980"/>

                      <circle className="splash-anim-funkyCircle2" cx="50%" cy="50%" r="119" fill="none" stroke="#ff9b0b" strokeWidth="8" strokeDasharray="789" strokeDashoffset="600"/>

                      <circle className="splash-anim-funkyCircle3" cx="50%" cy="50%" r="119" fill="none" stroke="#ff9b0b" strokeWidth="8" strokeDasharray="990" strokeDashoffset="730"/>
                    </svg>

                    </div>




                    
                  </div>
                  <div className="splash-name">
                    <h1>Valentin Sigalov</h1>
                  </div>
                  <div className="splash-tagline">
                    <span>Full-Stack Web Developer</span>
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
                    <NavButton topic={"about me"} id={"aboutme"} />
                    <NavButton topic={"skills"} id={"skills"} />
                    <NavButton topic={"experience"} id={"experience"} />
                    <NavButton topic={"projects"} id={"projects"} />
                    <NavButton topic={"contact"} id={"contact"} />
                  </ul>
              </nav>

            </div>
            <div className="splash-right-menu">
              <div className="splash-right-upper">
                <div className="splash-right-para">
                  <p className="splash-right-para-welcome">Welcome, @USER_guest!</p>
                  <p className="splash-right-para-select">PLEASE SELECT a SECTION<span className="blinkingScore">_</span></p>
                </div>
                <nav className="splash-right-nav">
                  <ul>
                    <NavButton topic={"about me"} id={"aboutme"} />
                    <NavButton topic={"skills"} id={"skills"} />
                    <NavButton topic={"experience"} id={"experience"} />
                    <NavButton topic={"projects"} id={"projects"} />
                    <NavButton topic={"contact"} id={"contact"} />
                  </ul>
                </nav>
              </div>
              <div className="splash-right-lower">
                <div className="splash-lower-right-terminal"></div>
              </div>
            </div>
          </div>
          <div className="splash-lower-terminal-container">
            <div className="splash-lower-left-terminal">
              <div className="splash-lower-left-terminal-blinker"></div>
              <span>> PERSONNEL FILE [VALENTIN_SIGALOV] ... LOADED.</span>
            </div>
            <div className="splash-lower-right-terminal">
            <span>> NCORP personal TERMINAL_OS V 2.2</span>
<svg
 width="23px" height="18px">
<path fillRule="evenodd"  fill="rgb(255, 155, 11)"
 d="M0.000,12.000 L0.000,-0.000 L23.000,-0.000 L23.000,12.000 L0.000,12.000 ZM14.154,1.500 L1.769,1.500 L1.769,10.500 L14.154,10.500 L14.154,1.500 ZM21.231,18.000 L1.769,18.000 L1.769,13.500 L21.231,13.500 L21.231,18.000 ZM15.000,15.000 C14.448,15.000 14.000,15.448 14.000,16.000 C14.000,16.552 14.448,17.000 15.000,17.000 C15.552,17.000 16.000,16.552 16.000,16.000 C16.000,15.448 15.552,15.000 15.000,15.000 ZM18.000,15.000 C17.448,15.000 17.000,15.448 17.000,16.000 C17.000,16.552 17.448,17.000 18.000,17.000 C18.552,17.000 19.000,16.552 19.000,16.000 C19.000,15.448 18.552,15.000 18.000,15.000 Z"/>
</svg></div>
          </div>
          <div className="splash-lower-bar"></div>
        </div>
      </div>
    );
  }
}

class ScrollAnimation extends React.Component {

  constructor(props) {
    super(props);

    // Scrolled up/down animation timeouts
    // Used to clear animations in progress.
    this.stage1T = setTimeout(function(){},0);
    this.stage2T = setTimeout(function(){},0);
    this.stage3T = setTimeout(function(){},0);
    this.stage4T = setTimeout(function(){},0);
    this.stage5T = setTimeout(function(){},0);
    this.stage6T = setTimeout(function(){},0);

    // Scroll flags (used to create a smooth scroll effect) 
    this.scrollListener = true;

    this.scrollCalledDown = false;
    this.scrollCalledUp = false;
    this.lastScrollTop = 0;
    
    this.scrolledLock = false;
    this.scrollLeeway = 200;
    this.scrollAnimMilliseconds = 400;
  }

  componentDidMount() {
    // Animation components
    this.splashRightUpper = $('.splash-right-upper');
    this.splashLowerScrollicon = $('.splash-lower-scrollicon');
    this.splashLowerScrolliconSVG = this.splashLowerScrollicon.find("path");

    this.splashProfilePicture = $('.splash-profile-picture');
    this.splashTagline = $('.splash-tagline');
    this.splashName = $('.splash-name');

    this.bgSquares = $('.splash-anim-bgSquares');
    this.animLines = $('.splash-anim-lines');

    this.profileImage = $('.splash-profile-picture img');
    this.frameCircles = $('.splash-anim-frameCircles');
    
  }

  // No render, as this is a function-based component.
  render(){
    return("")
  }

  // Initializes the scroll listener system.
  initScrollAnim() {
    var scrollAnimation = this;
    var resizeTimer;
    $(window).on('resize', function(e) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        scrollAnimation.checkHeight();
      }, 300);
    });

    $(window).scroll(function(event) {
      if (scrollAnimation.scrollListener) {
        if ($(window).width() > 991) {

          var st = $(this).scrollTop();
          if (st > scrollAnimation.lastScrollTop) { // if you're scrolling down...
            if (scrollAnimation.scrolledLock === false) { // if the lock hasn't been triggered...
              if ($(this).scrollTop() < ($(window).height() - scrollAnimation.scrollLeeway)){ // if you are scrolling within the header region...
                scrollAnimation.scrolledLock = true; // lock scrolling...
                setTimeout( function() { scrollAnimation.scrolledLock = false; }, scrollAnimation.scrollAnimMilliseconds); // ...until the animation is over
                $(window).scrollTo('.spacer', scrollAnimation.scrollAnimMilliseconds); // and animate the scroll
                scrollAnimation.scrolledDown();
              }
            }
          } 
          else { // and vice versa when scrolling up
            if (scrollAnimation.scrolledLock == false){
              if ($(this).scrollTop() < ($(window).height() - scrollAnimation.scrollLeeway)){
                scrollAnimation.scrolledLock = true;
                setTimeout( function() { scrollAnimation.scrolledLock = false; }, scrollAnimation.scrollAnimMilliseconds);
                $(window).scrollTo(0, scrollAnimation.scrollAnimMilliseconds);
                scrollAnimation.scrolledUp();
              }
            }
          }
           scrollAnimation.lastScrollTop = st;
       }
     }
    });
  }

  scrolledDown() {
    var scrollAnimation = this;
    console.log("scrolled down");
    console.log(scrollAnimation.splashRightUpper)

    /*clearTimeout(stage1T);
    clearTimeout(stage2T);
    clearTimeout(stage3T);
    clearTimeout(stage4T);*/

    // PHASE 1
    // Fade away nav, resize profile.

    this.stage1T = setTimeout(function(){
      // Fade out nav  
      scrollAnimation.splashRightUpper.css("transform", "translateY(-200px)");
      scrollAnimation.splashRightUpper.css("opacity", "0");
      // Fade out scroll arrow
      scrollAnimation.splashLowerScrollicon.css("opacity", "0");

      // Reconfigure profile area. 

      // Resize name
      scrollAnimation.splashName.find("h1").css("font-size", "30px");
      scrollAnimation.splashName.find("h1").css("margin-top", "30px");
      // Resize tagline
      scrollAnimation.splashTagline.find("span").css("letter-spacing", "0px");
      scrollAnimation.splashTagline.find("span").css("font-size", "0.8rem");
      scrollAnimation.splashTagline.css("padding", "6px 20px 4px 20px");

      // Remove bg squares.
      scrollAnimation.bgSquares.css("opacity", "0");
      // Animate out frame lines.
      scrollAnimation.animLines.css("transform", "rotate(30deg) scale(0.8)");
      scrollAnimation.animLines.css("opacity", "0");
      // Resize profile pic.
      scrollAnimation.profileImage.css("transform", "scale(0.8)");
      scrollAnimation.frameCircles.css("transform", "rotate(0deg) scale(0.8)");

      // Destroy terminal elements.
      $('.splash-lower-terminal-container').css("opacity", "0");
      
    }, 0);    

    // PHASE 2
    // Resize container.

    this.stage2T = setTimeout(function(){
      scrollAnimation.animLines.css("display", "none");
      scrollAnimation.bgSquares.css("display", "none");
      scrollAnimation.splashLowerScrollicon.css("display", "none");
      scrollAnimation.splashRightUpper.css("display", "none");

      $('.splash-left-profile').css('width', '100%');
      $('.splash-right-menu').css('width', '0%');

      $('.splash').css('right', 'calc(100% - 400px)');
      
    }, 300);

    // PHASE 3
    // Fade in nav.

    this.stage3T = setTimeout(function(){
      $('.splash-left-upper-container').css('flex-grow', '0.001');
      $('.splash-left-upper-container').css('margin-bottom', '1rem');
      $('.splash-left-upper').css('margin-top', '1rem');
      $('.splash-left-sidebar-nav').css("height", "60%");
      $('.splash-left-sidebar-nav').css("opacity", "1");
    }, 600);
  }

  scrolledUp() { 
    console.log("scrolled up"); 
  }

  checkHeight() {
    if (window.pageYOffset > 50){
      if (this.scrollCalledDown == false){
        this.scrollCalledDown = true;
        this.scrolledDown();
        setTimeout(function(){ this.scrollCalledDown = false; }, 400);
      }
    }
    else {
      if (this.scrollCalledUp == false){
        this.scrollCalledUp = true;
        this.scrolledUp();
        setTimeout(function(){ this.scrollCalledUp = false; }, 400);
      }
    }
  }

}



// Animates an individual background square behind the profile pic.
function animateBGSquareScale(el, x, y, slideScale) {
  var oldTransform = $(el).attr("transform");

  var newWait = randomNumber(SLIDE_ANIM_WAIT[0], SLIDE_ANIM_WAIT[1])*3;
  $(el).css("transition", newWait/1000 + "s ease-in-out");

  // Get the new transform to tween to.
  var newScale = randomNumber(1,1);
  var newScaleTransform = " scale(" + newScale + ")";

  var newTranslateTransform = "translate(" + (x-randomChoose(1,-1)*randomNumber(slideScale[0],slideScale[1])) + ", " + (y) + ")";

  var newTransform = newTranslateTransform + newScaleTransform;

  // Tween to that new scale.
  $(el).attr("transform", newTransform);

  // Wait a random amount of time before.
  setTimeout(function(){ 
    // Tweening to the original scale
    $(el).attr("transform", oldTransform);

    setTimeout(function(){ 
      // Tweening to the original scale
      animateBGSquareScale($(el), x, y, slideScale);
    }, randomNumber(SLIDE_ANIM_WAIT[0], SLIDE_ANIM_WAIT[1]));
    
  }, randomNumber(newWait, SLIDE_ANIM_WAIT[1]));
}

// Randomly returns one of the two given elements.
function randomChoose(value1, value2) {
  return Math.random() < 0.5 ? value1 : value2;
}

// Provides a random number within the range.
function randomNumber(min, max) {
  return (Math.floor(Math.random() * max) + min  );
}

export default Splash;
