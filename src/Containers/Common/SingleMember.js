import React, { Component } from 'react';


class SingleMember extends Component {
    render() { 
        return ( 
        <div className="col-md-3 agile_team_grid team-left-w3l-agile">
            <div className="agile_team_grid_main">
                <img src={this.props.image} alt={this.props.name} className="img-responsive" />
                <div className="p-mask">
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li> <a href="#"><i className="fa fa-twitter"></i></a> </li>

                        <li><a href="#"><i className="fa fa-dribbble"></i></a> </li>

                    </ul>
                </div>
            </div>
            <div className="agile_team_grid1">
                <h3>{this.props.name}</h3>
                <p>{this.props.title}</p>
            </div>
        </div>
        );
    }
}

export default SingleMember;