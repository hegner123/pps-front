import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { projectActions } from '../_actions';
import { ActionGroup, Button, Btn, Centered ,FormSection, FormTitle, FormGroup, HelpBlock, Label, Row, Input } from './style';

class NewProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: {
                projectTitle: '',
                members: [],
                companyName: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { project } = this.state;
        this.setState({
            project: {
                ...project,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { project } = this.state;
        if (project.projectTitle && project.members) {
            this.props.newProject(project);
        }
    }

    render() {
        const { NewProject  } = this.props;
        const { project, submitted } = this.state;
        return (
                <Row>
                    <Centered>
                        <FormSection>
                            <FormTitle>New Project</FormTitle>
                            <form name="form" onSubmit={this.handleSubmit}>
                            {submitted && !project.projectTitle &&
                                        <div className="help-block">Your Project needs a name.</div>
                                    }
                                <FormGroup>
                                    <Label htmlFor="projectTitle">Project Title</Label>
                                    <Input type="text" className="form-control" name="projectTitle" value={project.projectTitle} onChange={this.handleChange} />

                                </FormGroup>
                                {submitted && !project.members &&
                                        <div className="help-block">Projects need Members</div>
                                    }
                                <FormGroup>
                                    <Label htmlFor="members">Members</Label>
                                    <Input type="text" className="form-control" name="members" value={project.members} onChange={this.handleChange} />

                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="companyName">Company</Label>
                                    <Input type="text" className="form-control" name="companyName" value={project.companyName} onChange={this.handleChange} />

                                </FormGroup>

                                <ActionGroup>
                                    <Button>Create</Button>
                                    <Btn to="/dashboard">Cancel</Btn>
                                </ActionGroup>
                            </form>
                        </FormSection>
                    </Centered>
                </Row>
        );
    }
}

function mapState(state) {
    const { projects } = state;
    return { projects };
}

const actionCreators = {
    newProject: projectActions.newProject
}

const connectedNewProject = connect(mapState, actionCreators)(NewProject);
export { connectedNewProject as NewProject };