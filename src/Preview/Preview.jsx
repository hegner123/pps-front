import React from 'react';
import { connect } from 'react-redux';


class Preview extends React.Component {


    render() {
        return (
    <div>
        <div className="row">
            <div className="row">
                <h1>People</h1>
            </div>
            <div className="row">
                <h1>People</h1>
            </div>
        </div>
    </div>
        );
    }
}



const connectedHomePage = connect()(Preview);
export { connectedHomePage as Preview };