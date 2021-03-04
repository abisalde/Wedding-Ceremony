import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';



class Footer extends Component {
    constructor (props) {
        super (props);

        this.state = {
            scrollToTop: function () {
                scroll.scrollToTop();
            },
        }
    }
    
    render() { 
        return ( 
        <div className="footer-w3layouts">
            <div className="container">
                <div className="agile-logo">
                    <Link activeClass="active" spy={true} smooth={true} duration={2000} to="home">WC</Link>
                </div>
                <div className="agile-copy">
                    <p>© 2020 Wedding Ceremony. All rights reserved | Recreated with React by <a href="https://twitter.com/abisalde" target="_blank" rel="noreferrer">Abisalde</a></p>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="thim-click-to-bottom">
                <Link onClick={scrollToTop} activeClass="active" spy={true} smooth={true} duration={2500} to="home" className="scroll">
                    <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
                </Link>
            </div>
        </div>
        );
    }
}

export default Footer;

