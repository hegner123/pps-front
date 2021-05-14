import React from 'react';
import { connect } from 'react-redux';
import Image from "../_public/images/Image1.svg";


class HomePage extends React.Component {


    render() {
        return (
    <div>
        <div className="row-even">
            <div className="even-space">
                <img src={Image} alt="logo" className="img-fluid header-img w-50"/>
                <div className="header-content w-50">
                    <h1>ProProject Studio</h1>
                    <div className="sub-title">
                        <p className="sub-title-text">Manage your Recording Projects with ProProject Studio.</p>
                        <ul className="actions-list">
                            <li className="actions">
                                <a href="/register">Get Started</a>
                            </li>
                            <li className="actions">
                                <a href="/preview">Learn More</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    }
}



const connectedHomePage = connect()(HomePage);
export { connectedHomePage as HomePage };