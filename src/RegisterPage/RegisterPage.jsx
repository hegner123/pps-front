import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                userName: '',
                hash: ''
            },
            submitted: false
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
                [name]: value
            }
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
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="">

                <section className="row">
                    <div className="center">
                        <div className="form-section">
                            <h4>Register</h4>
                            <form name="form" onSubmit={this.handleSubmit}>
                            {submitted && !user.firstName &&
                                        <div className="help-block">First Name is required</div>
                                    }
                                <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />

                                </div>
                                {submitted && !user.lastName &&
                                        <div className="help-block">Last Name is required</div>
                                    }
                                <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />

                                </div>
                                {submitted && !user.userName &&
                                        <div className="help-block">Username is required</div>
                                    }
                                <div className={'form-group' + (submitted && !user.userName ? ' has-error' : '')}>
                                    <label htmlFor="userName">Username</label>
                                    <input type="text" className="form-control" name="userName" value={user.userName} onChange={this.handleChange} />

                                </div>
                                {submitted && !user.hash &&
                                        <div className="help-block">Password is required</div>
                                    }
                                <div className={'form-group' + (submitted && !user.hash ? ' has-error' : '')}>
                                    <label htmlFor="hash">Password</label>
                                    <input type="password" className="form-control" name="hash" value={user.hash} onChange={this.handleChange} />

                                </div>
                                <div className="form-group form-actions">
                                    <button className="btn btn-action">Register</button>

                                    <Link to="/login" className="btn btn-link">Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };