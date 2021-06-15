import React, {useState, useEffect, useRef} from 'react';
import {  connect, useSelector } from 'react-redux';
import { projectActions } from '../../../_actions';
import { CompletedCell, IncompleteCell, NaCell, TextCell, TitleCell,CellButton , IconButton, NavItems } from './style';
import  Edit  from '../../../_assets/icons/more.svg';
import {store} from '../../../_helpers';
import {CSSTransition} from 'react-transition-group';

function  TableCell (props) {
    const [songId,setSongId] = useState(props.songId)
    const [songTitle,setSongTitle] = useState(props.songTitle)
    const [instrument,setInstrument] = useState(props.instrument)
    const [cellStatus,setCellStatus] = useState(props.data)
    const [cellId,setCellId] = useState(props.cellId)
    const [projectSlug, setProjectSlug] = useState(props.projectId)
    const [navDropDown,setNavDropDown] = useState(false)


    function navOpen(){
       return setNavDropDown(!navDropDown);
    }

        let display;
        if ( props.instrument){

            if ( cellStatus == 'Complete'){
                 return display = <CompletedCell onClick={() => {props.changeCellStatus(projectSlug, songId, instrument, cellStatus,cellId); setCellStatus('Incomplete') }} songName={songTitle} instrument={instrument}/>
            } else if ( cellStatus == 'Incomplete'){
                return display = <IncompleteCell onClick={() => {props.changeCellStatus(projectSlug, songId, instrument, cellStatus, cellId); setCellStatus('Complete')}} songName={songTitle} instrument={instrument}/>
            } else {
                return display = <NaCell/>
            }
        } else if (props.songTitle){
            display =   <TitleCell>
                            {songTitle}
                                <NavItem openState={navDropDown} navOpen={()=> navOpen()} icon={ <Edit  css="fill: var(--text-color);height:20px;width:20px;" />}>
                                    <DropdownMenu deleteSong={() => handleDelete(songId)} currentS={songId} >
                                    </DropdownMenu>
                                </NavItem>
                        </TitleCell>
        } else {
         display =   <TextCell>
                        {cellStatus}
                    </TextCell>
        }
        return (
                display
        );
    }

    function mapState(state) {
        const { cellStatus } = state;
        return { cellStatus };
    }

    const actionCreators = {
        changeCellStatus: projectActions.changeCellStatus,
    };

const connectedTableCell = connect(mapState, actionCreators)(TableCell);
export { connectedTableCell as TableCell };



function NavItem(props) {
    return (
      <NavItems>
          <IconButton href="#" onClick={() => props.navOpen()}>
             {props.icon}
          </IconButton>
        {props.openState && props.children}
      </NavItems>
    );
  }


  function DropdownMenu(props){
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null)

    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])


    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }

    function DropdownItem(props){
      return(
        <a href="#" className="menu-item" css="color:var(--text-color)" onClick={() => props.action()}>
           <span >{props.icon}</span>
          {props.children}
        </a>
      )
    }
    return(
      <div className="dropdown-song" style={{ height: menuHeight }} ref={dropdownRef}>
        <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames='menu-primary' onEnter={calcHeight} >
            <div className="menu">
             <DropdownItem action={() => props.deleteSong()} >Delete Song</DropdownItem>
            </div>
        </CSSTransition>
      </div>
    );
  }



