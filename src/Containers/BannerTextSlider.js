import React, {Component} from 'react';


class BannerTextSlider extends Component {
    state = {  }
    render() { 
        return ( 
            <li>
                <div class="banner-text-info">
                    <h3 class="bnr-title">{this.props.title}</h3>
                    <p>{this.props.subtitle}</p>
                </div>
            </li>
        );
    }
}

export default BannerTextSlider;