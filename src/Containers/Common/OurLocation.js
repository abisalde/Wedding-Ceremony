import React, { Component } from 'react';


class OurLocation extends Component {
    state = {  }
    render() { 
        return ( 
            <li>
                <h6>{this.props.Location}</h6>
            </li>
        );
    }
}

export default OurLocation;