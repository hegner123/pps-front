import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { DashTile, RecentDashTile } from '../d_dashTile'
import AddIcon from '../../../_assets/icons/add.svg'
import {
    DashHeader,
    DashTitle,
    ProjectSection,
    AddProject,
    Section,
} from './style'

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
    const [isReady, setIsReady] = useState(false)

    function handleIsReady() {
        setIsReady(true)
    }

    useEffect(() => {
        handleIsReady()
    }, [])
    return (
        <Section>
            <DashHeader>
                <DashTitle>Projects</DashTitle>
                <Link to="/new-project">
                    <AddProject>
                        <AddIcon css="fill:var(--text-color);" />
                    </AddProject>
                </Link>
            </DashHeader>
            <ProjectSection>
                {isReady &&
                    props.projects.map((entry, i) => (
                        <DashTile
                            data={entry.projectTitle}
                            slug={entry.projectSlug}
                            id={entry._id}
                            key={i}
                        />
                    ))}
            </ProjectSection>
        </Section>
    )
}

function mapState(state) {
    const { authentication, recent } = state
    return { authentication, recent }
}

const connectedRecentProjects = connect(mapState)(RecentProjects)
export { connectedRecentProjects as RecentProjects }

const connectedUserProjects = connect(mapState)(UserProjects)
export { connectedUserProjects as UserProjects }
