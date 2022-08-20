import React from 'react'
import { formActions } from '../../_actions'
import { connect } from 'react-redux'
import { IconButton, Title, Artist } from './style'
import { Add } from '../../_assets/icons'

const RefPreview = (props) => {
    const item = props.item
    return (
        <article>
            <div>
                <div css="display:flex;align-items:center">
                    <IconButton
                        small
                        close
                        name={item.title}
                        preview={item.preview}
                        id={item.id}
                        onClick={() =>
                            props.addRefernce({
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
                <div
                    css={
                        'display:grid;grid: 100%/1fr 1fr;margin-top:auto; margin-bottom:auto;'
                    }
                >
                    <div>
                        {item.artist.map((artist) => {
                            return (
                                <Artist key={artist.id}>{artist.name}</Artist>
                            )
                        })}
                        {item.artist.name}
                    </div>
                    <audio
                        css="height:20px;width:100%;"
                        controls
                        src={item.preview}
                        type="audio/mpeg"
                    />
                </div>
            </div>
        </article>
    )
}

function mapState(state) {
    const { form } = state
    return { form }
}

const actionCreators = {
    addRefernce: formActions.referenceAdd,
}

const connectedRefPreview = connect(mapState, actionCreators)(RefPreview)
export { connectedRefPreview as RefPreview }
