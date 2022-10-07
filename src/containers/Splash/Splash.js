import React from 'react';
import $ from "jquery";

import "jquery.scrollto/jquery.scrollTo.js";

// Images

// Components
import NavButton from "../../components/NavButton/NavButton.js";
import SplashProfile from "../../components/SplashProfile/SplashProfile.js";

const SLIDE_ANIM_WAIT = [2000, 9000];
const BREAKPOINT_MED = 1024;

// Splash container
// This is the full-page view that the user sees when the first open the page, which turns into a sidebar upon scroll.
class Splash extends React.Component {

  constructor(props) {
    super(props);
    // Initialize the ScrollAnimation object reference.
    this.ScrollSidebarAnimation = React.createRef();

    this.state = {
      width: window.innerWidth,
      currentState: "mobile",
      mobileNavOpen: false
    };

    this.desktopTimeouts = [];

    // Mobile nav timeouts and elements
    this.mobileTimeouts = {
      stage1: null,
      stage2: null,
      stage3: null,
      stage4: null,
      stage5: null,
      stage6: null
    };

    this.personRandomTexts = [
      "DRAWING A STARSHIP",
      "CONCEPTING LOGOS",
      "DEVELOPING A WEBSITE",
      "WORLDBUILDING",
      "WATCHING SCI-FI",
      "CRASHING UNITY",
    ];
    this.splashPersonTimeout = null;
  }

  handleWindowSizeChange = () => {
    // When the window resizes...

    // Set the width state.
    this.setState({ width: window.innerWidth });

    // If the width is less or equal than breakpoint, store current state in previous State and set current State to mobile.
    if (this.state.width <= BREAKPOINT_MED) {
      this.setState({ 
        currentState: "mobile"
      });
      // Make sure scroll animation is in default scrolled up state to apply nessesary mobile styles.
      this.ScrollSidebarAnimation.current.scrolledUp();
    } else {
      this.setState({ 
        currentState: "desktop"
      });
    }
  };

  initializeDesktopAnimations() {
    var splash = this;
    // BG SQUARES ANIMATION

    // Find bg squares.
    var bgSquares = $('.splash-anim-bgSquare');

    // For each bg square...
    for (var i = 0; i < this.desktopTimeouts.length; i++) {
      clearTimeout(this.desktopTimeouts[i]);
    }
    $.each(bgSquares, function() {
      var thisSquare = $(this);

      // Randomize bg square positions.
      var dimension = thisSquare.attr("height");
      var constraints = thisSquare.data("constraints");
      var slideScale = thisSquare.data("slide-scale");

      var x = -dimension / 2 + randomChoose(randomNumber(-constraints[0], -constraints[1]), randomNumber(constraints[0], constraints[1]));
      var y = -dimension / 2 + randomChoose(randomNumber(-constraints[2], -constraints[3]), randomNumber(constraints[2], constraints[3]));

      thisSquare.attr("transform", "translate(" + x + ", " + y + ") scale(1)");

      var thisTimeout = setTimeout(function() {
        // Then, run the scale animation.
        animateBGSquareScale(thisSquare, x, y, slideScale, thisTimeout);
      }, randomNumber(0.1, SLIDE_ANIM_WAIT[0]));

      splash.desktopTimeouts.push(thisTimeout);
    });

    // NAV HOVER/FOCUS

    // Grab elements with changing colors.
    var scrollIcon = $(".splash-lower-scrollicon");
    var selectPara = $(".splash-right-para-select");
    var splashNavButtons = $('.splash-nav-button');

    // On hover/focus...
    splashNavButtons.unbind("mouseenter focus");
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

    splashNavButtons.unbind("mouseleave focusout");
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
    this.ScrollSidebarAnimation.current.killScrollAnim();
    this.ScrollSidebarAnimation.current.initScrollAnim();
  }

  initializeMobileAnimations() {
  }

  // On component mount...
  componentDidMount() {
    // Add a resize event listener to handle resizing events.
    window.addEventListener('resize', this.handleWindowSizeChange);
    this.splashRightUpper = $('.splash-right-upper');
    this.handleWindowSizeChange();
    this.initializeDesktopAnimations();
    this.initializeMobileAnimations();

    // jQuery - find all relevant elements for mobile nav animation.
    this.splashRightPara = $('.splash-right-para');
    this.splashRightUpper = $('.splash-right-upper');
    this.splashRightNavEls = $('.splash-right-nav li.splash-right-nav-element');

    // Animate the text for the splash-person tag.
    var splashPerson = $('#splash-person');
    var splash = this;

    clearTimeout(splash.splashPersonTimeout);
    splash.textAnim = setTimeout(function() {
      animateSplashHeaderText(splashPerson, splash.personRandomTexts, splash.splashPersonTimeout);
    }, 300);
  }

  toggleMobileNav() {
    if (this.state.mobileNavOpen === false) {
      // Open the mobile nav
      this.setState({ mobileNavOpen: true });
      this.animationOpenMobileNav();
    } else {
      // Close the mobile nav
      this.setState({ mobileNavOpen: false });
      this.animationCloseMobileNav();
    }
  }

  toggleMobileNavClose() {
    // Close the mobile nav
    this.setState({ mobileNavOpen: false });
    this.animationCloseMobileNav();
  }

  animationMobileNavStopTimeouts() {
    clearTimeout(this.mobileTimeouts.stage1);
    clearTimeout(this.mobileTimeouts.stage2);
    clearTimeout(this.mobileTimeouts.stage3);
    clearTimeout(this.mobileTimeouts.stage4);
    clearTimeout(this.mobileTimeouts.stage5);
    clearTimeout(this.mobileTimeouts.stage6);
  }

  animationOpenMobileNav() {
    var splash = this;
    var animationGap = 50;

    this.animationMobileNavStopTimeouts();

    this.mobileTimeouts.stage1 = setTimeout(function() {
      // Display element.
      splash.splashRightUpper.addClass('mobile-open');
    }, 0);

    this.mobileTimeouts.stage2 = setTimeout(function() {
      // Fade in the background.
      splash.splashRightUpper.css('background-color', 'rgba(0, 0, 0, 0.98)');

      // Slide select section from top.
      splash.splashRightPara.css('transform', 'translateY(0)');
      splash.splashRightPara.css('opacity', '1');

      // Cascade first list element in.
      splash.splashRightNavEls.eq(0).css('transform', 'translateY(0)');
      splash.splashRightNavEls.eq(0).css('opacity', '1');
    }, 10);

    // Cascade fade slide list from bottom.
    this.mobileTimeouts.stage3 = setTimeout(function() {
      // Cascade first list element in.
      splash.splashRightNavEls.eq(1).css('transform', 'translateY(0)');
      splash.splashRightNavEls.eq(1).css('opacity', '1');
    }, animationGap*1);

    this.mobileTimeouts.stage4 = setTimeout(function() {
      // Cascade first list element in.
      splash.splashRightNavEls.eq(2).css('transform', 'translateY(0)');
      splash.splashRightNavEls.eq(2).css('opacity', '1');
    }, animationGap*2);

    this.mobileTimeouts.stage5 = setTimeout(function() {
      // Cascade first list element in.
      splash.splashRightNavEls.eq(3).css('transform', 'translateY(0)');
      splash.splashRightNavEls.eq(3).css('opacity', '1');
    }, animationGap*3);

    this.mobileTimeouts.stage6 = setTimeout(function() {
      // Cascade first list element in.
      splash.splashRightNavEls.eq(4).css('transform', 'translateY(0)');
      splash.splashRightNavEls.eq(4).css('opacity', '1');
      
    }, animationGap*4);
  }

  animationCloseMobileNav() {
    var splash = this;
    var animationGap = 50;

    this.animationMobileNavStopTimeouts();

    this.mobileTimeouts.stage1 = setTimeout(function() {
      // Cascade first list element in.
      splash.splashRightNavEls.eq(4).css('transform', '');
      splash.splashRightNavEls.eq(4).css('opacity', '');

      // Slide select section from top.
      splash.splashRightPara.css('transform', '');
      splash.splashRightPara.css('opacity', '');
    }, 0);

    this.mobileTimeouts.stage2 = setTimeout(function() {
      // Cascade first list element in.
      splash.splashRightNavEls.eq(3).css('transform', '');
      splash.splashRightNavEls.eq(3).css('opacity', '');
    }, animationGap*1);

    this.mobileTimeouts.stage3 = setTimeout(function() {
      // Cascade first list element in.
      splash.splashRightNavEls.eq(2).css('transform', '');
      splash.splashRightNavEls.eq(2).css('opacity', '');
    }, animationGap*2);

    // Cascade fade slide list from bottom.
    this.mobileTimeouts.stage4 = setTimeout(function() {
      // Cascade first list element in.
      splash.splashRightNavEls.eq(1).css('transform', '');
      splash.splashRightNavEls.eq(1).css('opacity', '');
    }, animationGap*3);

    this.mobileTimeouts.stage5 = setTimeout(function() {
      // Fade in the background.
      splash.splashRightUpper.css('background-color', 'transparent');

      

      // Cascade first list element in.
      splash.splashRightNavEls.eq(0).css('transform', '');
      splash.splashRightNavEls.eq(0).css('opacity', '');
    }, animationGap*4);  

    this.mobileTimeouts.stage6 = setTimeout(function() {
      // Display element.
      splash.splashRightUpper.removeClass('mobile-open');
      
    }, animationGap*4+300);
  }

  scrollToTopic(topic, e) {
    e.preventDefault();
    this.ScrollSidebarAnimation.current.scrollToElement(topic);

    var splash = this;
    // Mobile animation. Have to close the nav when clicking.
    setTimeout(function() {
      splash.toggleMobileNavClose();
    }, 300);
  }

  render() {
    const currentState = this.state.currentState;

    // On mobile, renders a version of Splash separated into a block splash section and hamburger-based navigation.
    // On desktop, renders a version of Splash which is fixed and transforms into a sidebar navigation.
      return (
        <div className={
        currentState === 'mobile' ? 'splash mobile' : 'splash desktop'}>
          <ScrollSidebarAnimation ref={this.ScrollSidebarAnimation} />
          <div className="splash-container">
            <div className="splash-upper">
              <SplashProfile splash={this}/>
              
              <div className="splash-right-menu">
                <div className="splash-right-upper">
                  <div className="splash-right-para">
                    <p className="splash-right-para-welcome">Welcome, @USER_guest!</p>
                    <p className="splash-right-para-select">PLEASE SELECT a SECTION<span className="blinkingScore">_</span></p>
                  </div>
                  <nav className="splash-right-nav">
                    <ul>
                      <NavButton topic={"about me"} id={"aboutme"} splash={this} />
                      <NavButton topic={"skills"} id={"skills"} splash={this} />
                      <NavButton topic={"experience"} id={"experience"} splash={this} />
                      <NavButton topic={"projects"} id={"projects"} splash={this} />
                      <NavButton topic={"contact"} id={"contact"} splash={this} />
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
                <span id="splash-person">> CURRENT STATUS ... DEVELOPING.</span>
              </div>
              <div className="splash-lower-right-terminal">
                <span>> NCORP personal TERMINAL_OS V 2.2</span>
                <svg viewBox="0 0 23 18" width="23" height="18">
                  <path fillRule="evenodd"  fill="rgb(255, 155, 11)" d="M0.000,12.000 L0.000,-0.000 L23.000,-0.000 L23.000,12.000 L0.000,12.000 ZM14.154,1.500 L1.769,1.500 L1.769,10.500 L14.154,10.500 L14.154,1.500 ZM21.231,18.000 L1.769,18.000 L1.769,13.500 L21.231,13.500 L21.231,18.000 ZM15.000,15.000 C14.448,15.000 14.000,15.448 14.000,16.000 C14.000,16.552 14.448,17.000 15.000,17.000 C15.552,17.000 16.000,16.552 16.000,16.000 C16.000,15.448 15.552,15.000 15.000,15.000 ZM18.000,15.000 C17.448,15.000 17.000,15.448 17.000,16.000 C17.000,16.552 17.448,17.000 18.000,17.000 C18.552,17.000 19.000,16.552 19.000,16.000 C19.000,15.448 18.552,15.000 18.000,15.000 Z"/>
                </svg>
              </div>
            </div>
            <div className="splash-lower-bar"></div>
          </div>
        </div>
      );    
  }
}

class ScrollSidebarAnimation extends React.Component {

  constructor(props) {
    super(props);

    // Scrolled up/down animation timeouts
    // Used to clear animations in progress.
    this.stage1T = setTimeout(function() {}, 0);
    this.stage2T = setTimeout(function() {}, 0);
    this.stage3T = setTimeout(function() {}, 0);

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
    this.splash = $('.splash');

    this.splashRightUpper = $('.splash-right-upper');
    this.splashLowerScrollicon = $('.splash-lower-scrollicon');
    this.splashLowerScrolliconSVG = this.splashLowerScrollicon.find("path");

    this.splashProfilePicture = $('.splash-profile-picture');
    this.splashTagline = $('.splash-tagline');
    this.splashName = $('.splash-name');
    this.splashProfileDetails = $('.splash-profile-details');


    this.bgSquares = $('.splash-anim-bgSquares');
    this.animLines = $('.splash-anim-lines');

    this.profileImage = $('.splash-profile-picture img');
    this.frameCircles = $('.splash-anim-frameCircles');

    this.splashLowerTerminalContainer = $('.splash-lower-terminal-container');
    this.splashLeftProfile = $('.splash-left-profile');
    this.splashLeftUpper = $('.splash-left-upper');
    this.splashLeftLower = $('.splash-left-lower');
    this.splashLeftSidebarNav = $('.splash-left-sidebar-nav');
    this.splashLeftUpperContainer = $('.splash-left-upper-container');
    this.splashRightMenu = $('.splash-right-menu');

    this.stage1Timing = 0;
    this.stage2Timing = 200;
    this.stage3Timing = 400;
  }

  // No render, as this is a function-based component.
  render() {
    return ("")
  }

  // Initializes the scroll listener system.
  initScrollAnim() {

    var scrollAnimation = this;
    var resizeTimer;

    // Responsible for triggering the splash <-> sidebar transition
    var scrollTransitionListener = $(window).on('scroll', function(e) {
      if (scrollAnimation.scrollListener) {
        if (window.innerWidth > BREAKPOINT_MED) {

          var st = $(this).scrollTop();

          if (st > scrollAnimation.lastScrollTop) { // if you're scrolling down...
            if (scrollAnimation.scrolledLock === false) { // if the lock hasn't been triggered...
              if ($(this).scrollTop() < ($(window).height() - scrollAnimation.scrollLeeway)) { // if you are scrolling within the header region...
                scrollAnimation.scrolledLock = true; // lock scrolling...
                setTimeout(function() { scrollAnimation.scrolledLock = false; }, scrollAnimation.scrollAnimMilliseconds); // ...until the animation is over
                $(window).scrollTo('.section-aboutme', scrollAnimation.scrollAnimMilliseconds); // and animate the scroll
                scrollAnimation.scrolledDown();
              }
            }

          } else { // and vice versa when scrolling up
            if (scrollAnimation.scrolledLock == false) {
              if ($(this).scrollTop() < ($(window).height() - scrollAnimation.scrollLeeway)) {
                scrollAnimation.scrolledLock = true;
                setTimeout(function() { scrollAnimation.scrolledLock = false; }, scrollAnimation.scrollAnimMilliseconds);
                $(window).scrollTo(0, scrollAnimation.scrollAnimMilliseconds);
                scrollAnimation.scrolledUp();
              }
            }
          }
          scrollAnimation.lastScrollTop = st;
        }
      }
    });

    $(window).on('resize', function(e) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        scrollAnimation.checkHeight();
      }, 300);
    });

    $(window).resize();
  }

  killScrollAnim() {
    $(window).off('resize');
    $(window).off('scroll');
  }

  scrolledDown() {
    var scrollAnimation = this;

    // Clear current animation in progress, if any.
    clearTimeout(this.stage1T);
    clearTimeout(this.stage2T);
    clearTimeout(this.stage3T);

    // PHASE 1
    // Fade away nav, resize profile.

    this.stage1T = setTimeout(function() {
      window.requestAnimationFrame(function() {
        // Fade out nav  
        scrollAnimation.splashRightUpper.css("transform", "translateY(-200px)");
        scrollAnimation.splashRightUpper.css("opacity", "0");
        // Fade out scroll arrow
        scrollAnimation.splashLowerScrollicon.css("opacity", "0");

        // Resize tagline
        /*
        scrollAnimation.splashTagline.find("span").css("letter-spacing", "0px");
        scrollAnimation.splashTagline.find("span").css("font-size", "11px");
        scrollAnimation.splashTagline.find("span").css("line-height", "15px");
        scrollAnimation.splashTagline.css("padding", "6px 15px 4px");*/

        //scrollAnimation.splashTagline.css("transform", "scale(0.65)");

        scrollAnimation.splashProfileDetails.css("transform", "scale(0.65) translateY(0px)");

        // Remove bg squares.
        scrollAnimation.bgSquares.css("opacity", "0");
        // Animate out frame lines.
        scrollAnimation.animLines.css("transform", "rotate(30deg) scale(0.8)");
        scrollAnimation.animLines.css("opacity", "0");
        // Resize profile pic.
        scrollAnimation.profileImage.css("transform", "scale(0.8)");
        scrollAnimation.frameCircles.css("transform", "rotate(0deg) scale(0.8)");

        // Destroy terminal elements.
        scrollAnimation.splashLowerTerminalContainer.css("opacity", "0");
      });
    }, this.stage1Timing);

    // PHASE 2
    // Resize container.

    this.stage2T = setTimeout(function() {
      window.requestAnimationFrame(function() {
        // Hide profile area background elements.
        scrollAnimation.animLines.css("visibility", "hidden");
        scrollAnimation.splashRightUpper.css("visibility", "hidden");
        scrollAnimation.bgSquares.css("visibility", "hidden");

        scrollAnimation.splashLeftUpperContainer.css('background-color', 'rgba(255, 155, 11, 0.06)');

        // Resize container.
        scrollAnimation.splashLeftProfile.css('width', '100%');
        scrollAnimation.splashLeftProfile.css('background-color', 'rgba(255, 155, 11, 0.00)');
        scrollAnimation.splashRightMenu.css('width', '0%');
        scrollAnimation.splash.css('right', 'calc(100% - 350px)');
      });
    }, this.stage2Timing);

    // PHASE 3
    // Fade in nav.

    this.stage3T = setTimeout(function() {
      window.requestAnimationFrame(function() {
        // Resize the profile area's height dimensions
        scrollAnimation.splashLeftUpperContainer.css('flex-grow', '0.001');

        // Add in the left sidebar nav
        scrollAnimation.splashLeftSidebarNav.css("opacity", "1");
        scrollAnimation.splashLeftSidebarNav.css("visibility", "visible");

        clearTimeout(scrollAnimation.stage1T);
        clearTimeout(scrollAnimation.stage2T);
        clearTimeout(scrollAnimation.stage3T);
      });
    }, this.stage3Timing);
  }

  scrolledUp() {
    var scrollAnimation = this;

    // Clear current animation in progress, if any.
    clearTimeout(this.stage1T);
    clearTimeout(this.stage2T);
    clearTimeout(this.stage3T);

    // PHASE 3
    // Fade out sidebar nav.

    this.stage1T = setTimeout(function() {
      window.requestAnimationFrame(function() {
        // Resize the profile area's height dimensions
        scrollAnimation.splashLeftUpperContainer.css('flex-grow', '');
        scrollAnimation.splashLeftUpperContainer.css('background-color', '');
        scrollAnimation.splashLeftUpper.css('margin-top', '');
        // Add in the left sidebar nav
        scrollAnimation.splashLeftSidebarNav.css("opacity", "");
        scrollAnimation.splashLeftSidebarNav.css("visibility", "");
      });
    }, this.stage1Timing);

    // PHASE 2
    // Resize container back to large.

    this.stage2T = setTimeout(function() {
      window.requestAnimationFrame(function() {
        scrollAnimation.splashLeftUpperContainer.css('padding-bottom', '');
        scrollAnimation.splashLeftUpperContainer.css('padding-top', '');

        scrollAnimation.animLines.css("visibility", "");
        scrollAnimation.splashRightUpper.css("visibility", "");
        scrollAnimation.bgSquares.css("visibility", "");

        // Resize container.
        scrollAnimation.splashLeftProfile.css('width', '');
        scrollAnimation.splashLeftProfile.css('background-color', '');
        scrollAnimation.splashRightMenu.css('width', '');
        scrollAnimation.splash.css('right', '');

        scrollAnimation.splashLeftLower.css('margin-bottom', '');
      });
    }, this.stage2Timing);

    // PHASE 1
    // Fade in splash nav, resize profile to splash size.

    this.stage3T = setTimeout(function() {
      window.requestAnimationFrame(function() {
        // Fade out nav  
        scrollAnimation.splashRightUpper.css("transform", "");
        scrollAnimation.splashRightUpper.css("opacity", "");
        // Fade out scroll arrow
        scrollAnimation.splashLowerScrollicon.css("opacity", "");
        scrollAnimation.splashLowerScrollicon.css("height", "");

        scrollAnimation.splashProfileDetails.css("transform", "");

        // Reconfigure profile area. 

        // Resize name
        scrollAnimation.splashName.find("h1").css("font-size", "");
        scrollAnimation.splashName.find("h1").css("margin-top", "");
        // Resize tagline
        scrollAnimation.splashTagline.find("span").css("letter-spacing", "");
        scrollAnimation.splashTagline.find("span").css("font-size", "");
        scrollAnimation.splashTagline.find("span").css("line-height", "");
        scrollAnimation.splashTagline.css("padding", "");

        // Remove bg squares.
        scrollAnimation.bgSquares.css("opacity", "");
        // Animate out frame lines.
        scrollAnimation.animLines.css("transform", "");
        scrollAnimation.animLines.css("opacity", "");
        // Resize profile pic.
        scrollAnimation.profileImage.css("transform", "");
        scrollAnimation.frameCircles.css("transform", "");

        // Destroy terminal elements.
        scrollAnimation.splashLowerTerminalContainer.css("opacity", "");

        clearTimeout(scrollAnimation.stage1T);
        clearTimeout(scrollAnimation.stage2T);
        clearTimeout(scrollAnimation.stage3T);
      });
    }, this.stage3Timing);
  }

  // Checks the scroll height of the document, and runs animation if nessesary.
  checkHeight() {
    var scrollAnimation = this;
    // If this is desktop...
    if (window.innerWidth > BREAKPOINT_MED) {
      // If the window is scrolled down...
      if ($(window).scrollTop() > 50) {
        if (scrollAnimation.scrollCalledDown === false) {
          scrollAnimation.scrollCalledDown = true;
          scrollAnimation.scrolledDown();
          setTimeout(function() { scrollAnimation.scrollCalledDown = false; }, 400);
        }
      } else {
        if (scrollAnimation.scrollCalledUp === false) {
          scrollAnimation.scrollCalledUp = true;
          scrollAnimation.scrolledUp();
          setTimeout(function() { scrollAnimation.scrollCalledUp = false; }, 400);
        }
      }
    }
  }

  scrollToElement(targetElement) {
    var scrollAnimation = this;
    scrollAnimation.scrollListener = false;
    setTimeout( function(){ scrollAnimation.scrollListener = true; scrollAnimation.checkHeight(); }, 300);

    // If this is desktop...
    if (window.innerWidth > BREAKPOINT_MED) {
      $(window).scrollTo('#' + targetElement, scrollAnimation.scrollAnimMilliseconds);
    } else {
      $(window).scrollTo('#' + targetElement, scrollAnimation.scrollAnimMilliseconds, {offset: function() { return {top:-15}; }});
    }
    scrollAnimation.checkHeight();
    
    $(window).blur();
  }
}

// Animates an individual background square behind the profile pic.
function animateBGSquareScale(el, x, y, slideScale, thisTimeout) {
  var oldTransform = $(el).attr("transform");

  var newWait = randomNumber(SLIDE_ANIM_WAIT[0], SLIDE_ANIM_WAIT[1]) * 3;
  $(el).css("transition", newWait / 1000 + "s ease-in-out");

  // Get the new transform to tween to.
  var newScale = randomNumber(1, 1);
  var newScaleTransform = " scale(" + newScale + ")";

  var newTranslateTransform = "translate(" + (x - randomChoose(1, -1) * randomNumber(slideScale[0], slideScale[1])) + ", " + (y) + ")";

  var newTransform = newTranslateTransform + newScaleTransform;

  // Tween to that new scale.
  $(el).attr("transform", newTransform);

  // Wait a random amount of time before.
  thisTimeout = setTimeout(function() {
    // Tweening to the original scale
    $(el).attr("transform", oldTransform);

    thisTimeout = setTimeout(function() {
      // Tweening to the original scale
      animateBGSquareScale($(el), x, y, slideScale, thisTimeout);
    }, randomNumber(SLIDE_ANIM_WAIT[0], SLIDE_ANIM_WAIT[1]));

  }, randomNumber(newWait, SLIDE_ANIM_WAIT[1]));
}

// Randomly returns one of the two given elements.
function randomChoose(value1, value2) {
  return Math.random() < 0.5 ? value1 : value2;
}

// Provides a random number within the range.
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animateSplashHeaderText(el, arr, timeout) {
  
  var randomText = arr[randomNumber(0, arr.length - 1)];
  var content = "> CURRENT STATUS ... " + randomText + ".";
  el.html(content);

  timeout = setTimeout(function() {
    animateSplashHeaderText(el, arr, timeout);
  }, randomNumber(800,1400));
}

export default Splash;