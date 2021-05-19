import React from 'react';
import { connect } from 'react-redux';


class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            new:true
        }
    }

    render() {
        let alert;
        if (this.state.new === true){
            alert = <div className="notification">
               
            </div>
        };

        return (
    <div className="card">
        <div className="alert-wrap">
        {alert}
        </div>
        <div className="card-title">
        <h6>radXDAD</h6>

        </div>
        <div className="card-body">
            <p className="card-content">radxDAD added lyrics to 4 songs.</p>
            <div className="card-time">
                <div>2m</div>
            </div>
        </div>

    </div>
        );
    }
}



const connectedNotifications = connect()(Notifications);
export { connectedNotifications as Notifications };