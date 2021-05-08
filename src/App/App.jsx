import React from 'react';
import {  Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { HomePage } from '../HomePage';
import { Preview } from '../Preview';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }
    render() {
        const { alert } = this.props;
        return (
            <div>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/preview" component={Preview} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}


const connectedApp = connect(mapState)(App);
export { connectedApp as App };