import React, { useEffect, useState } from 'react'
import { ChromePicker } from 'react-color'

export const ColorPicker = ({ showPicker, color, setColor }) => {
    return (
        <>
            {showPicker && (
                <div
                    css={`
                        position: absolute;
                        left: 120px;
                        z-index: 2;
                    `}
                >
                    <ChromePicker
                        color={color}
                        onChange={(value) => setColor(value.hex)}
                    ></ChromePicker>
                </div>
            )}
        </>
    )
}
