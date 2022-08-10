import React, { useState } from 'react'
import { connect } from 'react-redux'

import { RefPreviewList } from './style'
import { RefPreview } from '../../../_components/forms/previewRef/previewRef'

const References = (props) => {
    const [getReference, setGetReference] = useState('')

    const results = props.results
    let referenceArray
    let refList

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
        results: state.reference.results,

        form,
    }
}

const connectedReferences = connect(mapState)(References)
export { connectedReferences as References }
