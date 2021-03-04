import React, { Component } from 'react';
import { Link } from 'react-scroll';


class Counter extends Component {
    render() { 
        return ( 
        <div className="agileinfo_counter_section">
            <div className="container">
                <h3>Wedding Ceremony</h3>
                <p className="sub_para two">consectetur adipiscing elit, sed do eiusmod</p>
                <h5><Link activeClass="active" spy={true} smooth={true} duration={600} offset={-70} to="contact" className="view rew3 scroll"><span className="glyphicon glyphicon-hand-right" aria-hidden="true"></span>Contact Us</Link></h5>
            </div>
        </div>
        );
    }
}

export default Counter;