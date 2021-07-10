import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import {
  Button,
  Centered,
  FormSection,
  FormTitle,
  FormGroup,
  HelpBlock,
  Label,
  Row,
  Input,
} from "./style";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "",
        lastName: "",
        userName: "",
        hash: "",
        recentProjects: [],
      },
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.firstName && user.lastName && user.userName && user.hash) {
      this.props.register(user);
    }
  }

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <div>
        <Row>
          <Centered>
            <FormSection>
              <FormTitle>Register</FormTitle>
              <form name="form" onSubmit={this.handleSubmit}>
                {submitted && !user.firstName && (
                  <HelpBlock> First Name is required</HelpBlock>
                )}
                <FormGroup>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={user.firstName}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                {submitted && !user.lastName && (
                  <HelpBlock> Last Name is required</HelpBlock>
                )}
                <FormGroup>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={user.lastName}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                {submitted && !user.userName && (
                  <HelpBlock> Username is required</HelpBlock>
                )}
                <FormGroup>
                  <Label htmlFor="userName">Username</Label>
                  <Input
                    type="text"
                    className="form-control"
                    name="userName"
                    value={user.userName}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                {submitted && !user.hash && (
                  <HelpBlock> Password is required</HelpBlock>
                )}
                <FormGroup>
                  <Label htmlFor="hash">Password</Label>
                  <Input
                    type="password"
                    className="form-control"
                    name="hash"
                    value={user.hash}
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Button>Register</Button>
                </FormGroup>
              </form>
            </FormSection>
          </Centered>
        </Row>
      </div>
    );
  }
}

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register,
};

const connectedRegister = connect(mapState, actionCreators)(Register);
export { connectedRegister as Register };
