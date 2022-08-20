import React, { useEffect, useState } from 'react'
import { NavItems, IconButton } from '../style'
export const NavItem = (props) => {
    // const [,] = useState()

    // useEffect(() => {
    //     console.log('test')
    // }, [])
    return (
        <NavItems>
            <IconButton href="#" onClick={() => props.navOpen()}>
                {props.icon}
            </IconButton>
            {props.openState && props.children}
        </NavItems>
    )
}
