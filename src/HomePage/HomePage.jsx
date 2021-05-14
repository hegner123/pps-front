import React from 'react';
import { connect } from 'react-redux';
import Image from "../_public/images/Image1.svg";


class HomePage extends React.Component {


    render() {
        return (
    <div>
        <div className="row-even">
            <div className="even-space">
                <img src={Image} alt="logo" className="img-fluid header-img" />
                <div className="header-content">
                    <h1>Pro-Project Studio</h1>
                    <div className="sub-title">
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