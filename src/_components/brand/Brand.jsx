import React from 'react';
import { connect } from 'react-redux';



class Branding extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="row admin-bar">
            <div className="brand">
                <a href="/">
                <h5>ProProject Studio</h5>
                </a>
            </div>
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




