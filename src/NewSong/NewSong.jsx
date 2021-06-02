import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { projectActions } from '../_actions';
import { ActionGroup, Button, Btn, Centered ,FormSection, FormTitle, FormGroup, HelpBlock, Label, Row, Input } from './style';

class NewSong extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: {
                projectTitle: '',
                projectSlug:'',
                arrangement:[],
                companyName: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddSong = this.handleAddSong.bind(this);
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
        const pro = this.state.project
        let project = {
            projectTitle:'',
            arrangement:[],
            projectSlug:'',
            references:[]
        }
        project.projectTitle = pro.projectTitle
        project.projectSlug = pro.projectTitle.trim().toLowerCase().replace(/\s/g, "-")
        project.members.push(pro.members)
        event.preventDefault();
        this.setState({ submitted: true });
        if (project.projectTitle && project.members) {
            this.props.createProject(project);
        }
    }

    handleAddSong(event){
        event.preventDefault();
        this.setState(state => {
            const list = state.project.arrangement.concat(state.value);
       
            return {
              list,
              value: '',
            };
          });
    }

    render() {
        const { createProject  } = this.props;
        const { project, submitted } = this.state;
        return (
                <Row>
                    <Centered>
                        <FormSection>
                            <FormTitle>New Song</FormTitle>
                            <form name="form" onSubmit={this.handleSubmit}>
                            {submitted && !project.projectTitle &&
                                        <div className="help-block">Your Project needs a name.</div>
                                    }
                                <FormGroup>
                                    <Label htmlFor="projectTitle">Song Title</Label>
                                    <Input type="text" className="form-control" name="projectTitle" value={project.projectTitle} onChange={this.handleChange} />

                                </FormGroup>
                                {submitted && !project.members &&
                                        <div className="help-block">Projects need Members</div>
                                    }
                                <FormGroup>
                                    <Label htmlFor="members">Arrangement</Label> <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                                    <Input type="text" className="form-control" name="members" value={project.arrangement} onChange={this.handleChange} />

                                </FormGroup>
                                {submitted && !project.members &&
                                        <div className="help-block">Projects need Members</div>
                                    }
                                <FormGroup>
                                    <Label htmlFor="members">Members</Label>
                                    <Input type="text" className="form-control" name="members" value={project.members} onChange={this.handleChange} />

                                </FormGroup>
                                {submitted && !project.members &&
                                        <div className="help-block">Projects need Members</div>
                                    }
                                <FormGroup>
                                    <Label htmlFor="members">Members</Label>
                                    <Input type="text" className="form-control" name="members" value={project.members} onChange={this.handleChange} />

                                </FormGroup>
                                {submitted && !project.members &&
                                        <div className="help-block">Projects need Members</div>
                                    }
                                <FormGroup>
                                    <Label htmlFor="members">Members</Label>
                                    <Input type="text" className="form-control" name="members" value={project.members} onChange={this.handleChange} />

                                </FormGroup>

                                <FormGroup>

                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="companyName">Company</Label>
                                    <Input type="text" className="form-control" name="companyName" value={project.companyName} onChange={this.handleChange} />

                                </FormGroup>

                                <ActionGroup>
                                    <Button>Create</Button>
                                    <Btn>
                                    <Link to="/dashboard">Cancel</Link>
                                    </Btn>
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
    createProject: projectActions.createProject
}

const connectedNewSong = connect(mapState, actionCreators)(NewSong);
export { connectedNewSong as NewSong };