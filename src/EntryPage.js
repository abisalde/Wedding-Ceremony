import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/pages/Contact';
import EventBlog from './components/pages/EventBlog';
import OurGallery from './components/pages/OurGallery';
import OurStory from './components/pages/OurStory';
import OurTeam from './components/pages/OurTeam';
import WhoWeAre from './components/pages/WhoWeAre';
import Counter from './Containers/Counter';


class EntryPage extends Component {
    render() { 
        return (
            <div className="w3l-main">
                <Element  id="home" name="home" >
                    <Header />
                    <Hero />
                </Element>
                <Element id="#about" name="about">
                    <OurStory />
                    <WhoWeAre />
                </Element>
                <Element id="#events" name="events">
                    <EventBlog />
                </Element>
                <Element id="#gallery" name="gallery">
                    <OurGallery />
                </Element>
                <Element id="#team" name="team">
                    <OurTeam />
                    <Counter />
                </Element>
                <Element id="#contact" name="contact">
                    <Contact />
                </Element>
                <Footer />
            </div>  
        );
    }
}

export default EntryPage;
