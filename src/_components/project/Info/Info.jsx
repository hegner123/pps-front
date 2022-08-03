import React from 'react'
import { connect } from 'react-redux'
import { InfoGrid, Title, Field } from './style'
import { NewSong } from '../../../_forms/NewSong/NewSong'
import { useState } from 'react'
import { useEffect } from 'react'
import { Card, AudioPlayer } from '../../atoms/'

const Info = (props) => {
    const [isEditing, setEditing] = useState(false)

    const [hasSong, setSong] = useState(props.data.songs)
    const [hasProject, setProject] = useState(props.data)
    const selectedSongIndex = 0
    let hasSelected = props.userProjects.selected

    console.log(hasSong)

    useEffect(() => {
        if (props.data) {
            setSong(props.data.songs)
        }
    }, [props.data])

    return (
        <>
            {!isEditing && (
                <InfoGrid>
                    <Field>
                        <h2>{hasSelected ? hasSelected.songTitle : ''}</h2>
                    </Field>
                    <Field>
                        <div className="members" css={'display:flex;'}>
                            <p css={'margin-right:5px;'}>
                                <strong>MEMBERS:</strong>
                            </p>

                            {hasProject &&
                                hasProject.members.map((data, i) => (
                                    <p
                                        css={
                                            'color:var(--white); margin-right:5px;'
                                        }
                                        key={i}
                                    >
                                        {data.userName}
                                    </p>
                                ))}
                        </div>
                    </Field>

                    <Field className="bpm">
                        <p>
                            <strong>TEMPO: </strong>{' '}
                            {hasSelected ? hasSelected.songBpm : ''}
                            bpm
                        </p>
                    </Field>
                    <Field className="key">
                        <p>
                            <strong>KEY: </strong>{' '}
                            {hasSelected.songKey ? hasSelected.songKey : ''}
                        </p>
                    </Field>
                    <Field className="references">
                        <p>
                            <strong>REFERENCES: </strong>
                        </p>

                        {hasSelected.songReferences
                            ? hasSelected.songReferences.map((ref, i) => (
                                  <Card key={i}>
                                      <AudioPlayer
                                          music={hasSong ? ref : ''}
                                          css={'margin-left:10px;'}
                                      />
                                  </Card>
                              ))
                            : ''}
                    </Field>
                    <Field className="lyrics">
                        <strong>
                            <p>
                                LYRICS:{' '}
                                {hasSelected.songLyrics
                                    ? hasSelected.songLyrics
                                    : ''}
                            </p>
                        </strong>
                    </Field>
                    <Field className="notes">
                        <strong>
                            <p>
                                NOTES:{' '}
                                {hasSelected.song_notes
                                    ? hasSelected.song_notes
                                    : ''}
                            </p>
                        </strong>
                    </Field>
                </InfoGrid>
            )}
        </>
    )
}

function mapState(state) {
    const { userProjects } = state
    return { userProjects }
}

const connectedInfo = connect(mapState)(Info)
export { connectedInfo as Info }
