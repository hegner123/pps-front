import React from 'react';
import { connect } from 'react-redux';
import {TableArea} from '../_components/table';
import { PDetails } from '../_components/p_details';
import { seedData } from '../_public/seedData.json';


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
                <section className="row admin-bar">
                    <div className="brand">
                        <a href="/">
                        <h5>ProProject Studio</h5>
                        </a>
                    </div>
                    <ul className="row admin-controls">
                        <li className="admin-item">
                            <a href='/profile' className='link'>Profile</a>
                        </li>
                        <li className="admin-item">
                        <a href='/preview' className='link active-link'>Projects</a>
                        </li>
                    </ul>
                </section>

                <section className="row grid-area">
                   <TableArea
                   data={seedData}/>
                </section>
                <div className='row'>
                <PDetails data={this.state.project}/>
                </div>
            </div>

        </div>
    </div>
        );
    }
}



const connectedPreview = connect()(Preview);
export { connectedPreview as Preview };