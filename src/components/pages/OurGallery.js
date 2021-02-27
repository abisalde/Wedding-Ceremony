import React, { Component } from 'react';
import SingleGallery from '../../Containers/Common/SingleGallery';


//IMAGE IMPORT
import img1 from '../assets/images/g1.jpg';
import img2 from '../assets/images/g2.jpg';
import img3 from '../assets/images/g3.jpg';
import img4 from '../assets/images/g4.jpg';
import img5 from '../assets/images/g5.jpg';
import img6 from '../assets/images/g6.jpg';
import img7 from '../assets/images/g7.jpg';
import img8 from '../assets/images/g8.jpg';

const Gallery = [
    {title: 'Wedding Ceremony', image: img1 },
    {title: 'Wedding Ceremony', image: img2 },
    {title: 'Wedding Ceremony', image: img3 },
    {title: 'Wedding Ceremony', image: img4 },
    {title: 'Wedding Ceremony', image: img5 },
    {title: 'Wedding Ceremony', image: img6 },
    {title: 'Wedding Ceremony', image: img7 },
    {title: 'Wedding Ceremony', image: img8 }
]


class OurGallery extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="gallery">
            <div className="container">
                <h3 className="wthree_title_agile"><span>O</span>ur <span>G</span>allery</h3>
                <div className="gallery-w3lsrow">
                    {Gallery.map((img, i) => {
                        return (
                            <SingleGallery
                                {...img}
                                key={i}
                            />
                        )
                    })

                    }
                    
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
        );
    }
}

export default OurGallery;