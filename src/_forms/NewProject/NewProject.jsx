import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect, store, useSelector } from 'react-redux'
import { projectActions, uiActions } from '../../_actions'
import {
    ActionGroup,
    Button,
    Btn,
    Centered,
    FormSection,
    FormTitle,
    FormGroup,
    HelpBlock,
    Label,
    Row,
    Input,
} from './style'

function NewProject(props) {
    const [projectTitle, setProjectTitle] = useState('')
    const [projectSlug, setProjectSlug] = useState('')
    const [companyName, setCompanyName] = useState('')
    const user = useSelector((state) => state.authentication.user)

    function handleChange(event) {
        const { name, value } = event.target
        switch (name) {
            case 'projectTitle': {
                return setProjectTitle(value)
            }
            case 'companyName': {
                return setCompanyName(value)
            }
            default:
                return ''
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        const members = {
            id: user._id,
            userName: user.userName,
        }
        let project = {
            projectTitle: projectTitle,
            projectSlug: projectTitle.trim().toLowerCase().replace(/\s/g, '-'),
            members: members,
        }
        if (projectTitle) {
            props.createProject(project)
            props.setNewProjectClose()
        }
    }

    return (
        <Row>
            <Centered>
                <FormSection>
                    <FormTitle>New Project</FormTitle>
                    <form name="form" onSubmit={handleSubmit}>
                        {/* {!projectTitle &&
                                            <div className="help-block">Your Project needs a name.</div>
                                        } */}
                        <FormGroup>
                            <Label htmlFor="projectTitle">Project Title</Label>
                            <Input
                                type="text"
                                className="form-control"
                                name="projectTitle"
                                value={projectTitle}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        {/* {!members &&
                                        <div className="help-block">Projects need Members</div>
                                    } */}
                        <FormGroup>
                            <Label htmlFor="companyName">Company</Label>
                            <Input
                                type="text"
                                className="form-control"
                                name="companyName"
                                value={companyName}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <ActionGroup>
                            <Button>Create</Button>
                            <Btn
                                type="button"
                                onClick={() => props.setNewProjectClose()}
                            >
                                Cancel
                            </Btn>
                        </ActionGroup>
                    </form>
                </FormSection>
            </Centered>
        </Row>
    )
}

function mapState(state) {
    const { projects } = state
    return { projects }
}

const actionCreators = {
    createProject: projectActions.createProject,
    setNewProjectClose: uiActions.setNewProjectClose,
}

const connectedNewProject = connect(mapState, actionCreators)(NewProject)
export { connectedNewProject as NewProject }
