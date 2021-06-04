import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { projectActions } from '../_actions';
import Add from '../_assets/icons/add.svg';
import Delete from '../_assets/icons/delete.svg';
import { ActionGroup, Button, Btn, Centered ,FormSection, FormTitle, FormGroup, HelpBlock, Label, Row, Input , IconButton} from './style';

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
        this.handleAddInstrument = this.handleAddInstrument.bind(this);
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

    handleAddInstrument(event){
        
        event.preventDefault();
        const { project } = this.state;
        let placeholder = [''];
        let instrument = this.state.project.arrangement.concat(placeholder);
        
        this.setState({
            project:{
                ...project,
                arrangement:instrument
            }
        })
        
    }


    // newInstrument(){

    // }

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
        let i=0;
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
                               <div css="display:flex; align-items:flex-start;">
                                   <div css="display:flex; align-items:center;">
                                        <span css="color:#fff;">arrangement</span><IconButton onClick={(e) => this.handleAddInstrument(e)}><Add/></IconButton>
                                   </div>
                                <div>
                                        {this.state.project.arrangement.map(input => {
                                           return( 
                                               <div css="display:flex;">
                                                   <input type='text'  name="arrangement"  onChange={this.handleChange} key={i++}/>
                                                   <IconButton>
                                                   <Delete/>
                                                   </IconButton>
                                               </div>
                                           )
                                        })}
                                   </div>
                               </div>




                                <ActionGroup>
                                    <Button>Create</Button>
                                    <Btn to="/dashboard">
                                        Cancel
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