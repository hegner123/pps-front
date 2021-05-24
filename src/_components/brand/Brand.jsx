import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { AdminBar, Brand, Search, AdminControls, AdminItem, Input, BrandLink} from './style';



 const Branding = (props)=> {

     const loggedIn = useSelector(state => state.authentication.loggedIn)
        let searchBar;
        if (loggedIn === true){
            searchBar =     <Search>
                                <Input type="text" name="search" id="search" placeholder='Search'/>
                            </Search>
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
                    <AdminItem>
                        <a href='/dashboard' className='link'>Profile</a>
                    </AdminItem>
                </AdminControls>
            </AdminBar>
        );
    }




const connectedBranding = connect()(Branding);
export { connectedBranding as Branding };




