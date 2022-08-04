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
import { Friends, Spotify, UserAccount } from '../../_components/account'
import { uploadFile } from '../../_services'
import { Main, AccountMenuItem } from './style'
import { getFiles } from '../../_hooks/getFiles/getFiles'

const Account = (props) => {
    let { path, url } = useRouteMatch()
    const userInfo = props.authentication.user
    const fullUrl = useLocation().pathname
    const [userFile, setUserFile] = useState('#000')
    const [userImg, setUserImg] = useState('#000')

    function handleFileChange(e) {
        const fileList = e.target.files[0]
        setUserFile(fileList)
        upload(userFile)
    }

    function upload(file) {
        uploadFile(file)
        setUserFile('')
    }

    return (
        <Main>
            <section css={'grid-column:4/-4'}>
                <div>
                    <div css="height:150px;width:150px">
                        <img
                            src="https://via.placeholder.com/150x150"
                            alt="placeholder"
                        />
                    </div>
                </div>
                <div>
                    <p>Username: {userInfo.userName}</p>
                    <p>
                        Name: {userInfo.firstName} {userInfo.lastName}
                    </p>
                    <Upload fileChange={(e) => handleFileChange(e)} />
                </div>
            </section>
            <section css={'grid-column:4/-4;'}>
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
                <div>
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
                </div>
            </section>
        </Main>
    )
}

// const actionCreators = {

// }

const Upload = (props) => {
    return (
        <div css={'padding-top:20px;'}>
            <label
                htmlFor="upload-image"
                css="  border: 1px solid #ccc;display: inline-block;cursor: pointer; max-width:200px;"
            >
                Upload Profile Pic
            </label>
            <input
                type="file"
                name="upload-image"
                id="upload-image"
                onChange={(e) => props.fileChange(e)}
                css={'display:none'}
            />
        </div>
    )
}
function mapState(state) {
    const { authentication } = state
    return { authentication }
}
const connectedAccount = connect(mapState)(Account)
export { connectedAccount as Account }
