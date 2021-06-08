import React, {useState} from 'react';
import { connect} from 'react-redux';
import { projectActions, refActions } from '../_actions';
import Add from '../_assets/icons/add.svg';
import Delete from '../_assets/icons/delete.svg';
import Search from '../_assets/icons/search.svg';
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
        IconButton,
        Preview,
        Title,
         Artist,
         ReferenceDelete} from './style';
import { v4 as uuidv4 } from 'uuid';
import {results as query} from './_query'
import { useParams } from 'react-router';

function NewSong(props) {
    const [songTitle, setSongTitle] = useState('');
    const [getReference, setGetReference] = useState('');
    const [form, dispatch] = useReducer(instrumentReducer, {arrangement:[{instrument:'', id: uuidv4() }]});
    const [references, setReferences] = useState(['']);
    const currentProject =useParams().id

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
                }

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
        event.preventDefault()
        let song = {
            id: currentProject,
            songTitle:songTitle,
            arrangement:[...form.arrangement],
            references:[...references]
        }
        console.log(song)
        if (song.songTitle) {
            props.createSong(song);
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



    function handleSearchClick(event, {name, id, preview}){
        event.preventDefault();
        let contains = false;
        if (references[0] === ''){
            setReferences([{name:name, id:id, preview:preview}])
        } else{
        references.forEach(x => {
            if (x.id === id){
                contains = true;
            }
        })
        if (contains === false){
            setReferences([...references, {name:name, id:id, preview:preview}])
        }}
        }

   
let referenceArray;
    if (results !== 'unset' && results){
        referenceArray =  results.map(item=>{
            return(
                <Preview key={item.id}>
                    <div>
                        <div css="display:flex;">
                        <IconButton
                        small close
                        name={item.title}
                        preview={item.preview}
                        id={item.id}
                        onClick={(event)=>handleSearchClick(event, {name:item.title, id:item.id, preview:item.preview, artist:item.artist[0]})}><Add/></IconButton>
                            <Title> {item.title}</Title>
                        </div>
                        <div>
                            {item.artist.map(artist => {
                                return <Artist key={artist.id}>{artist.name}</Artist>
                            })}
                            {item.artist.name}
                        </div>
                    </div>
                    <audio  css="height:20px;width:30%;" controls src={item.preview} type="audio/mpeg"/>
                </Preview>
            )
        })
    }

    function handleRefDelete(e, {reference}){
        e.preventDefault();
        console.log(reference)

        console.log(references.filter(filterRef(id)))
    }

    function filterRef(ref, id){
        console.log(ref)
        console.log(id)
    //    return ref !== id;
    }

    let refList;

    if (references[0] !==''){
        refList = references.map(ref => {
        return  <div css="color:var(--text-color);font-size:12px;" key={ref.id}>{ref.name}
                    <button reference={ref.id} onClick={(e)=> handleRefDelete(e)}>
                        <Delete />
                    </button>
                </div>
    })}

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
                                            <div css="display:flex;flex-direction:row; color:var(--text-color); align-items:center;">
                                            <InputGroup placeholder=""type="text" name="referenceSeach" value={getReference} onChange={handleFormChange}/>
                                            <InputGroupButton  onClick={(e)=> handleSearch(e)}><Search/></InputGroupButton >
                                            </div>
                                            {refList}
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
                        <Browser>
                                <h2 css="color:var(--text-color)">References</h2>
                            {referenceArray}
                        </Browser>
                    </Centered>
                </Row>
        );
    }


function mapState(state) {
    return { results: state.referenceData.results,
            project: state.userData.current._id };
}


const actionCreators = {
    createSong: projectActions.createSong,
    getReferences: refActions.getReferences
}

const connectedNewSong = connect(mapState, actionCreators)(NewSong);
export { connectedNewSong as NewSong };
