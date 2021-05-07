import React from 'react';
import { connect } from 'react-redux';


class Preview extends React.Component {


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
                            Item
                        </li>
                        <li className="admin-item">
                            Item
                        </li>
                        <li className="admin-item">
                            Item
                        </li>
                        <li className="admin-item">
                            Item
                        </li>
                        <li className="admin-item">
                            Item
                        </li>
                        <li className="admin-item">
                            Item
                        </li>
                        <li className="admin-item">
                            Item
                        </li>
                    </ul>
                </section>

                <section className="row grid-area">
             <table>

                 <thead>
                     <tr>
                         <th>
                             thing one
                         </th>
                         <th>
                             thing two
                         </th>
                     </tr>
                 </thead>
                 <tbody>
                 <tr>
                     <td>
                         corn1
                     </td>
                     <td>
                         corn2
                     </td>
                 </tr>
                 <tr>
                     <td>
                         corn3
                     </td>
                     <td>
                         corn4
                     </td>
                 </tr>
                 </tbody>
             </table>
                </section>
            </div>

        </div>
    </div>
        );
    }
}



const connectedHomePage = connect()(Preview);
export { connectedHomePage as Preview };