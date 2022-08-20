import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { useParams, useLocation, Link } from 'react-router-dom'
import { uiActions, userActions, projectActions } from '../../_actions'
import { NavItemLink } from './parts/NavItemLink'
import { NavItem } from './parts/NavItem'
import { DropdownMenu } from './parts/DropdownMenu'
import { DropdownItem } from './parts/DropdownItem'
import { Home, Logout, Delete, Settings, Account } from '../../_assets/icons'
import {
    AdminBar,
    Brand,
    Search,
    AdminControls,
    Input,
    BrandLink,
} from './style'
import { IconButton } from '../../_atoms/'
import { CSSTransition } from 'react-transition-group'
import { useOnClickOutside } from '../../_hooks/onClickOutside'

const Menu = (props) => {
    const loggedIn = props.authentication.loggedIn
    // const current = useSelector((state) =>
    //     state.project.current ? state.project.current._id : ''
    // )
    const ui = props.userInterface
    let searchBar, settings
    if (loggedIn) {
        searchBar = (
            <Search>
                <Input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    disabled
                />
            </Search>
        )

        settings = (
            <NavItem
                icon={<Settings css="fill:var(--text-color)" />}
                navOpen={() => props.setSettingsOpen()}
                openState={ui.isSettingsOpen}
            >
                <ConDropdownMenu
                    logOut={() => userLogout()}
                    deleteProject={() => handleDelete(current)}
                    // currentP={current.projectTitle}
                ></ConDropdownMenu>
            </NavItem>
        )
    }

    function handleDelete(id) {
        props.deleteProject({ id: id })
    }

    function userLogout() {
        props.setSettingsClose()
        props.logout()
    }

    return (
        <AdminBar>
            <Brand>
                <BrandLink href="/dashboard">ProProject Studio</BrandLink>
            </Brand>
            {searchBar}
            <AdminControls>
                <NavItemLink link={'/dashboard'}>
                    <Home css="fill:var(--text-color)" />
                </NavItemLink>
                {settings}
            </AdminControls>
        </AdminBar>
    )
}



function mapState(state) {
    const { authentication, userInterface } = state
    return { authentication, userInterface }
}

const actionCreators = {
    logout: userActions.logout,
    deleteProject: projectActions.deleteProject,
    setSettingsOpen: uiActions.setSettingsOpen,
    setSettingsClose: uiActions.setSettingsClose,
}

const connectedMenu = connect(mapState, actionCreators)(Menu)
export { connectedMenu as Menu }

const ConDropdownMenu = connect(mapState, actionCreators)(DropdownMenu)
