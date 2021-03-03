import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() { 
        return ( 
        <div className="footer-w3layouts">
            <div className="container">
                <div className="agile-logo">
                    <Link to="/">WC</Link>
                </div>
                <div className="agile-copy">
                    <p>© 2020 Wedding Ceremony. All rights reserved | Recreated with React by <a href="https://twitter.com/abisalde" target="_blank">Abisalde</a></p>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="thim-click-to-bottom">
                <Link to="/" className="scroll">
                    <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
                </Link>
            </div>
        </div>
        );
    }
}

export default Footer;