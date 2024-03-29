import React, { useState, useEffect, useRef } from 'react'
import { connect, useSelector } from 'react-redux'
import { projectActions, uiActions } from '../../../../_actions'
import {
    CompletedCell,
    IncompleteCell,
    NaCell,
    TextCell,
    TitleCell,
    DropdownSong,
    IconButton,
    NavItems,
} from './style'
import Edit from '../../../../_assets/icons/more.svg'

import { CSSTransition } from 'react-transition-group'
import { useOnClickOutside } from '../../../../_hooks/onClickOutside'

function TableCell(props) {
    const [songId, setSongId] = useState(props.songId)
    const [songTitle, setSongTitle] = useState(props.songTitle)
    const [instrument, setInstrument] = useState(props.instrument)
    const [cellStatus, setCellStatus] = useState(props.data)
    const [cellId, setCellId] = useState(props.cellId)
    const [projectSlug, setProjectSlug] = useState(props.projectId)
    const [projectId, setProjectId] = useState(props.projectId)
    const userInterface = props.userInterface

    const { authentication } = props
    const { user } = authentication
    const { userSettings } = user

    let dropdownStatus

    if (userInterface.id === songId) {
        dropdownStatus = true
    } else {
        dropdownStatus = false
    }

    let display
    if (props.instrument) {
        if (cellStatus == 'Complete') {
            return (display = (
                <CompletedCell
                    onClick={() => {
                        props.changeCellStatus(
                            projectSlug,
                            songId,
                            instrument,
                            cellStatus,
                            cellId
                        )
                        setCellStatus('Incomplete')
                    }}
                    songName={songTitle}
                    instrument={instrument}
                    userColor={userSettings.completeColor}
                />
            ))
        } else if (cellStatus == 'Incomplete') {
            return (display = (
                <IncompleteCell
                    onClick={() => {
                        props.changeCellStatus(
                            projectSlug,
                            songId,
                            instrument,
                            cellStatus,
                            cellId
                        )
                        setCellStatus('Complete')
                    }}
                    songName={songTitle}
                    instrument={instrument}
                    userColor={userSettings.incompleteColor}
                />
            ))
        } else {
            return (display = <NaCell />)
        }
    } else if (props.songTitle) {
        display = (
            <TitleCell onClick={() => props.setSelected(props.songObject)}>
                <span>{songTitle}</span>
                <NavItem
                    openState={dropdownStatus}
                    cellId={songId}
                    dropdownOpen={(e) => props.dropdownOpen(e)}
                    icon={<Edit css="height:20px;width:20px;" />}
                >
                    <ConDropdownMenu
                        songId={songId}
                        projectId={projectId}
                        currentS={songId}
                    ></ConDropdownMenu>
                </NavItem>
            </TitleCell>
        )
    } else {
        display = <TextCell>{cellStatus}</TextCell>
    }
    return display
}

function NavItem(props) {
    let dropdownMatch = false
    if (props.openId === props.cellId) {
        dropdownMatch = true
    }
    return (
        <NavItems>
            <IconButton onClick={() => props.dropdownOpen(props.cellId)}>
                {props.icon}
            </IconButton>
            {props.openState && props.children}
        </NavItems>
    )
}

function DropdownMenu(props) {
    const [activeMenu, setActiveMenu] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null)

    const dropdownRef = useRef(null)

    useOnClickOutside(dropdownRef, () => props.dropdownClose())

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    const handleDelete = props.deleteSong
    function calcHeight(el) {
        const height = el.offsetHeight
        setMenuHeight(height)
    }
    function DropdownItem(props) {
        return (
            <DropdownSong onClick={() => props.deleteSong()}>
                {props.children}
            </DropdownSong>
        )
    }

    return (
        <div
            className="dropdown-song"
            style={{ height: menuHeight }}
            css={'width:130px;z-index:200;'}
            ref={dropdownRef}
        >
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem
                        deleteSong={() =>
                            handleDelete(
                                props.songId,
                                props.projectId,
                                props.authentication.user.id,
                                props.authentication.user.userName
                            )
                        }
                    >
                        Delete Song
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

function mapState(state) {
    const { cellStatus, authentication, userInterface } = state
    return { cellStatus, authentication, userInterface }
}

const actionCreators = {
    changeCellStatus: projectActions.changeCellStatus,
    deleteSong: projectActions.deleteSong,
    dropdownOpen: uiActions.dropdownOpen,
    dropdownClose: uiActions.dropdownClose,
    getProjects: projectActions.getProjects,
    setSelected: projectActions.setSelected,
}

const ConDropdownMenu = connect(mapState, actionCreators)(DropdownMenu)

const connectedTableCell = connect(mapState, actionCreators)(TableCell)
export { connectedTableCell as TableCell }
