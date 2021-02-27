import React, { Component } from 'react';




class LocationCard extends Component {
    render() { 
        return (
                <div className="tab2">
                    <p className="para-agileits-w3layouts"><i className="fa fa-map-marker" aria-hidden="true"></i>{this.props.mapaddress}</p>
                    <p className="para-agileits-w3layouts"><i className="fa fa-phone" aria-hidden="true"></i>{this.props.mobilenumber}</p>
                    <p className="para-agileits-w3layouts"><i className="fa fa-envelope-o" aria-hidden="true"></i><a href={this.props.email}>{this.props.email}</a></p>
                    <div className="agileits-social">
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-rss"></i></a></li>
                            <li><a href="#"><i className="fa fa-vk"></i></a></li>
                        </ul>
                    </div>
                    <iframe src={this.props.mapinfo} allowfullscreen></iframe>
                </div>
        );
    }
}

export default LocationCard;