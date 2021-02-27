import React, { Component } from 'react';
import Gallery from '../../Containers/OurStory/Gallery';
import CoupleCard from '../../Containers/OurStory/CoupleCard';

// Images Declarations
import img1 from '../assets/images/a1.png';
import img2 from '../assets/images/a2.png';
import img3 from '../assets/images/s1.jpg';
import img4 from '../assets/images/s2.jpg';
import img5 from '../assets/images/s3.jpg';
import img6 from '../assets/images/s4.jpg';
import img7 from '../assets/images/s5.jpg';
import img8 from '../assets/images/s6.jpg';
import img9 from '../assets/images/s7.jpg';
import img10 from '../assets/images/s8.jpg';
import img11 from '../assets/images/a3.png';

const CoupleC = [
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur velit ac fringilla fermentum.' , image: img2},
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur velit ac fringilla fermentum.' , image: img1}
]

const GalleryOwl = [
    {image: img3},
    {image: img4},
    {image: img10},
    {image: img9},
    {image: img6},
    {image: img5},
    {image: img7},
    {image: img8}
]


class OurStory extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="about_section">
            <div className="container">
                <h2 className="wthree_title_agile"><span>O</span>ur <span>S</span>tory</h2>
                <div className="inner_w3l_agile_grids_couple">
                    {CoupleC.map((couple, i) => {
                        return (
                            <CoupleCard
                                {...couple}
                                key={i}
                            />
                        )
                    })
                    }
                    <div className="col-md-2 team-grid">
                        <div className="info">
                            <h3>Smith</h3>
                            <div className="arrow-container animated fadeInDown">
                                <a href="#home" className="arrow-2 scroll">
                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                </a>
                                <div className="arrow-1 animated hinge infinite zoomIn"></div>
                            </div>
                            <h4>Rosee</h4>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            <div className="banner-bottom">
                <div className="inner_w3l_agile_grids">
                    <div className="sreen-gallery-cursual">
                        <div id="owl-demo" className="owl-carousel">
                            {
                                GalleryOwl.map((pics, i) => {
                                return (
                                        <Gallery
                                            {...pics}
                                            keys={i}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="w3l-poi">
                <img src={img11} alt=" " />
            </div>
        </div>
        );
    }
}

export default OurStory;