import React from 'react';
import { connect } from 'react-redux';
import { Sidebar} from '../_components/dashboard/d_sidebar';
import { Recent } from '../_components/dashboard/d_recent';
import { Projects } from '../_components/dashboard/d_projects';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
    <div className="dashboard">
        <Sidebar/>
        <div className="projects">
            <div className="search">
            <input type="text" name="search" id="search" placeholder='Search'/>
            </div>
            
            <Recent/>
            <Projects/>
        </div>
    </div>
        );
    }
}



const connectedDashboard = connect()(Dashboard);
export { connectedDashboard as Dashboard };