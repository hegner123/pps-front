import React, { useState } from 'react'
import { connect } from 'react-redux'
import { projectActions, refActions } from '../../../_actions'
import Add from '../../../_assets/icons/add.svg'
import Delete from '../../../_assets/icons/delete.svg'
import {
    RefItem,
    RefP,
    ReferenceDelete,
    Preview,
    IconButton,
    Title,
    Artist,
} from './style'

const References = (props) => {
    const [getReference, setGetReference] = useState('')
    const [songRefs, setSongRefs] = useState([''])
    const results = props.results
    let referenceArray
    let refList

    function handleSearchClick(event, { name, id, preview }) {
        event.preventDefault()
        let contains = false
        if (songRefs[0] === '') {
            setSongRefs([{ name: name, id: id, preview: preview }])
        } else {
            songRefs.forEach((x) => {
                if (x.id === id) {
                    contains = true
                }
            })
            if (contains === false) {
                setSongRefs([
                    ...songRefs,
                    { name: name, id: id, preview: preview },
                ])
            }
        }
    }

    if (results !== 'unset' && results) {
        referenceArray = results.map((item) => {
            return (
                <Preview key={item.id}>
                    <div>
                        <div css="display:flex;">
                            <IconButton
                                small
                                close
                                name={item.title}
                                preview={item.preview}
                                id={item.id}
                                onClick={(event) =>
                                    handleSearchClick(event, {
                                        name: item.title,
                                        id: item.id,
                                        preview: item.preview,
                                        artist: item.artist[0],
                                    })
                                }
                            >
                                <Add />
                            </IconButton>
                            <Title> {item.title}</Title>
                        </div>
                        <div>
                            {item.artist.map((artist) => {
                                return (
                                    <Artist key={artist.id}>
                                        {artist.name}
                                    </Artist>
                                )
                            })}
                            {item.artist.name}
                        </div>
                    </div>
                    <audio
                        css="height:20px;width:30%;"
                        controls
                        src={item.preview}
                        type="audio/mpeg"
                    />
                </Preview>
            )
        })
    }

    if (songRefs[0] !== '') {
        refList = (
            <div css="margin-top:20px">
                <Label>Song References</Label>
                <ul>
                    {songRefs.map((ref) => {
                        return (
                            <RefItem key={ref.id}>
                                <RefP>{ref.name}</RefP>
                                <InputGroupButton
                                    onClick={(e) => handleRefDelete(e, ref.id)}
                                >
                                    <Delete css="height:24px;width:24px;" />
                                </InputGroupButton>
                            </RefItem>
                        )
                    })}
                </ul>
            </div>
        )
    }
    return <div>{referenceArray}</div>
}

function mapState(state) {
    return {
        results: state.referenceData.results,
        project: state.userData.current._id,
    }
}

const connectedReferences = connect(mapState)(References)
export { connectedReferences as References }
