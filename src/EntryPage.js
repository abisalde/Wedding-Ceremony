import React, { Component } from 'react';
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
                <Header />
                <Hero />
                <OurStory />
                <WhoWeAre />
                <EventBlog />
                <OurGallery />
                <OurTeam />
                <Counter />
                <Contact />
                <Footer />
            </div>  
        );
    }
}

export default EntryPage;
