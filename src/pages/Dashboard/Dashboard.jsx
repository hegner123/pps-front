import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Sidebar } from '../../_components/dashboard/d_sidebar'
import { Dash } from '../../_components/dashboard/d_dash'
import { NewProject } from '../../_forms/NewProject/NewProject'
import { DashboardPage, ProjectSection, SidebarSection, Modal } from './style'
import { uiActions } from '../../_actions'

function Dashboard(props) {
    return (
        <>
            <DashboardPage>
                {/* <SidebarSection>
                    <Sidebar />
                </SidebarSection> */}
                <ProjectSection>
                    <Dash />
                </ProjectSection>
            </DashboardPage>

            {props.newProjectOpen && (
                <Modal>
                    <NewProject />
                </Modal>
            )}
        </>
    )
}

function mapState(state) {
    const { userInterface } = state
    return userInterface
}

const actionCreators = {
    setNewProjectClose: uiActions.setNewProjectClose,
}

const connectDashboard = connect(mapState, actionCreators)(Dashboard)
export { connectDashboard as Dashboard }
