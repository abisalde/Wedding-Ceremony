import React, {Component} from 'react';
import BannerTextSlider from '../Containers/BannerTextSlider';



const BannerSliderText = [
	{title: 'Our Wedding!', subtitle: 'welcome to the best day in our lives'},
	{title: 'Happy Couple', subtitle: 'We create Your Special day'},
    {title: 'Quality Bridal', subtitle: 'Express your love in the most special way'}

]

class Hero extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="banner">
            <div data-vide-bg="video/marriage">
                <div className="center-container">
                    <div className="banner-text">
                        <div id="top" className="callbacks_container">
                            <ul className="rslides" id="slider3">
                                    {BannerSliderText.map((text, i) => {
                                        return (
                                            <BannerTextSlider
                                                {...text}
                                                key = {i}
                                            />
                                        )
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="we-po-head">
                <img src="images/m1.png" alt=" " />
            </div>
        </div>
        );
    }
}

export default Hero;