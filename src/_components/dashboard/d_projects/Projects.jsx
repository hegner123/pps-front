import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { DashTile, RecentDashTile } from '../d_dashTile'
import { Add } from '../../../_assets/icons'
import {
    DashHeader,
    DashTitle,
    ProjectSection,
    AddProject,
    Section,
} from './style'
import { uiActions } from '../../../_actions'

function RecentProjects(props) {
    const data = props.data

    return (
        <Section>
            <DashHeader>
                <DashTitle>Recent</DashTitle>
            </DashHeader>
            <ProjectSection>
                {data &&
                    data.map((entry, i) => (
                        <RecentDashTile
                            id={entry.recentID}
                            key={entry.recentID + i}
                        />
                    ))}
            </ProjectSection>
        </Section>
    )
}

function UserProjects(props) {
    return (
        <Section>
            <DashHeader>
                <DashTitle>Projects</DashTitle>

                <AddProject onClick={() => props.setNewProjectOpen()}>
                    <Add css="fill:var(--text-color);" />
                </AddProject>
            </DashHeader>
            <ProjectSection>
                {props.isReady &&
                    props.hasProjects !== 'unset' &&
                    props.hasProjects.map((project) => (
                        <DashTile
                            title={project.projectTitle}
                            slug={project.projectSlug}
                            id={project._id}
                            key={project._id}
                        />
                    ))}
            </ProjectSection>
        </Section>
    )
}

function mapState(state) {
    const { authentication, recent, userInterface } = state
    return { authentication, recent, userInterface }
}

const actionCreators = {
    setNewProjectOpen: uiActions.setNewProjectOpen,
}

const connectedRecentProjects = connect(mapState)(RecentProjects)
export { connectedRecentProjects as RecentProjects }

const connectedUserProjects = connect(mapState, actionCreators)(UserProjects)
export { connectedUserProjects as UserProjects }
