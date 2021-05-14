import React from 'react';
import {  Router, Route, Switch } from "react-router-dom";
import { alertActions } from '../_actions';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { PrivateRoute } from '../_components/privateRoute';
import { HomePage } from '../HomePage';
import { Preview } from '../Preview';
import { Profile }  from '../Profile';
import { LoginPage } from '../Login';
import { RegisterPage } from '../RegisterPage';
import '../_public/css/reset.css';
import '../_public/css/style.css'

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
                        <PrivateRoute exact path="/profile" component={Profile} />
                        <Route exact path="/register" component={RegisterPage} />
                        <Route exact path="/login" component={LoginPage} />
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


const actionCreators = {
    clearAlerts: alertActions.clear
};


const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };