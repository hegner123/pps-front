import React, { useState, useReducer, useEffect } from 'react'
import { connect } from 'react-redux'
import { projectActions, refActions } from '../../_actions'
import Add from '../../_assets/icons/add.svg'
//! development query
import { query } from './_query'
import { v4 as uuidv4 } from 'uuid'

import Delete from '../../_assets/icons/delete.svg'
import Search from '../../_assets/icons/search.svg'
import { References } from './References'
import { Arrangement } from './Arrangement'
import {
    ActionGroup,
    Button,
    Btn,
    Form,
    FormInnerSection,
    FormTitle,
    FormGroup,
    Label,
    Main,
    Input,
    InputGroup,
    InputGroupButton,
    IconButton,
    ArrangmentSection,
    Section,
    Group,
} from './style'
import { useParams } from 'react-router'

function NewSong(props) {
    const [getReference, setReference] = useState('')
    const [valSongTitle, setSongTitle] = useState('')
    const [valSongKey, setSongKey] = useState('')
    const [valSongBpm, setSongBpm] = useState('')
    const [valSongLyrics, setSongLyrics] = useState('')
    const [references, setReferences] = useState([''])
    const [valTemplate, setTemplate] = useState('')
    const [form, dispatch] = useReducer(instrumentReducer, {
        arrangement: [{ instrument: '', id: uuidv4() }],
    })

    useEffect(() => {
        handleDispatch('reset')
        if (valTemplate !== '') {
            handleDispatch('insertMany', valTemplate)
        }
    }, [valTemplate])

    function instrumentReducer(state, { action, value, id }) {
        switch (action) {
            case 'add':
                return {
                    ...state,
                    arrangement: [
                        ...state.arrangement,
                        {
                            instrument: value,
                            id: uuidv4(),
                        },
                    ],
                }
            case 'insertMany':
                return {
                    ...state,
                    arrangement: value.split(',').map((inst) => {
                        return {
                            instrument: inst,
                            id: uuidv4(),
                        }
                    }),
                }
            case 'delete':
                return {
                    ...state,
                    arrangement: state.arrangement.filter(
                        (inst) => inst.id != id
                    ),
                }
            case 'edit':
                return {
                    ...state,
                    arrangement: state.arrangement.map((inst) => {
                        if (inst.id != id) {
                            return { ...inst }
                        }
                        return { ...inst, instrument: value, id: id }
                    }),
                }
            case 'reset':
                return {
                    ...state,
                    arrangement: [{ instrument: '', id: uuidv4() }],
                }

            default:
                return state
        }
    }

    function handleRefDelete(e, refId) {
        e.preventDefault()
        setSongRefs(songRefs.filter((ref) => ref.id != refId))
    }

    function handleClick(action, value, id) {
        dispatch({ action, value, id })
        console.log('{ action, value, id }', { action, value, id })
    }

    function handleDispatch(action, value, id) {
        dispatch({ action, value, id })
    }

    function handleChange(event) {
        const { name, value, id } = event.target
        dispatch({ action: name, value, id })
    }

    function hanldeSpotifySearch(e, ref) {
        e.preventDefault()
        props.getReferences(ref)
    }

    function handleEdit(action, value, id) {
        dispatch({ action, value, id })
    }

    function useReducer(reducer, initialState) {
        const [state, setState] = useState(initialState)

        function dispatch(action, id) {
            const nextState = reducer(state, action, id)
            setState(nextState)
        }
        return [state, dispatch]
    }

    const projectPage = useParams().id
    const currentProject = props.project

    function handleSubmit(event) {
        event.preventDefault()
        let song = {
            id: currentProject,
            songTitle: songTitle,
            arrangement: [...form.arrangement],
            references: [...references],
            path: `/project/${projectPage}`,
        }
        if (song.songTitle) {
            props.createSong(song)
        }
    }

    return (
        <Main>
            <Section>
                <Form>
                    <FormTitle>New Song</FormTitle>
                    <form name="newSong" onSubmit={handleSubmit}>
                        <Group>
                            <FormInnerSection>
                                <FormGroup>
                                    <Label htmlFor="songTitle">
                                        Song Title
                                    </Label>
                                    <Input
                                        type="text"
                                        placeholder="New Song"
                                        name="songTitle"
                                        value={valSongTitle}
                                        onChange={(e) =>
                                            setSongTitle(e.target.value)
                                        }
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="key">Key</Label>
                                    <Input
                                        type="text"
                                        placeholder="key"
                                        name="key"
                                        value={valSongKey}
                                        onChange={(e) =>
                                            setSongKey(e.target.value)
                                        }
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="BPM">BPM</Label>
                                    <Input
                                        type="text"
                                        placeholder="120bpm"
                                        name="bpm"
                                        value={valSongBpm}
                                        onChange={(e) =>
                                            setSongBpm(e.target.value)
                                        }
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="lyrics">Lyrics</Label>
                                    <textarea
                                        name="typedLyrics"
                                        id="typedLyrics"
                                        cols="30"
                                        rows="10"
                                        value={valSongLyrics}
                                        onChange={(e) =>
                                            setSongLyrics(e.target.value)
                                        }
                                        placeholder="Never gunna give you up..."
                                    ></textarea>
                                    <Input
                                        type="file"
                                        name="lyris"
                                        onChange={(e) =>
                                            console.log(e.target.value)
                                        }
                                    />
                                </FormGroup>
                            </FormInnerSection>
                            <FormInnerSection>
                                <FormGroup>
                                    <ArrangmentSection>
                                        <div css={'display:flex;'}>
                                            <Label>Song Arrangement</Label>
                                        </div>
                                        <div
                                            css={
                                                'display:flex;justify-content:space-between;margin-bottom:27px; height:100%;'
                                            }
                                        >
                                            <select
                                                css={'height:31px;'}
                                                id="arrangement-template"
                                                onChange={(e) =>
                                                    setTemplate(e.target.value)
                                                }
                                            >
                                                <option value="">---</option>
                                                {query.arrangements.map(
                                                    (arrangement, i) => (
                                                        <option
                                                            key={i}
                                                            value={arrangement.arrangement.toString()}
                                                        >
                                                            {
                                                                arrangement.project
                                                            }
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                        <Arrangement
                                            template={form.arrangement}
                                            handleChange={(e, f) =>
                                                handleEdit('edit', e, f)
                                            }
                                            handleAdd={() =>
                                                handleClick('add', '')
                                            }
                                            handleDelete={(e) =>
                                                handleClick(
                                                    'delete',
                                                    'delete',
                                                    e
                                                )
                                            }
                                        />
                                    </ArrangmentSection>
                                </FormGroup>
                            </FormInnerSection>
                        </Group>
                        <ActionGroup>
                            <Button>Create</Button>
                            <Btn to={`/project/${projectPage}`}>Cancel</Btn>
                        </ActionGroup>
                    </form>
                    <form
                        onSubmit={(e) => hanldeSpotifySearch(e, getReference)}
                    >
                        <FormInnerSection>
                            <FormGroup>
                                <Label>Search References</Label>
                                <div css="display:flex; color:var(--text-color); align-items:center;">
                                    <InputGroup
                                        id="spotify-search"
                                        placeholder="Search Spotify"
                                        type="text"
                                        name="referenceSeach"
                                        value={getReference}
                                        onChange={(e) =>
                                            setReference(e.target.value)
                                        }
                                    />
                                    <InputGroupButton
                                        onClick={(e) => handleSearch(e)}
                                    >
                                        <Search />
                                    </InputGroupButton>
                                </div>
                            </FormGroup>
                        </FormInnerSection>
                    </form>
                    <References />
                </Form>
            </Section>
        </Main>
    )
}

function mapState(state) {
    const { userData } = state
    return { userData, project: state.userData.current._id }
}

const actionCreators = {
    createSong: projectActions.createSong,
    getReferences: refActions.getReferences,
}

const connectedNewSong = connect(mapState, actionCreators)(NewSong)
export { connectedNewSong as NewSong }
