import React, { useState } from 'react'
import { connect } from 'react-redux'
import { projectActions, refActions } from '../../../_actions'
import Add from '../../../_assets/icons/add.svg'
import Delete from '../../../_assets/icons/delete.svg'
import {
    RefItem,
    RefP,
    ReferenceDelete,
    Label,
    Preview,
    IconButton,
    RefPreviewList,
} from './style'
import { RefPreview } from '../../../_components/forms/previewRef/previewRef'

const References = (props) => {
    const [getReference, setGetReference] = useState('')

    const results = props.results
    let referenceArray
    let refList

    // function handleSearchClick(event, { name, id, preview }) {
    //     event.preventDefault()
    //     let contains = false
    //     if (songRefs[0] === '') {
    //         setSongRefs([{ name: name, id: id, preview: preview }])
    //     } else {
    //         songRefs.forEach((x) => {
    //             if (x.id === id) {
    //                 contains = true
    //             }
    //         })
    //         if (contains === false) {
    //             setSongRefs([
    //                 ...songRefs,
    //                 { name: name, id: id, preview: preview },
    //             ])
    //         }
    //     }
    // }

    if (results !== 'unset' && results) {
        referenceArray = results.map((item) => {
            return <RefPreview key={item.id} item={item} />
        })
    }

    
    return <RefPreviewList>{referenceArray}</RefPreviewList>
}

function mapState(state) {
    const { form } = state
    return {
        results: state.referenceData.results,
        project: state.userData.current._id,
        form,
    }
}

const connectedReferences = connect(mapState)(References)
export { connectedReferences as References }
