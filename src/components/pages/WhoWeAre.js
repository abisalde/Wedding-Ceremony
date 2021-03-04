import React, { Component } from 'react';
import OurBestInServices from '../../Containers/Common/OurBestInServices';
import SingleService from '../../Containers/Common/SingleService';
import image from '../assets/images/well.jpg';



const services = [
    {title: 'wedding management', subtitle: 'Sed ut perspiciis iste natus error sit voluptatem accusantium.', emji: 'fa-briefcase', fade: 'fadeInDown'},
    {title: 'Wedding venues', subtitle: 'Sed ut perspiciis iste natus error sit voluptatem accusantium.', emji: 'fa-map', fade: 'fadeInDown'},
    {title: 'celebrations', subtitle: 'Sed ut perspiciis iste natus error sit voluptatem accusantium.', emji: 'fa-glass', fade: 'fadeInUp'},
    {title: 'Wedding music', subtitle: 'Sed ut perspiciis iste natus error sit voluptatem accusantium.', emji: 'fa-music', fade: 'fadeInUp'},
]

const bestInService = [
    {renderedService: 'Bridal boudoir'},
    {renderedService: 'Wedding Cakes'},
    {renderedService: 'Wedding favors'},
    {renderedService: 'Guest services'},
    {renderedService: 'Hair & beauty'},
    {renderedService: 'Music'},
    {renderedService: 'Fireworks'}
]




class WhoWeAre extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="sect-main-con">
            <h3 className="wthree_title_agile"><span>W</span>ho <span>W</span>e <span>A</span>re</h3>
            <div className="w3l-mo">
                <div className="col-md-5 service-1">
                    <h4>Few Words About WC</h4>
                    <h6>WC</h6>
                    <p>adipiscing elit, sed do eiusmod tempor incididunt ut Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit labore et dolore magna aliqua</p>
                    <img src={image} alt=" " />
                    <h5><a href="#" className="view rew3" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-hand-right" aria-hidden="true"></span>Learn More</a></h5>
                </div>
                <div className="col-md-2 service-2">
                    <h4>We Best In</h4>
                        {
                            bestInService.map((best, i) => {
                                return (
                                    <OurBestInServices
                                        {...best}
                                        key={i}
                                    />
                                )
                            })
                        }
                </div>
                <div className="col-md-5 service" id="services">
                    <h4>Services</h4>
                    <div className="serve-grids-top">
                            {
                                services.map((service, i) => {
                                    return (
                                        <SingleService
                                            {...service}
                                            key={i}
                                        />
                                    )
                                })
                            }
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="clearfix"> </div>
                {/*<!-- Modal5 -- */}
                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog">
                        {/*<!-- Modal content-->*/}
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4>Wedding Ceremony</h4>
                                <img src="images/n1.jpg" alt="blog-image" />
                                <span>Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste natus error sit voluptatem , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.accusantium doloremque laudantium, totam rem aperiamconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-- //Modal5 --*/}
            </div>
        </div>
        );
    }
}

export default WhoWeAre;