import React, { Component } from 'react';

class SingleEventBlog extends Component {
    render() { 
        return ( 
            
        <div className="col-md-4 agile-news-left">
            {this.props.displayUp &&
                <img src={this.props.image} alt={this.props.heading} />
            }
            <div className="agile-news-right">
                <div className="date-grid">
                    <div className="time">
                        <p><i className="fa fa-calendar" aria-hidden="true"></i>{this.props.date}</p>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="w3-agile-news-info">
                    <a href="#" data-toggle="modal" data-target="#myModal1">{this.props.heading}</a>
                    <p>{this.props.paragraph}</p>
                </div>
                <div className="w3l-button">
                    <a href="#" data-toggle="modal" data-target="#myModal1">More</a>
                </div>
            </div>
            {this.props.displayDown &&
                <img src={this.props.image} alt={this.props.heading} />
            }
        </div>
        );
    }
}

export default SingleEventBlog;