import React, { Component } from 'react';
import SectionAboutMe from '../../components/Sections/SectionAboutMe.js';

// Section container
// This is the template for an individual section within.
class Section extends Component {

  render() {
    // Grab title from properties.
    const title = this.props.title;
    // Based on title, display a different set of content.
    const content = this.renderSwitch(title);

    return (
      <div className="section">
        {/* SECTION CONTENT Component */}
      </div>
    );
  }

  renderSwitch(title) {
    switch (title) {
      case 'aboutme':
        return <SectionAboutMe />;
      case 'skills':
        return <SectionAboutMe />;
      case 'experience':
        return <SectionAboutMe />;
      case 'projects':
        return <SectionAboutMe />;
      case 'contact':
        return <SectionAboutMe />;
    }
  }

}

export default Section;