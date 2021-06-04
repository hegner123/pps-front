import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { projectActions } from '../_actions';
import Add from '../_assets/icons/add.svg';
import Delete from '../_assets/icons/delete.svg';
import { ActionGroup, Button, Btn, Centered ,FormSection, FormTitle, FormGroup, HelpBlock, Label, Row, Input,InputGroup, InputGroupButton, IconButton} from './style';

function NewSong(props) {
    const [songTitle, setsongTitle] = useState('');
    const [arrangement, setArrangement] = useState('');


    function handleChange(event) {
        const { name, value } = event.target;
        const { song } = state;
        
    }


    function handleSubmit(event) {

        let song = {
            songTitle:'',
            arrangement:[],
            references:[]
        }
        song.songTitle = songTitle;
        song.arrangement = arrangement;
        if (song.songTitle && song.members) {
            props.createsong(song);
        }
    }

    


        let i=0;
        
        
        return (
                <Row>
                    <Centered>
                        <FormSection>
                            <FormTitle>New Song</FormTitle>
                            <form name="newSong" onSubmit={handleSubmit}>
                            {/* {submitted && !song.songTitle &&
                                        <div className="help-block">Your song needs a name.</div>
                                    } */}
                                <FormGroup>
                                    <Label htmlFor="songTitle" >Song Title</Label>
                                    <Input type="text" className="form-control" name="songTitle"   />

                                </FormGroup>
                                <AddInstrument></AddInstrument>

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


function mapState(state) {
    const { songs } = state;
    return { songs };
}

const actionCreators = {
    createSong: projectActions.createSong
}

const connectedNewSong = connect(mapState, actionCreators)(NewSong);
export { connectedNewSong as NewSong };




function AddInstrument(props){
    const [arrangement, dispatch] = useReducer(instrumentReducer, []);
  
    function handleAddClick(text) {
      dispatch({ type: 'add', text });
    };
    
    function instrumentReducer(state, action) {
        switch (action.type) {
        case 'add':
            return [...state, {
            instrument: action.text
            }];
        // ... other actions ...
        default:
            return state;
        }
    }


    function useReducer(reducer, initialState) {
        const [state, setState] = useState(initialState);

        function dispatch(action) {
        const nextState = reducer(state, action);
        setState(nextState);
        }
        return [state, dispatch];
    }

    return(
        <section css="width:100%;">
            <div css="display:flex; align-items:flex-start; flex-direction:column;">
                <div css="display:flex; align-items:center;margin-bottom:10px;">
                    <span css="color:#fff;">arrangement</span>
                    <IconButton small close ><Add/></IconButton>
                </div>
                <div css="width:100%;">
                    <div css="display:flex;flex-direction:row; ">
                        <InputGroup type='text'  name="instrument" placeholder="Instrument" css="width:100%"/>
                        <InputGroupButton>
                            <Delete />
                        </InputGroupButton>

                    </div>
                </div>
            </div>
        </section>
    )
}