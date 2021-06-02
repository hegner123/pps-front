import React, {useState, useRef, useEffect} from 'react'
import {useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {userActions} from '../../_actions/user.actions';
import { ReactComponent as ArrowIcon } from "../../_assets/icons/arrow.svg"
import { ReactComponent as BoltIcon } from "../../_assets/icons/bolt.svg";
import { ReactComponent as BellIcon } from "../../_assets/icons/bell.svg";
import { ReactComponent as CaretIcon } from "../../_assets/icons/caret.svg";
import { ReactComponent as ChevronIcon } from "../../_assets/icons/chevron.svg";
import { ReactComponent as CogIcon } from "../../_assets/icons/cog.svg";
import { ReactComponent as MessengerIcon } from "../../_assets/icons/messenger.svg";
import { ReactComponent as PlusIcon } from "../../_assets/icons/plus.svg";
import { AdminBar, Brand, Search, AdminControls, AdminItem, Input, BrandLink, Logout, Profile} from './style';
import {CSSTransition} from 'react-transition-group';


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
                    <BrandLink href="/dashboard">
                        ProProject Studio
                    </BrandLink>
                </Brand>
                {searchBar}
                <AdminControls>
                    <NavItemLink link={'/dashboard'}>
                        D
                    </NavItemLink>
                     <NavItem>
                         <DropdownMenu></DropdownMenu>
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



function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          {props.children}
        </ul>
      </nav>
  
    );
  }
  function NavItemLink(props) {
    
    return (
        <li className="nav-item">
  
          <a href={props.link} className="icon-button">
             {props.children}
          </a>
  
         
          </li>
    );
  }
  function NavItem(props) {
    const [open,setOpen] = useState(false);
    return (
        <li className="nav-item">
  
          <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
             {props.icon}
          </a>
  
          {open && props.children}
          </li>
    );
  }
  
  function DropdownMenu(){
  
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
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          
  
          {props.children}
  
          
        </a>
      )
    }
    return(
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames='menu-primary' onEnter={calcHeight} >
            <div className="menu">
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem
            leftIcon={<CogIcon/>} goToMenu='settings'>Settings</DropdownItem>
            </div>
        </CSSTransition>
  
        <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames='menu-secondary' onEnter={calcHeight} >
            <div className="menu">
            <DropdownItem>Corn</DropdownItem>
            <DropdownItem>Corn</DropdownItem>
            <DropdownItem>Corn</DropdownItem>
            <DropdownItem
            leftIcon={<BoltIcon/>} goToMenu='main'>My Profile</DropdownItem>
            </div>
        </CSSTransition>
      </div>
    );
  }
  
  

