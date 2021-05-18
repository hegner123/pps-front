import React from 'react';
import { connect } from 'react-redux';
import { Notifications } from '../d_notifications'


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
    <div className="sidebar">
        <Notifications/>

    </div>
        );
    }
}



const connectedSidebar = connect()(Sidebar);
export { connectedSidebar as Sidebar };