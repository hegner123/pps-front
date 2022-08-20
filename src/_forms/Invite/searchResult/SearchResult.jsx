import React, { useEffect, useState } from 'react'

export const SearchResult = ({ userName, id, handleOnChangeRecipient }) => {
    const [hasSelected, setSelected] = useState(false)

    function handleSelect(id) {
        setSelected(!hasSelected)
        handleOnChangeRecipient(id)
    }

    // useEffect(() => {
    //     console.log('test')
    // }, [])
    return (
        <div
            css={`
                padding: 1rem;

                cursor: pointer;
                background: #f5f5f5;
                border: solid 3px ${hasSelected ? '#9e84f5' : '#f5f5f5'};
                border-radius: 3px;
            `}
            onClick={() => handleSelect(id)}
        >
            <p
                css={`
                    padding: 0 2rem;
                    color: black;
                `}
            >
                {userName}
            </p>
        </div>
    )
}
