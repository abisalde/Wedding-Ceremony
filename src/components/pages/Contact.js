import React, { Component } from 'react';
import LocationCard from '../../Containers/Common/LocationCard';
import OurLocation from '../../Containers/Common/OurLocation';






const Location = [
    {Location: 'New Jersey'},
    {Location: 'Canada'},
    {Location: 'UK'},
]

const LocationDetails = [
    {mapaddress: '25095 Blue Ravine Rd, Folsom, CA 95630, USA', mobilenumber: '032 625 4592', email: 'info@example.com', mapinfo: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859251.8642025779!2d-76.08274894689792!3d40.06224332601239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb959e00409f%3A0x2cd27b07f83f6d8d!2sNew+Jersey%2C+USA!5e0!3m2!1sen!2sin!4v1474436926209'},
    {mapaddress: '123 San Sebastian, New York City USA.', mobilenumber: '333 222 3333', email: 'info@example.com', mapinfo: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9503398796587!2d-73.9940307!3d40.719109700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27e2f24131%3A0x64ffc98d24069f02!2sCANADA!5e0!3m2!1sen!2sin!4v1441710758555'},
    {mapaddress: '8921 California Long Beach PO Box 8921', mobilenumber: '012 345 6789', email: 'info@example.com', mapinfo: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26370863.006641828!2d-113.70834778640587!3d36.212776709411365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sin!4v1497420724957'}
]




class Contact extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="contact-w3l" id="contact">
            <h3 className="wthree_title_agile"><span>C</span>ontact</h3>
            <div className="container">
                <div className="col-md-6 contact-agileits-w3layouts">
                    <div id="horizontalTab">
                        <ul className="resp-tabs-list">
                            {Location.map((l, i) => {
                                return (
                                    <OurLocation
                                        {...l}
                                        key={i}
                                    />
                                )
                            })}
                        </ul>
                        <div className="resp-tabs-container">
                            {LocationDetails.map((details, i) =>{
                                return (
                                    <LocationCard
                                        {...details}
                                        key={i}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 regstr-r-w3-agileits">
                    <div className="form-bg-w3ls">
                        <h3 className="subhead-agileits white-w3ls">Get in Touch</h3>
                        <form action="#" method="post">
                            <input type="text" name="Name" placeholder="Name" required="" />
                            <input type="email" name="Email" placeholder="Email" required="" />
                            <input type="text" name="Subject" placeholder="Subject" required="" />
                            <textarea name="Message" placeholder="Message" required=""></textarea>
                            <input type="submit" value="Submit" className="button-w3layouts hvr-rectangle-out" />
                        </form>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
        );
    }
}

export default Contact;