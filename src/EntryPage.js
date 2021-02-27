import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
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
                <Router>
                    <Header>
                        <Route 
                            path="/"
                        />
                    </Header>    
                        <Hero />
                    
                    <OurStory>
                        <Route
                            path="/OurStory"
                        />
                    </OurStory>
                        <WhoWeAre />
                        <EventBlog />
                        <OurGallery />
                        <OurTeam />
                        <Counter />
                        <Contact />
                        <Footer />
                </Router>
            </div>  
        );
    }
}

export default EntryPage;
