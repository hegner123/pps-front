import React from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    useRouteMatch,
} from 'react-router-dom'
import { Friends, Spotify, UserAccount } from '../_components/account'
import { Main, AccountMenuItem } from './style'

const Account = (props) => {
    let { path, url } = useRouteMatch()
    const userInfo = props.authentication.user
    const fullUrl = useLocation().pathname

    return (
        <Main>
            <section className="user-info">
                <div className="user-img">
                    <img
                        src="https://via.placeholder.com/300"
                        alt="user picture"
                    />
                </div>
                <div>
                    <p>Username: {userInfo.userName}</p>
                    <p>
                        Name: {userInfo.firstName} {userInfo.lastName}
                    </p>
                </div>
            </section>
            <aside className="account-menu">
                <ul>
                    <AccountMenuItem
                        active={fullUrl === '/account'}
                        id="account"
                    >
                        <Link to={url}>Account</Link>
                    </AccountMenuItem>
                    <AccountMenuItem
                        active={fullUrl === '/account/friends'}
                        id="friends"
                    >
                        <Link to={`${url}/friends`}>Friends</Link>
                    </AccountMenuItem>
                    <AccountMenuItem
                        active={fullUrl === '/account/spotify'}
                        id="spotify"
                    >
                        <Link to={`${url}/spotify`}>Spotify</Link>
                    </AccountMenuItem>
                </ul>
            </aside>
            <section className="account-options">
                <Switch>
                    <Route exact path={path}>
                        <UserAccount />
                    </Route>
                    <Route exact path={`${path}/friends`}>
                        <Friends />
                    </Route>
                    <Route exact path={`${path}/spotify`}>
                        <Spotify />
                    </Route>
                </Switch>
            </section>
        </Main>
    )
}

function mapState(state) {
    const { authentication } = state
    return { authentication }
}

// const actionCreators = {

// }

const connectedAccount = connect(mapState)(Account)
export { connectedAccount as Account }
