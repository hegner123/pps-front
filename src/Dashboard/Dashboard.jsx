import React from 'react';
import { connect } from 'react-redux';
import { Sidebar} from '../_components/d_sidebar';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
    <div className="full-height">
        <Sidebar/>
    </div>
        );
    }
}



const connectedDashboard = connect()(Dashboard);
export { connectedDashboard as Dashboard };