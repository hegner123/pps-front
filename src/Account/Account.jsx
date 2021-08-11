import React, { useEffect, useState } from 'react'
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
import { uploadFile } from '../_services'
import { Main, AccountMenuItem } from './style'
import { getFiles } from '../_hooks/getFiles/getFiles'

const Account = (props) => {
    let { path, url } = useRouteMatch()
    const userInfo = props.authentication.user
    const fullUrl = useLocation().pathname
    const [userFile, setUserFile] = useState('')
    const [userImg, setUserImg] = useState('')

    async function loadFiles() {
        const img = await getFiles('mlh-thumb.jpeg')
        setUserImg(img)
        console.log(userImg)
    }

    useEffect(() => {
        loadFiles()
    }, [])

    function handleFileChange(e) {
        const fileList = e.target.files[0]
        setUserFile(fileList)
    }

    function upload() {
        uploadFile(userFile)
        setUserFile('')
    }

    return (
        <Main>
            <section className="user-info">
                <div className="user-img">
                    <img
                        src={userImg}
                        alt="user picture"
                        css={'width:300px;'}
                    />
                </div>
                <div>
                    <p>Username: {userInfo.userName}</p>
                    <p>
                        Name: {userInfo.firstName} {userInfo.lastName}
                    </p>
                    <div>
                        <input
                            type="file"
                            name="upload-image"
                            id="upload-image"
                            onChange={(e) => handleFileChange(e)}
                            css={'cursor:pointer;display:block'}
                        />
                        <button
                            onClick={() => upload()}
                            css={'display:block;cursor:pointer'}
                        >
                            Upload
                        </button>
                    </div>
                </div>
            </section>
            <section className="account">
                <ul className="account-menu-items">
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
