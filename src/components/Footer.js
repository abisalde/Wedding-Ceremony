import React, { Component } from 'react';



class Footer extends Component {
    render() { 
        return ( 
        <div className="footer-w3layouts">
            <div className="container">
                <div className="agile-logo">
                    <a href="index.html">WC</a>
                </div>
                <div className="agile-copy">
                    <p>© 2017 Wedding Ceremony. All rights reserved | Recreated with React by <a href="#">Abisalde</a></p>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="thim-click-to-bottom">
                <a href="#home" className="scroll">
                    <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
                </a>
            </div>
        </div>
        );
    }
}

export default Footer;