import React, { Component } from 'react';

class CoupleCard extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="col-md-5 team-grid">
            <div className="ih-item circle effect10 bottom_to_top">
                <div className="img"><img src={this.props.image} alt="" /></div>
            </div>
            <p>{this.props.text}</p>
            <div className="icons">
                <ul>
                    <li><a href='#'><i className="fa fa-facebook"></i></a></li>
                    <li className="team-twitter"><a href='#'><i className="fa fa-twitter"></i></a></li>
                    <li><a href='#'><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
        );
    }
}

export default CoupleCard;