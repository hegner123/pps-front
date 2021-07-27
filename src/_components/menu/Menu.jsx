import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { userActions } from "../../_actions/user.actions";
import { projectActions } from "../../_actions/project.actions";
import Home from "../../_assets/icons/home.svg";
import LogoutIcon from "../../_assets/icons/logout.svg";
import DeleteIcon from "../../_assets/icons/delete.svg";
import Settings from "../../_assets/icons/settings.svg";
import {
  IconButton,
  NavItems,
  AdminBar,
  Brand,
  Search,
  AdminControls,
  Input,
  BrandLink,
} from "./style";
import { CSSTransition } from "react-transition-group";
import { uiActions } from "../../_actions";
import { useOnClickOutside } from "../../_hooks/onClickOutside";

const Menu = (props) => {
  const loggedIn = props.authentication.loggedIn;
  const current = useSelector((state) =>
    state.userData.current ? state.userData.current._id : ""
  );
  const ui = props.userInterface;
  let searchBar;
  let settings;
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
    );

    settings = (
      <NavItem
        icon={<Settings css="fill:var(--text-color)" />}
        navOpen={() => props.setSettingsOpen()}
        openState={ui.isSettingsOpen}
      >
        <ConDropdownMenu
          logOut={() => userLogout()}
          deleteProject={() => handleDelete(current)}
          currentP={current.projectTitle}
        ></ConDropdownMenu>
      </NavItem>
    );
  }

  function handleDelete(id) {
    props.deleteProject({ id: id });
  }

  function userLogout() {
    props.setSettingsClose();
    props.logout();
  }

  return (
    <AdminBar>
      <Brand>
        <BrandLink href="/dashboard">ProProject Studio</BrandLink>
      </Brand>
      {searchBar}
      <AdminControls>
        <NavItemLink link={"/dashboard"}>
          <Home css="fill:var(--text-color)" />
        </NavItemLink>
        {settings}
      </AdminControls>
    </AdminBar>
  );
};

function NavItemLink(props) {
  return (
    <NavItems>
      <IconButton href={props.link}>{props.children}</IconButton>
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

function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const ref = useRef();
  useOnClickOutside(ref, () => props.setSettingsClose());
  // State for our modal

  const location = useLocation().pathname;

  useEffect(() => {
    setMenuHeight(ref.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        css="color:var(--text-color)"
        onClick={() => props.action()}
      >
        <span>{props.icon}</span>
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={ref}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          {location.includes("project") && (
            <DropdownItem
              action={() => props.deleteProject()}
              icon={
                <DeleteIcon css="fill: var(--text-color);height:20px;width:20px;" />
              }
            >
              Delete Project
            </DropdownItem>
          )}

          <DropdownItem
            action={() => props.logOut()}
            icon={
              <LogoutIcon css="fill: var(--text-color);height:20px;width:20px;" />
            }
          >
            Log Out
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function mapState(state) {
  const { authentication, userInterface } = state;
  return { authentication, userInterface };
}

const actionCreators = {
  logout: userActions.logout,
  deleteProject: projectActions.deleteProject,
  setSettingsOpen: uiActions.setSettingsOpen,
  setSettingsClose: uiActions.setSettingsClose,
};

const connectedMenu = connect(mapState, actionCreators)(Menu);
export { connectedMenu as Menu };

const ConDropdownMenu = connect(mapState, actionCreators)(DropdownMenu);
