import React from 'react';
import { Router, Switch, Route, Redirect, useParams} from "react-router-dom";
import { alertActions } from '../_actions';
import { connect, useSelector } from 'react-redux';
import { history } from '../_helpers';
import { PrivateRoute } from '../_components/privateRoute';
import { Branding } from '../_components/brand'
import { CoomingSoon, HomePage } from '../HomePage';
import { SingleProject } from '../Project';
import { LoginPage } from '../Login';
import { RegisterPage } from '../RegisterPage';
import { Dashboard } from '../Dashboard';
import { NewSong } from '../NewSong'
import '../_assets/css/reset.css';
import '../_assets/css/style.css';
import { NewProject } from '../NewProject';
import { uiActions} from '../_actions/ui.actions'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            pop:0
        }
        this.handleNavClose = this.handleNavClose.bind(this)
        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    handleNavClose(){
        this.props.navClose()
    }
     componentDidMount(){
        this.timerID = setInterval(() => this.tick(this.state.pop),100);
    }
    tick(i) {i++
        this.setState({pop: i});
      }
    render() {
        let alertDisplay;
        const { alert } = this.props;
        const { userInterface } = this.props;

        if (this.state.pop <= 10){
            alertDisplay = <div className='alert-bar'>{alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            </div>
        } else if (this.state.pop > 10){
            clearInterval(this.timerID);
            alertDisplay = <div className='alert-bar'></div>
        }

        return (
            <div className='container' onClick={() => userInterface.navDropDown ? this.handleNavClose(): ""} >
                <Router history={ history } >
                <Branding logout={() => logout(this.props)}/>
                    <Switch>
                        <PrivateRoute exact path="/project/:id" component={SingleProject}/>
                        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                        <PrivateRoute exact path="/new-project" component={NewProject} />
                        <PrivateRoute  path="/new-song/:id" component={NewSong} />
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/register" component={RegisterPage} />
                        <Route exact path="/login" component={LoginPage} />
                    </Switch>
                </Router>
                {alertDisplay}
            </div>
        );
    }
}

function mapState(state) {
    const { alert, userInterface } = state;
    return { alert, userInterface };
}


const actionCreators = {
    clearAlerts: alertActions.clear,
    navClose: uiActions.navClose
};


const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };