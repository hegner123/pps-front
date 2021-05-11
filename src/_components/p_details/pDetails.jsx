import React from 'react';
import { connect } from 'react-redux';



class PDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <h1>{this.props.data}</h1>
        </div>
        );
    }
}



const connectedDetails = connect()(PDetails);
export { connectedDetails as PDetails };