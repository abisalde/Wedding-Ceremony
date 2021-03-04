import React, {Component} from 'react';


class BannerTextSlider extends Component {
    state = {  }
    render() { 
        return ( 
            <li>
                <div className="banner-text-info">
                    <h3 className="bnr-title">{this.props.title}</h3>
                    <p>{this.props.subtitle}</p>
                </div>
            </li>
        );
    }
}

export default BannerTextSlider;