import React from "react";
import { connect } from "react-redux";
import { Notifications } from "../d_notifications";
import { SidebarCol } from "./style";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SidebarCol></SidebarCol>;
  }
}

const connectedSidebar = connect()(Sidebar);
export { connectedSidebar as Sidebar };
