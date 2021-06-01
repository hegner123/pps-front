import React from 'react';
import { connect } from 'react-redux';
import { Notifications } from '../d_notifications'
import { SidebarCol} from './style';


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
    <SidebarCol>
        <Notifications/>
        <Notifications/>
        <Notifications/>
        <Notifications/>
        <Notifications/>
        <Notifications/>
        <Notifications/>
        <Notifications/>
    </SidebarCol>
        );
    }
}



const connectedSidebar = connect()(Sidebar);
export { connectedSidebar as Sidebar };