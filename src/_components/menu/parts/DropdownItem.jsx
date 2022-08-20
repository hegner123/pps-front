import React, { useEffect, useState } from 'react'
import { DropdownLink } from '../style'
export const DropdownItem = (props) => {
    // const [,] = useState()

    // useEffect(() => {
    //     console.log('test')
    // }, [])
    return (
        <DropdownLink
            href={props.href ? props.href : '#'}
            className="menu-item"
            css="color:var(--text-color)"
            onClick={() => props.action()}
        >
            <span>{props.icon}</span>
            {props.children}
        </DropdownLink>
    )
}
