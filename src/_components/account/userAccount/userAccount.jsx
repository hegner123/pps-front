import React, { useState } from 'react'

const UserAccount = (props) => {
    const [isEdit, setEdit] = useState(false)
    const initState = 'Setting'
    const [valOption1, setOption1] = useState(initState)
    const [valOption2, setOption2] = useState(initState)
    const [valOption3, setOption3] = useState(initState)
    const [valOption4, setOption4] = useState(initState)

    const display = (
        <ul>
            <li css={'margin-top:10px;margin-bottom:10px;'}>
                Option1: {valOption1}
            </li>
            <li css={'margin-top:10px;margin-bottom:10px;'}>
                Option2: {valOption2}
            </li>
            <li css={'margin-top:10px;margin-bottom:10px;'}>
                Option3: {valOption3}
            </li>
            <li css={'margin-top:10px;margin-bottom:10px;'}>
                Option4: {valOption4}
            </li>
        </ul>
    )
    const edit = (
        <ul>
            <li css={'margin-top:10px;margin-bottom:10px;'}>
                Option1:{' '}
                <input
                    type="text"
                    value={valOption1}
                    onChange={(e) => setOption1(e.target.value)}
                />
            </li>
            <li css={'margin-top:10px;margin-bottom:10px;'}>
                Option2:{' '}
                <input
                    type="text"
                    value={valOption2}
                    onChange={(e) => setOption2(e.target.value)}
                />
            </li>
            <li css={'margin-top:10px;margin-bottom:10px;'}>
                Option3:{' '}
                <input
                    type="text"
                    value={valOption3}
                    onChange={(e) => setOption3(e.target.value)}
                />
            </li>
            <li css={'margin-top:10px;margin-bottom:10px;'}>
                Option4:{' '}
                <input
                    type="text"
                    value={valOption4}
                    onChange={(e) => setOption4(e.target.value)}
                />
            </li>
        </ul>
    )
    return (
        <div>
            <div css={'display:flex'}>
                <h2>Account Options</h2>
                <button
                    css={
                        'height:min-content;align-self:center;margin-left:10px'
                    }
                    onClick={() => setEdit(!isEdit)}
                >
                    Edit
                </button>
            </div>

            {isEdit ? edit : display}
        </div>
    )
}

export { UserAccount }
