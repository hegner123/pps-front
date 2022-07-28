import React from 'react'
import { connect } from 'react-redux'
import { InfoGrid, Title, Field } from './style'
import { NewSong } from '../../../_forms/NewSong/NewSong'
import { useState } from 'react'
import { useEffect } from 'react'
import { Card, AudioPlayer } from '../../atoms/'

const Info = (props) => {
    const [isEditing, setEditing] = useState(false)
    let selected = props.project.selected ? props.project.selected : 0
    let song = props.project.current
        ? props.project.current.songs[selected]
        : ''
    let project = props.project.current ? props.project.current : ''

    useEffect(() => {}, [isEditing])

    return (
        <>
            {!isEditing && (
                <InfoGrid>
                    <Field>
                        <h2>{song ? song.song_title : ''}</h2>
                    </Field>
                    <Field>
                        <p className="members">
                            <strong>MEMBERS: </strong>
                            {project &&
                                project.members.map((data, i) => (
                                    <span css={'color:var(--white);'} key={i}>
                                        {data.username}
                                    </span>
                                ))}
                        </p>
                    </Field>

                    <Field className="bpm">
                        <p>
                            <strong>TEMPO: </strong> {song ? song.song_bpm : ''}
                            bpm
                        </p>
                    </Field>
                    <Field className="key">
                        <p>
                            <strong>KEY: </strong> {song ? song.song_key : ''}
                        </p>
                    </Field>
                    <Field className="references">
                        <p>
                            <strong>REFERENCES: </strong>
                        </p>

                        {song
                            ? song.song_references.map((ref, i) => (
                                  <Card key={i}>
                                      <AudioPlayer
                                          music={song ? ref : ''}
                                          css={'margin-left:10px;'}
                                      />
                                  </Card>
                              ))
                            : ''}
                    </Field>
                    <Field className="lyrics">
                        <strong>
                            <p>LYRICS: {song ? song.song_lyrics : ''}</p>
                        </strong>
                    </Field>
                    <Field className="notes">
                        <strong>
                            <p>NOTES: {song ? song.song_notes : ''}</p>
                        </strong>
                    </Field>
                </InfoGrid>
            )}
        </>
    )
}

function mapState(state) {
    const { project } = state
    return { project }
}

const connectedInfo = connect(mapState)(Info)
export { connectedInfo as Info }
