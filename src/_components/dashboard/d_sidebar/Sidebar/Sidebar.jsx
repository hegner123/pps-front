import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Notifications } from "../Notifications";
import { SidebarCol } from "./style";

const Sidebar = (props) => {
  const projects = props.userData.projects;
  const [recentActivity, setRecentActivty] = useState(null);
  const [isReady, setIsReady] = useState(false);

  function handleIsReady() {
    projects.map((project) => {
      let recent = [];

      if (project.recent_activity) {
        project.recent_activity.map((noti) => {
          recent.push(noti);
        });
      }
      setRecentActivty(recent);

      setIsReady(true);
    });
  }

  useEffect(() => {
    if (props.userData.projects !== "unset") {
      handleIsReady();
    }
  }, [props.userData.projects]);

  return (
    <SidebarCol>
      {isReady &&
        recentActivity.map((activity, i) => (
          <Notifications
            user={activity.user}
            activity={activity}
            type={activity.type}
            key={i}
          />
        ))}
    </SidebarCol>
  );
};

function mapState(state) {
  const { userData } = state;
  return { userData };
}

const connectedSidebar = connect(mapState)(Sidebar);
export { connectedSidebar as Sidebar };
