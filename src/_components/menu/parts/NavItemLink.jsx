import React, { useEffect, useState } from 'react'
import { IconButton, NavItems } from '../style'

export const NavItemLink = (props) => {
    // const [,] = useState()

    // useEffect(() => {
    //     console.log('test')
    // }, [])
    return (
        <NavItems>
            <IconButton href={props.link}>{props.children}</IconButton>
        </NavItems>
    )
}
