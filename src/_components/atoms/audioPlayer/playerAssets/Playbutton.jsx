import React from 'react'
import { Style } from './style'
import Play1 from './play1.svg'

export function PlayButton() {
    return (
        <>
            <Style>
                <div className="circle">
                    <svg
                        width="100"
                        height="100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M 00 0 L 0 0, 100 50, 0 100"
                            stroke="black"
                            fill="black"
                        ></path>
                    </svg>
                </div>
            </Style>
        </>
    )
}
