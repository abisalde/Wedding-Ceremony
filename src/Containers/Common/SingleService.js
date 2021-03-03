import React, { Component } from 'react';


class SingleService extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={`service-box wow ${this.props.fade}`} data-wow-duration=".8s" data-wow-delay=".3s">
                <div className="hi-icon-effect-6">
                    <a href="#set-6" className={`hi-icon fa ${this.props.emji}`}></a>
                </div>
                <div className="hi-text">
                    <h5>{this.props.title}</h5>
                    <p>{this.props.subtitle}</p>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default SingleService;
