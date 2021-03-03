import React, { Component } from 'react';
import SingleMember from '../../Containers/Common/SingleMember';


import img1 from '../assets/images/t1.jpg';
import img2 from '../assets/images/t2.jpg';
import img3 from '../assets/images/t3.jpg';
import img4 from '../assets/images/t4.jpg';

const TeamMember = [
    {name: 'Kane Doe', title: 'Nam id urna ipsum', image: img1},
    {name: 'Mdaline', title: 'Nam id urna ipsum', image: img2},
    {name: 'Laura Crisp', title: 'Nam id urna ipsum', image: img3},
    {name: 'Rosy Paul', title: 'Nam id urna ipsum', image: img4}
]



class OurTeam extends Component {
    render() { 
        return (  
        <div className="team">
            <div className="container">
                <h3 className="wthree_title_agile"><span>O</span>ur <span>P</span>lanners</h3>
                <div className="agile_team_grids">
                    {TeamMember.map((team, i) => {
                        return (
                            <SingleMember
                                {...team}
                                key = {i}
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

export default OurTeam;