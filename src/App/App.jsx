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
import { NewProject } from '../NewProject';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            pop:0
        }
        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }
     componentDidMount(){
        this.timerID = setInterval(() => this.tick(this.state.pop),10);
    }
    tick(i) {i++ 
        this.setState({pop: i});
      }
    render() {
        let alertDisplay;
        const { alert } = this.props;

        if (this.state.pop <= 100){
            alertDisplay = <div className='alert-bar'>{alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            </div>
        } else if (this.state.pop > 100){
            clearInterval(this.timerID);
            alertDisplay = <div className='alert-bar'></div>
        }
        return (
            <div className='container'>
                <Branding/>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/register" component={RegisterPage} />
                        <Route exact path="/login" component={LoginPage} />
                        <PrivateRoute exact path="/preview" component={Preview} />
                        <PrivateRoute exact path="/profile" component={Profile} />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        <PrivateRoute exact path="/project" component={NewProject} />
                    </Switch>
                </Router>
                {alertDisplay}
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