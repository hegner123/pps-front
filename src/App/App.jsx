import React from 'react';
import {  Router, Route, Switch } from "react-router-dom";
import { alertActions } from '../_actions';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { PrivateRoute } from '../_components/privateRoute';
import { Branding } from '../_components/brand'
import { CoomingSoon, HomePage } from '../HomePage';
import { Preview } from '../Preview';
import { Profile }  from '../Profile';
import { LoginPage } from '../Login';
import { RegisterPage } from '../RegisterPage';
import { Dashboard } from '../Dashboard';
import '../_assets/css/reset.css';
import '../_assets/css/style.css';

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
                <Branding/>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/preview" component={Preview} />
                        <PrivateRoute exact path="/profile" component={Profile} />
                        <Route exact path="/dashboard" component={Dashboard} />
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