import React from 'react';
import { connect } from 'react-redux';
import Image from "./images/Image1.svg";


class HomePage extends React.Component {


    render() {
        return (
    <div>
        <div className="row">
            <div className="header-box">
                <img src={Image} alt="logo" className="img-fluid header-img" />
                <div className="header-content">
                    <h1>Pro-Project Studio</h1>
                    <div className="">
                        <ul className="row">
                            <li className="actions">
                                <a href="/login">Login</a>
                            </li>
                            <li className="actions">
                                <a href="/register">Register</a>
                            </li>
                            <li className="actions">
                                <a href="/preview">Preview</a>
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