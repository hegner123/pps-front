import React from 'react';
import {useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {userActions} from '../../_actions/user.actions';
import { AdminBar, Brand, Search, AdminControls, AdminItem, Input, BrandLink, Logout, Profile} from './style';



 const Branding = (props) => {
     const loggedIn = useSelector(state => state.authentication.loggedIn)
        let searchBar;
        let logo;
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
                    <AdminItem>
                        <Profile href='/dashboard' className='link'>Dashboard</Profile>
                    </AdminItem>
                    <AdminItem>
                     <Logout onClick={() => props.logout()} className='link'>Logout</Logout>
                    </AdminItem>
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




