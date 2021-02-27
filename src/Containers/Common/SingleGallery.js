import React, { Component } from 'react';


class SingleGallery extends Component {
    render() { 
        return ( 
            <div className="col-sm-3 col-xs-4 gallery-grids">
                <div className="w3ls-hover">
                    <a href={this.props.image} data-lightbox="example-set" data-title="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
                    <img src={this.props.image} className="img-responsive zoom-img" alt={this.props.title} />
                    <div className="view-caption">
                        <h5>{this.props.title}</h5>
                        <span className="fa fa-heart"></span>
                    </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default SingleGallery;