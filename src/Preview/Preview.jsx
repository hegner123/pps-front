import React from 'react';
import { connect } from 'react-redux';
import {TableArea} from '../_components/project/p_table';
import { PDetails } from '../_components/project/p_details';
import { seedData } from '../_assets/seedData.json';


class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data:seedData[4],
            project: seedData[4].title

        }
    }


    render() {
        return (
    <div>
        <div className="row">
            <div className="full-width">
            <div className='row project-title'>
                <PDetails data={this.state.project}/>
                </div>
                <div className="row grid-area">
                   <TableArea
                   data={seedData}/>
                </div>

            </div>

        </div>
    </div>
        );
    }
}



const connectedPreview = connect()(Preview);
export { connectedPreview as Preview };