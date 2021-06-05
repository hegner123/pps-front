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
                                    <Input type="text" className="form-control" name="songTitle"/>

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


///////////

function AddInstrument(props){
    const [form, dispatch] = useReducer(instrumentReducer, {arrangement:[{instrument:'',id:0}]});



    function instrumentReducer(state, action) {
        const id = action.id;
        const value = action.value;
        const text = action.text;
        const command = action.action
        console.log(state)
        switch (command) {
        case 'add':
            return {...state ,
                arrangement:[...state.arrangement,
                    {
                        instrument: text,
                        id:state.arrangement.length
                    }
                ]
            }
        case 'delete':
            return{ ...state,
                        arrangement: state.arrangement.map(inst =>
                        inst.id == id
                            ? { ...inst, deleting: true }
                            : inst
                        )
                    }

        case 'edit':
            return {...state, 
                arrangement: state.arrangement.map(inst => {
                    if (inst.id != id){
                        return{...inst}
                    }
                    return{...inst,
                    instrument:value}

            })
            };

        default:
            return state;
        }
    }



    // return {
    //     ...state,
    //     items: state.items.map(user =>
    //       user.id === action.id
    //         ? { ...user, deleting: true }
    //         : user
    //     )
    //   };

    function handleClick(action,text) {
        dispatch({  action, text });
      };

      function handleChange(event){
          console.log(event.target)
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




form.arrangement.map(data => {console.log(data)})

const display = form.arrangement.map((d, key) => {
    return(
        <div css="width:100%;" key={key}>
            <div css="display:flex;flex-direction:row; color:var(--text-color);">
                <InputGroup
                    type='text'
                    name="edit"
                    placeholder="Instrument"
                    css="width:100%"
                    value={form.arrangement[key].instrument}
                    id={key} onChange={handleChange}/>
                <InputGroupButton onClick={()=> handleClick('delete', key)}>
                    <Delete />
                </InputGroupButton>

            </div>
        </div>
    )
})








    return(
        <section css="width:100%;">
            <div css="display:flex; align-items:flex-start; flex-direction:column;">
                <div css="display:flex; align-items:center;margin-bottom:10px;">
                    <span css="color:#fff;">Arrangement</span>
                    <IconButton small close  onClick={()=>handleClick('add', '')}><Add/></IconButton>
                </div>

               {display}

            </div>
        </section>
    )
}