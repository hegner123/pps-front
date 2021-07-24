import React from "react";
import { Sidebar } from "../_components/dashboard/d_sidebar";
import { Dash } from "../_components/dashboard/d_dash";
import { DashboardPage, ProjectSection, SidebarSection } from "./style";

export function Dashboard() {
  return (
    <DashboardPage>
      <SidebarSection>
        <Sidebar />
      </SidebarSection>
      <ProjectSection>
        <Dash />
      </ProjectSection>
    </DashboardPage>
  );
}
