import React, {useState,useEffect} from 'react';
import { Link} from 'react-router-dom';
import { connect , useSelector} from 'react-redux';
import { store } from '../_helpers'
import { projectActions, refActions } from '../_actions';
import Add from '../_assets/icons/add.svg';
import Delete from '../_assets/icons/delete.svg';
import { ActionGroup,
        Button,
        Btn,
        Centered ,
        Form,
        FormSection,
        FormInnerSection,
        FormTitle,
        FormGroup,
        HelpBlock,
        Browser,
        Label,
        Row,
        Input,
        InputGroup,
        InputGroupButton,
        IconButton} from './style';
import { v4 as uuidv4 } from 'uuid';

import {results as query} from './_query'



function NewSong(props) {
    const [songTitle, setSongTitle] = useState('');
    const [getReference, setGetReference] = useState('');
    const [form, dispatch] = useReducer(instrumentReducer, {arrangement:[{instrument:'', id: uuidv4() }]});
    const [references, setReferences] = useState('');




    // const results = props.results
    const results = query.results


        function instrumentReducer(state, {action, value, id}) {
            switch (action) {
            case 'add':
                return {...state ,
                    arrangement:[...state.arrangement,
                        {
                            instrument: value,
                            id: uuidv4()
                        }
                    ]
                }
            case 'delete':
                return{ ...state,
                    arrangement: state.arrangement.filter(inst => inst.id != id)
                    }
            case 'edit':
                return {...state,
                    arrangement: state.arrangement.map(inst => {
                        if (inst.id != id){
                            return{...inst}
                        }
                        return{...inst,
                        instrument:value,
                        id: id}

                })
                };

            default:
                return state;
            }
        }


        function handleClick(action,value, id) {
            dispatch({  action , value, id });
          };

          function handleChange(event){
              const { name, value , id} = event.target;
              dispatch({action:name, value, id});
          }

        function useReducer(reducer, initialState) {
            const [state, setState] = useState(initialState);

            function dispatch(action, id) {
            const nextState = reducer(state, action, id);
            setState(nextState);
            }
            return [state, dispatch];
        }


    function handleFormChange(event) {
        const {name, value} = event.target;
        switch(name){
            case 'songTitle':{
                return setSongTitle(value)
            };
            case  'referenceSeach':{
                return setGetReference(value)
            }
            default:
            return ''
        }
    }

    function handleSearch(event){
       event.preventDefault();
       props.getReferences(getReference)
    }


    function handleSubmit(event) {

        let song = {
            songTitle:'',
            arrangement:[],
            references:[]
        }
        song.songTitle = songTitle;
        song.arrangement = form.arrangement;
        if (song.songTitle) {
            props.createsong(song);
        }
    }




    const displayArrangement = form.arrangement.map(key => {
        return (
            <div css="width:100%;margin-top:10px;" key={key.id}>
                <div css="display:flex;flex-direction:row; color:var(--text-color);">
                    <InputGroup
                        type='text'
                        name="edit"
                        placeholder="Instrument"
                        css="width:100%"
                        value={key.instrument}
                        id={key.id} onChange={handleChange}/>
                    <InputGroupButton onClick={()=> handleClick('delete', 'delete', key.id)}>
                        <Delete />
                    </InputGroupButton>

                </div>
            </div>
            )
        })

let referenceArray;
    if (results !== 'unset' && results){
        referenceArray =  results.map(item=>{
            return(
                <div css="color:var(--text-color); display:flex; align-items:center;justify-content:space-between;">
                    <p css="width:50%;"> {item.title}</p>
                    <audio controls src={item.preview} type="audio/mpeg"/>
                </div>
            )
        })
    }

        return (
                <Row>
                    <Centered>
                        <Form>
                            <FormTitle>New Song</FormTitle>
                            <form name="newSong" onSubmit={handleSubmit}>
                                <FormSection>
                                <FormInnerSection>
                                {/* {submitted && !song.songTitle &&
                                            <div className="help-block">Your song needs a name.</div>
                                        } */}
                                    <FormGroup>
                                        <Label htmlFor="songTitle" >Song Title</Label>
                                    <Input type="text" placeholder="New Song" className="form-control" name="songTitle" value={songTitle} onChange={handleFormChange}/>

                                    </FormGroup>
                                    <FormGroup>
                                        <div css="display:flex; align-items:flex-start; flex-direction:column;">
                                            <div css="display:flex; align-items:center;margin-bottom:10px;">
                                                <span css="color:#fff;">Arrangement</span>
                                                <IconButton small close  onClick={()=>handleClick('add', '')}><Add/></IconButton>
                                            </div>
                                        {displayArrangement}
                                        </div>
                                    </FormGroup>
                                </FormInnerSection>
                                <FormInnerSection>
                                    <FormGroup>
                                        <Label>
                                            References
                                        </Label>
                                        <Input placeholder=""type="text" name="referenceSeach" value={getReference} onChange={handleFormChange}/>
                                        <Button onClick={(e)=> handleSearch(e)}>Search</Button>
                                    </FormGroup>

                                </FormInnerSection>

                                </FormSection>
                                <ActionGroup>
                                    <Button>Create</Button>
                                    <Btn to="/dashboard">
                                        Cancel
                                    </Btn>
                                </ActionGroup>
                            </form>
                        </Form>
                        <Browser >
                            {referenceArray}
                            </Browser>
                    </Centered>
                </Row>
        );
    }


function mapState(state) {
    return { results: state.referenceData.results };
}


const actionCreators = {
    createSong: projectActions.createSong,
    getReferences: refActions.getReferences
}

const connectedNewSong = connect(mapState, actionCreators)(NewSong);
export { connectedNewSong as NewSong };
