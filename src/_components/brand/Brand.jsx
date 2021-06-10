import React, {useState, useRef, useEffect} from 'react'
import {useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {userActions} from '../../_actions/user.actions';
import {projectActions} from '../../_actions/project.actions';
import Home from "../../_assets/icons/home.svg";
import LogoutIcon from "../../_assets/icons/logout.svg";
import DeleteIcon from "../../_assets/icons/delete.svg";
import Settings from "../../_assets/icons/settings.svg";
import { IconButton, NavItems, AdminBar, Brand, Search, AdminControls, AdminItem, Input, BrandLink, Logout, Profile} from './style';
import {CSSTransition} from 'react-transition-group';
import {css} from 'styled-components';
import { uiActions } from '../../_actions';


 function Branding(props){
      const loggedIn = useSelector(state => state.authentication.loggedIn)
      const current = useSelector(state => state.userData.current ? state.userData.current._id : '');
      const navDropDown = useSelector(state => state.userInterface.navDropDown)
        let searchBar;
        let settings;
        if (loggedIn === true){
            searchBar =   (  <Search>
                                <Input type="text" name="search" id="search" placeholder='Search'/>
                            </Search>)

            settings = (  <NavItem openState={navDropDown} navOpen={()=> props.navOpen()} icon={<Settings css="fill:var(--text-color)"/>}>
            <DropdownMenu logout={()=>props.logout()} deleteProject={() => handleDelete(current)} currentP={current.projectTitle} >
            </DropdownMenu>
        </NavItem>

            )
        } 



        function handleDelete( id){
          props.deleteProject({id:id});
      }

        return (
            <AdminBar>
                <Brand>
                    <BrandLink href="/dashboard">
                        ProProject Studio
                    </BrandLink>
                </Brand>
                {searchBar}
                <AdminControls>
                    <NavItemLink link={'/dashboard'}>
                      <Home css="fill:var(--text-color)"/>
                    </NavItemLink>
                    {settings}
                </AdminControls>
            </AdminBar>
        );
    }
    function mapState(state) {
        const { loggingIn } = state;
        return { loggingIn };
    }

    const actionCreators = {
        logout: userActions.logout,
        deleteProject: projectActions.deleteProject,
        navOpen: uiActions.navOpen
    };


const connectedBranding = connect(mapState, actionCreators)(Branding);
export { connectedBranding as Branding };



  function NavItemLink(props) {
    return (
        <NavItems>
          <IconButton href={props.link}>
             {props.children}
          </IconButton>
        </NavItems>
    );
  }
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
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
        <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames='menu-primary' onEnter={calcHeight} >
            <div className="menu">

             <DropdownItem action={() => props.deleteProject()} icon={<DeleteIcon css="fill: var(--text-color);height:20px;width:20px;"/>}>Delete Project</DropdownItem>
            <DropdownItem action={()=> props.logout()} icon={<LogoutIcon css="fill: var(--text-color);height:20px;width:20px;"/>}>Log Out</DropdownItem>
            </div>
        </CSSTransition>
        {/* <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames='menu-secondary' onEnter={calcHeight} >
            <div className="menu">
            <DropdownItem>Corn</DropdownItem>
            <DropdownItem>Corn</DropdownItem>
            <DropdownItem>Corn</DropdownItem>
            <DropdownItem
            leftIcon={<BoltIcon/>} goToMenu='main'>My Profile</DropdownItem>
            </div>
        </CSSTransition> */}
      </div>
    );
  }
