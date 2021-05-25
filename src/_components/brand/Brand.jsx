import React from 'react';
import {useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {userActions} from '../../_actions/user.actions';
import { AdminBar, Brand, Search, AdminControls, AdminItem, Input, BrandLink} from './style';



 const Branding = (props) => {
     const loggedIn = useSelector(state => state.authentication.loggedIn)
        let searchBar;
        let logo;
        if (loggedIn === true){
            searchBar =     <Search>
                                <Input type="text" name="search" id="search" placeholder='Search'/>
                            </Search>
            logo = <BrandLink href="/dashboard">
            ProProject Studio
        </BrandLink>

        } else {
            logo = <BrandLink href="/">
            ProProject Studio
        </BrandLink>
        }
        console.log(props)

        return (
            <AdminBar>
                <Brand>
                   {logo}
                </Brand>
                {searchBar}
                <AdminControls>
                    <AdminItem>
                        <a href='/dashboard' className='link'>Profile</a>
                    </AdminItem>
                    <AdminItem>
                     <a onClick={() => props.logout()} className='link'>Logout</a>
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




