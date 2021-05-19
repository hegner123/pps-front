import React from 'react';
import { connect } from 'react-redux';



class Branding extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data:'Logged In'
        }
    }
    render() {

        let searchBar;

        if (this.state.data === 'Logged In'){
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
}



const connectedBranding = connect()(Branding);
export { connectedBranding as Branding };




