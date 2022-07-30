import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { projectActions, refActions, formActions } from '../../_actions'
import { history } from '../../_helpers'

//! development query
import { query } from './_query'
import Delete from '../../_assets/icons/delete.svg'
import Search from '../../_assets/icons/search.svg'
import { References } from './References'
import { Arrangement } from './Arrangement'
import {
    Main,
    Btn,
    Grid,
    ArrangmentSection,
    IconButton,
    RefP,
    RefItem,
    Label,
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
    const projectPage = useParams().id
    let localStorageData = JSON.parse(
        localStorage.getItem('userProjects')
    ).filter((project) => {
        return project.projectSlug == useParams().id
    })
    const currentProject = localStorageData[0]._id

    let refList
    useEffect(() => {
        props.instReset()
        if (valTemplate !== '') {
            props.instInsertMany(valTemplate)
        }
    }, [valTemplate])

    function handleSpotifySearch(e, ref) {
        e.preventDefault()
        props.getReferences(ref)
    }

    function handleSubmit(event) {
        event.preventDefault()
        let song = {
            id: currentProject,
            songTitle: valSongTitle,
            arrangement: [...props.form.arrangement],
            references: [...references],
        }
        if (song.songTitle) {
            props.createSong(
                song,
                props.authentication.user._id,
                localStorageData[0]._id
            )
            history.push(`/project/${projectPage}`)
        }
    }

    if (props.form.references) {
        refList = (
            <ul>
                {props.form.references.map((refs) => {
                    const ref = refs.reference
                    return (
                        <RefItem key={ref.id}>
                            <RefP>{ref.name.substring(0, 21)}</RefP>
                            <IconButton
                                onClick={() => props.referenceDelete(refs.id)}
                            >
                                <Delete />
                            </IconButton>
                        </RefItem>
                    )
                })}
            </ul>
        )
    }

    return (
        <Main>
            <div className="section">
                <div className="form">
                    <h2>New Song</h2>
                    <form name="newSong" onSubmit={handleSubmit}>
                        <Grid>
                            <section>
                                <div>
                                    <label htmlFor="songTitle">
                                        Song Title
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="New Song"
                                        name="songTitle"
                                        value={valSongTitle}
                                        onChange={(e) =>
                                            setSongTitle(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label htmlFor="key">Key</label>
                                    <input
                                        type="text"
                                        placeholder="key"
                                        name="key"
                                        value={valSongKey}
                                        onChange={(e) =>
                                            setSongKey(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label htmlFor="BPM">BPM</label>
                                    <input
                                        type="text"
                                        placeholder="120bpm"
                                        name="bpm"
                                        value={valSongBpm}
                                        onChange={(e) =>
                                            setSongBpm(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lyrics">Lyrics</label>
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
                                    <input
                                        type="file"
                                        name="lyris"
                                        onChange={(e) =>
                                            console.log(e.target.value)
                                        }
                                    />
                                </div>
                            </section>
                            <section>
                                <div>
                                    <ArrangmentSection>
                                        <div css={'display:flex;'}>
                                            <label>Song Arrangement</label>
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
                                            template={props.form.arrangement}
                                            handleChange={(e, f) =>
                                                props.instEdit(e, f)
                                            }
                                            handleAdd={() => props.instAdd()}
                                            handleDelete={(e) =>
                                                props.instDelete(e)
                                            }
                                        />
                                    </ArrangmentSection>
                                </div>
                            </section>
                        </Grid>
                        <div className="create-song-action">
                            <button>Create</button>
                            <Btn to={`/project/${projectPage}`}>Cancel</Btn>
                        </div>
                    </form>
                    <form
                        onSubmit={(e) => handleSpotifySearch(e, getReference)}
                    >
                        <section>
                            <div>
                                <label>Search References</label>
                                <div css="display:flex; color:var(--text-color); align-items:center;">
                                    <input
                                        className="input-group"
                                        id="spotify-search"
                                        placeholder="Search Spotify"
                                        type="text"
                                        name="referenceSeach"
                                        value={getReference}
                                        onChange={(e) =>
                                            setReference(e.target.value)
                                        }
                                    />
                                    <span
                                        className="input-group-btn"
                                        onClick={(e) =>
                                            handleSpotifySearch(e, getReference)
                                        }
                                    >
                                        <Search />
                                    </span>
                                </div>
                                <div>{refList}</div>
                                <div>{references}</div>
                            </div>
                        </section>
                    </form>
                    <References
                        userReferences={props.form.references}
                        handleRefDelete={(e) => props.referenceDelete(e)}
                        addRefernce={(e) => props.referenceAdd(e)}
                    />
                </div>
            </div>
        </Main>
    )
}

function mapState(state) {
    const { form, authentication, monitor } = state
    return {
        form,
        authentication,
        monitor,
    }
}

const actionCreators = {
    createSong: projectActions.createSong,
    getReferences: refActions.getReferences,
    instAdd: formActions.instAdd,
    instInsertMany: formActions.instInsertMany,
    instDelete: formActions.instDelete,
    instEdit: formActions.instEdit,
    instReset: formActions.instReset,
    referenceAdd: formActions.referenceAdd,
    referenceDelete: formActions.referenceDelete,
}

const connectedNewSong = connect(mapState, actionCreators)(NewSong)
export { connectedNewSong as NewSong }
