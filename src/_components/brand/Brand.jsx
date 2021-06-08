import React, {useState, useRef, useEffect} from 'react'
import {useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {userActions} from '../../_actions/user.actions';
import Home from "../../_assets/icons/home.svg";
import LogoutIcon from "../../_assets/icons/logout.svg";
import Settings from "../../_assets/icons/settings.svg"
import { IconButton, NavItems, AdminBar, Brand, Search, AdminControls, AdminItem, Input, BrandLink, Logout, Profile} from './style';
import {CSSTransition} from 'react-transition-group';
import {css} from 'styled-components';


 function Branding(props){
     const loggedIn = useSelector(state => state.authentication.loggedIn)
        let searchBar;
        if (loggedIn === true){
            searchBar =     <Search>
                                <Input type="text" name="search" id="search" placeholder='Search'/>
                            </Search>
            // logo = <BrandLink href="/dashboard">
            // ProProject Studio
        // </BrandLink>

        }
        return (
            <AdminBar>
                <Brand>
                    <BrandLink href="/">
                        ProProject Studio
                    </BrandLink>
                </Brand>
                {searchBar}
                <AdminControls>
                    <NavItemLink link={'/dashboard'}>
                      <Home css="fill:var(--text-color)"/>
                    </NavItemLink>
                     <NavItem icon={<Settings css="fill:var(--text-color)"/>}>
                         <DropdownMenu logout={()=>props.logout()}>
                         </DropdownMenu>
                     </NavItem>
                </AdminControls>
            </AdminBar>
        );
    }
    function mapState(state) {
        const { loggingIn } = state;
        return { loggingIn };
    }

    const actionCreators = {
        logout: userActions.logout
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
    const [open,setOpen] = useState(false);
    return (
      <NavItems>
          <IconButton href="#" onClick={() => setOpen(!open)}>
             {props.icon}
          </IconButton>
        {open && props.children}
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
        <a href="#" className="menu-item" css="color:var(--text-color)"onClick={() => props.logout()}>
           <span ><LogoutIcon css="fill: var(--text-color);"/></span>
          {props.children}
         
        </a>
      )
    }
    return(
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
        <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames='menu-primary' onEnter={calcHeight} >
            <div className="menu">
            {/* <DropdownItem
            leftIcon={<LogoutIcon/>} goToMenu='settings'>Settings</DropdownItem> */}
            <DropdownItem logout={()=> props.logout()}>Log Out</DropdownItem>
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
