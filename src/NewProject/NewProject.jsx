import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { projectActions } from '../_actions';

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
            <div className="">

                <section className="row">
                    <div className="center">
                        <div className="form-section">
                            <h1>New Project</h1>
                            <form name="form" onSubmit={this.handleSubmit}>
                            {submitted && !project.projectTitle &&
                                        <div className="help-block">Your Project needs a name.</div>
                                    }
                                <div className={'form-group' + (submitted && !project.projectTitle ? ' has-error' : '')}>
                                    <label htmlFor="projectTitle">Project Title</label>
                                    <input type="text" className="form-control" name="projectTitle" value={project.projectTitle} onChange={this.handleChange} />

                                </div>
                                {submitted && !project.members &&
                                        <div className="help-block">Projects need Members</div>
                                    }
                                <div className={'form-group' + (submitted && !project.members ? ' has-error' : '')}>
                                    <label htmlFor="members">Members</label>
                                    <input type="text" className="form-control" name="members" value={project.members} onChange={this.handleChange} />

                                </div>
                                {submitted && !project.companyName &&
                                        <div className="help-block">companyName is required</div>
                                    }
                                <div className={'form-group' + (submitted && !project.companyName ? ' has-error' : '')}>
                                    <label htmlFor="companyName">Company</label>
                                    <input type="text" className="form-control" name="companyName" value={project.companyName} onChange={this.handleChange} />

                                </div>

                                <div className="form-group form-actions">
                                    <button className="btn btn-action">Create</button>

                                    <Link to="/dashboard" className="btn btn-link">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
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