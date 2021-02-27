import React, { Component } from 'react';


class Gallery extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="item-owl">
                <div className="test-review">
                    <img src={this.props.image} alt="" />
                </div>
            </div>
        );
    }
}

export default Gallery;
