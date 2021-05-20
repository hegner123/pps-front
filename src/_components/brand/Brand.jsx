import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';



 const Branding = (props)=> {

     const loggedIn = useSelector(state => state.authentication.loggedIn)
        let searchBar;
        if (loggedIn === true){
            searchBar =     <div className="search">
            <input type="text" name="search" id="search" placeholder='Search'/>
            </div>
        }

        return (
            <nav className="row admin-bar">
                <div className="brand">
                    <a href="/">
                    <h5>ProProject Studio</h5>
                    </a>
                </div>
                {searchBar}
                <ul className="admin-controls">
                    <li className="admin-item">
                        <a href='/dashboard' className='link'>Profile</a>
                    </li>
                    <li className="admin-item">
                    <a href='/preview' className='link'>Projects</a>
                    </li>
                </ul>
        </nav>
        );
    }




const connectedBranding = connect()(Branding);
export { connectedBranding as Branding };




