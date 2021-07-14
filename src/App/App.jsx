import React from "react";
import { Router, Switch, Route, Redirect, useParams } from "react-router-dom";
import { alertActions } from "../_actions";
import { connect } from "react-redux";
import { history } from "../_helpers";
import { PrivateRoute } from "../_components/privateRoute";
import { Branding } from "../_components/brand";
import { HomePage } from "../HomePage";
import { SingleProject } from "../Project";
import { LoginPage } from "../_forms/Login";
import { Register } from "../_forms/Register";
import { Dashboard } from "../Dashboard";
import { NewSong } from "../_forms/NewSong";
import { NewProject } from "../_forms/NewProject";
import { uiActions } from "../_actions/ui.actions";
import { userInterface } from "../_reducers/ui.reducer";
import "../_assets/css/normalize.css";
import "../_assets/css/main.css";
import "../_assets/css/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pop: 0,
    };
    this.handleUiClose = this.handleUiClose.bind(this);
    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  handleUiClose(nav) {
    if (nav) {
      this.props.navClose();
    } else {
      this.props.dropdownClose();
    }
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(this.state.pop), 100);
  }
  tick(i) {
    i++;
    this.setState({ pop: i });
  }
  render() {
    let alertDisplay;
    const { alert } = this.props;
    const { userInterface } = this.props;
    const openState = userInterface.navDropdown || userInterface.dropdownOpen;

    if (this.state.pop <= 10) {
      alertDisplay = (
        <div className="alert-bar">
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
        </div>
      );
    } else if (this.state.pop > 10) {
      clearInterval(this.timerID);
      alertDisplay = <div className="alert-bar"></div>;
    }

    return (
      <div
        className="container"
        onClick={() =>
          openState ? this.handleUiClose(userInterface.navDropdown) : ""
        }
      >
        <Router history={history}>
          <Branding logout={() => logout(this.props)} />
          <Switch>
            <PrivateRoute exact path="/project/:id" component={SingleProject} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/new-project" component={NewProject} />
            <PrivateRoute path="/project/:id/new-song/" component={NewSong} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={Register} />
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
  navClose: uiActions.navClose,
  dropdownClose: uiActions.dropdownClose,
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
