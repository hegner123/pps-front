import React from 'react'
import { connect } from 'react-redux'
import { InfoGrid, Title, Field } from './style'
import { NewSong } from '../../../_forms/NewSong/NewSong'
import { useState } from 'react'
import { useEffect } from 'react'
import { Card, AudioPlayer } from '../../atoms/'

const Info = (props) => {
    const [isEditing, setEditing] = useState(false)
    let selected = props.userData.selected
    let song = props.userData.current.songs[selected]
    let project = props.userData.current

    useEffect(() => {
        console.log(isEditing)
    }, [isEditing])

    return (
        <>
            {!isEditing && (
                <InfoGrid>
                    <Field>
                        <h2>{song.song_title}</h2>
                    </Field>
                    <Field>
                        <p className="members">
                            <strong>MEMBERS: </strong>
                            {project.members.map((data, i) => (
                                <span css={'color:var(--white);'} key={i}>
                                    {data.username}
                                </span>
                            ))}
                        </p>
                    </Field>

                    <Field className="bpm">
                        <p>
                            <strong>TEMPO: </strong> {song.song_bpm}bpm
                        </p>
                    </Field>
                    <Field className="key">
                        <p>
                            <strong>KEY: </strong> {song.song_key}
                        </p>
                    </Field>
                    <Field className="references">
                        <p>
                            <strong>REFERENCES: </strong>
                        </p>
                        {console.log(song)}
                        {song.song_references.map((ref, i) => (
                            <Card key={i}>
                                <AudioPlayer
                                    music={ref}
                                    css={'margin-left:10px;'}
                                />
                            </Card>
                        ))}
                    </Field>
                    <Field className="lyrics">
                        <strong>
                            <p>LYRICS: </p>
                        </strong>
                    </Field>
                    <Field className="notes">
                        <strong>
                            <p>NOTES: </p>
                        </strong>
                    </Field>
                </InfoGrid>
            )}
        </>
    )
}

function mapState(state) {
    const { userData } = state
    return { userData }
}

const connectedInfo = connect(mapState)(Info)
export { connectedInfo as Info }
