import React from 'react';
import { connect } from 'react-redux';


class Profile extends React.Component {


    render() {
        return (
    <div>

    </div>
        );
    }
}



const connectedProfile = connect()(Profile);
export { connectedProfile as Profile };