import React from 'react';
import { connect } from 'react-redux';
import { ProjectTitle } from './style';



class PDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <ProjectTitle>{this.props.data}</ProjectTitle>
        </div>
        );
    }
}



const connectedDetails = connect()(PDetails);
export { connectedDetails as PDetails };