import React from 'react';
import { connect } from 'react-redux';
import {TableArea} from '../_components/table'
import { seedData } from '../../public/seedData.json'


class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data:{}
        }
    }
    setData(){
        let dataCopy = Object.assign({}, seedData)
        this.setState({data:dataCopy})
        console.log(this.state)
        }

        componentDidMount(){
            this.setData
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
                            Profile
                        </li>
                        <li className="admin-item">
                            Projects
                        </li>
                    </ul>
                </section>

                <section className="row grid-area">
                   <TableArea
                   data={seedData}/>
                </section>
            </div>

        </div>
    </div>
        );
    }
}



const connectedPreview = connect()(Preview);
export { connectedPreview as Preview };