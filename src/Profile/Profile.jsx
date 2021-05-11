import React from 'react';
import { connect } from 'react-redux';


class Profile extends React.Component {


    render() {
        return (
    <div>
        <div className="row">
            <section className="row admin-bar">
                    <div className="brand">
                        <a href="/">
                        <h5>ProProject Studio</h5>
                        </a>
                    </div>
                    <ul className="row admin-controls">
                        <li className="admin-item">
                            <a href='/profile' className='link active-link'>Profile</a>
                        </li>
                        <li className="admin-item">
                        <a href='/preview' className='link '>Projects</a>
                        </li>
                    </ul>
                </section>
            </div>
    </div>
        );
    }
}



const connectedProfile = connect()(Profile);
export { connectedProfile as Profile };