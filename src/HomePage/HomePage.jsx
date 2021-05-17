import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Image from "../_assets/images/Image1.svg";


class HomePage extends React.Component {


    render() {
        return (
    <div>
        <div className="row-even">
            <div className="even-space">
                <div className="header-content w-50">
                    <div className="header-inner">
                        <h1>ProProject Studio</h1>
                            <div className="sub-title">
                                <div className="sub-title-text">
                                <p>Make managing your recording projects easier with ProProject Studio. The only project management app that is both online and in your DAW.</p>
                                </div>
                                <ul className="action-list">
                                    <li className="action">
                                        <Link to="/register" className="action-item">Get Started</Link>
                                    </li>
                                    <li className="action">
                                        <Link to="/preview" className="action-item">Learn More</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <img src={Image} alt="logo" className="img-fluid header-img w-50"/>
            </div>
        </div>
    </div>
        );
    }
}



const connectedHomePage = connect()(HomePage);
export { connectedHomePage as HomePage };