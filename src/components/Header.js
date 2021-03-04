import React, { Component } from 'react';
import { Link } from 'react-scroll';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="w3l-main" id="home">
                <div className="header-w3">
                <div className="header-top-agile">
                    <div className="social-icons-agileits">
                        <ul>
                            <li><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> <a href="mailto:info@example.com">info@example.com</a></li>
                            <li><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> +234 (0) 802 616 0575</li>
                        </ul>
                    </div>
                    <div className="social">
                        <ul>
                            <li><a href="#" className="link facebook" target="_parent"><span className="fa fa-facebook-square"></span></a></li>
                            <li><a href="#" className="link twitter" target="_parent"><span className="fa fa-twitter"></span></a></li>
                            <li><a href="#" className="link google-plus" target="_parent"><span className="fa fa-google-plus-square"></span></a></li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            <div className="header-bottom-agile">
                <div className=" navigation">
                    <nav className="navbar navbar-default cl-effect-16" id="cl-effect-16">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
				    </button>
                        <div className="logo-agileinfo">
                            <h1><Link to="home">wc</Link></h1>
                        </div>

                        <div id="navbar" className="navbar-collapse navbar-right collapse hover-effect">
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="home" data-hover="Home">Home</Link></li>
                                <li><Link activeClass="active" spy={true} smooth={true} duration={700} offset={-100} to="about" data-hover="About Us" className="scroll">About Us</Link></li>
                                <li><Link activeClass="active" spy={true} smooth={true} duration={1600} to="events" data-hover="Events" className="scroll">Events</Link></li>
                                <li><Link activeClass="active" spy={true} smooth={true} duration={1700} to="gallery" data-hover="Gallery" className="scroll">Gallery</Link></li>
                                <li><Link activeClass="active" spy={true} smooth={true} duration={1800} to="team" data-hover="Planners" className="scroll">Planners</Link></li>
                                <li><Link activeClass="active" spy={true} smooth={true} duration={2500} to="contact" data-hover="Contact Us" className="scroll">Contact Us</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="w3ls_search">
                    <div className="cd-main-header">
                        <ul className="cd-header-buttons">
                            <li>
                                <a className="cd-search-trigger" href="#cd-search"> <span></span></a>
                            </li>
                        </ul>
                </div>
                    <div id="cd-search" className="cd-search">
                        <form action="#" method="post">
                            <input name="Search" type="search" placeholder="Search..." required="" />
                        </form>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
            </div>
        </div>
        );
    }
}

export default Header;