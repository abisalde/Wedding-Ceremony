import React, { Component } from 'react'
import SingleEventBlog from '../../Containers/Common/SingleEventBlog';



//IMAGE IMPORTS
import img1 from '../assets/images/n1.jpg';
import img2 from '../assets/images/n2.jpg';
import img3 from '../assets/images/n3.jpg';



const EventsBlogs = [
    {heading: 'Aenean id lorem efficitur, porttitor eros dapibus', paragraph: 'Phasellus vestibulum velit sed nisi ultricies scelerisque. Vivamus ligula mauris, euismod in dictum id, tempus ac odio. Etiam tristique felis eros, tincidunt interdum elit gravida et', date:' June 12, 2017', image: img1, displayUp: true, displayDown: false},
    {heading: 'Aenean id lorem efficitur, porttitor eros dapibus', paragraph: 'Phasellus vestibulum velit sed nisi ultricies scelerisque. Vivamus ligula mauris, euismod in dictum id, tempus ac odio. Etiam tristique felis eros, tincidunt interdum elit gravida et', date:' June 13, 2017', image: img2, displayUp: false, displayDown: true},
    {heading: 'Aenean id lorem efficitur, porttitor eros dapibus', paragraph: 'Phasellus vestibulum velit sed nisi ultricies scelerisque. Vivamus ligula mauris, euismod in dictum id, tempus ac odio. Etiam tristique felis eros, tincidunt interdum elit gravida et', date:' July 14, 2017', image: img3, displayUp: true, displayDown: false},
]

class EventBlog extends Component {
    render() { 
        return ( 
            <div>
                <div className="news">
                    <div className="container">
                        <h3 className="wthree_title_agile"><span>L</span>atest <span>E</span>vents</h3>
                        <div className="wthree-news-grids">
                            {EventsBlogs.map((events, i) => {
                                return (
                                <SingleEventBlog
                                    {...events}
                                    keys ={i}
                                />
                                );
                            })   
                            }
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>


                
                <div className="modal fade" id="myModal1" tabindex="-1" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4>Latest Event</h4>
                                <img src="images/n1.jpg" alt="blog-image" />
                                <span>Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste natus error sit voluptatem , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.accusantium doloremque laudantium, totam rem aperiamconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="myModal2" tabindex="-1" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4>Latest Event</h4>
                                <img src="images/n2.jpg" alt="blog-image" />
                                <span>Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste natus error sit voluptatem , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.accusantium doloremque laudantium, totam rem aperiamconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="myModal3" tabindex="-1" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4>Latest Event</h4>
                                <img src="images/n3.jpg" alt="blog-image" />
                                <span>Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste natus error sit voluptatem , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.accusantium doloremque laudantium, totam rem aperiamconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventBlog;