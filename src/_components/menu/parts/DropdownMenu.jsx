import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Delete, Account, Logout } from '../../../_assets/icons'
import { useOnClickOutside } from '../../../_hooks/onClickOutside'
import { DropdownItem } from './DropdownItem'

export const DropdownMenu = (props) => {
    const [activeMenu, setActiveMenu] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null)
    const ref = useRef()
    useOnClickOutside(ref, () => props.setSettingsClose())
    // State for our modal

    const location = useLocation().pathname

    useEffect(() => {
        setMenuHeight(ref.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight
        setMenuHeight(height)
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={ref}>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    {location.includes('project') && (
                        <DropdownItem
                            action={() => props.deleteProject()}
                            icon={
                                <Delete css="fill: var(--text-color);height:20px;width:20px;" />
                            }
                        >
                            Delete Project
                        </DropdownItem>
                    )}
                    <DropdownItem
                        href="/account"
                        icon={
                            <Account css="fill: var(--text-color);height:20px;width:20px;" />
                        }
                    >
                        Account
                    </DropdownItem>

                    <DropdownItem
                        action={() => props.logOut()}
                        icon={
                            <Logout css="fill: var(--text-color);height:20px;width:20px;" />
                        }
                    >
                        Log Out
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}
