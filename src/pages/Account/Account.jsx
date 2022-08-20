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
import {
    Friends,
    Spotify,
    UserAccount,
    Invitations,
} from '../../_components/account'
import { uploadFile } from '../../_services'
import {
    Main,
    ProfileSection,
    ProfileImageParent,
    AccountSection,
    AccountMenu,
    AccountMenuItem,
    ControlPanel,
} from './style'
import { getFiles } from '../../_hooks/getFiles/getFiles'

const Account = (props) => {
    let { path, url } = useRouteMatch()
    const userInfo = props.authentication.user
    const fullUrl = useLocation().pathname
    const [userFile, setUserFile] = useState('#000')
    const [userImg, setUserImg] = useState('#000')
    const [hasSectionTitle, setSectionTitle] = useState('Account')

    function handleFileChange(e) {
        const fileList = e.target.files[0]
        setUserFile(fileList)
        upload(userFile)
    }

    function upload(file) {
        uploadFile(file)
        setUserFile('')
    }

    useEffect(() => {
        switch (fullUrl) {
            case '/account':
                setSectionTitle('Account')

                break
            case '/account/invitations':
                setSectionTitle('Invitations')

                break
            case '/account/friends':
                setSectionTitle('Friends')

                break
            case '/account/spotify':
                setSectionTitle('Spotify')

                break

            default:
                break
        }
    }, [fullUrl])

    return (
        <Main>
            <ProfileSection>
                <ProfileImageParent>
                    <div css="height:150px;width:150px">
                        <img
                            src="https://via.placeholder.com/150x150"
                            alt="placeholder"
                        />
                        <Upload fileChange={(e) => handleFileChange(e)} />
                    </div>
                </ProfileImageParent>
                <div>
                    <p>Username: {userInfo.userName}</p>
                    <p>
                        Name: {userInfo.firstName} {userInfo.lastName}
                    </p>
                </div>
            </ProfileSection>
            <AccountSection>
                <h1
                    css={`
                        display: block;
                        grid-column: 3/-2;
                    `}
                >
                    {hasSectionTitle}
                </h1>
                <AccountMenu>
                    <AccountMenuItem
                        active={fullUrl === '/account'}
                        id="account"
                    >
                        <Link to={url}>Account</Link>
                    </AccountMenuItem>
                    <AccountMenuItem
                        active={fullUrl === '/account/invitations'}
                        id="invitations"
                    >
                        <Link to={`${url}/invitations`}>Invitations</Link>
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
                </AccountMenu>
                <ControlPanel>
                    <Switch>
                        <Route exact path={path}>
                            <UserAccount />
                        </Route>
                        <Route exact path={`${path}/invitations`}>
                            <Invitations />
                        </Route>
                        <Route exact path={`${path}/friends`}>
                            <Friends />
                        </Route>
                        <Route exact path={`${path}/spotify`}>
                            <Spotify />
                        </Route>
                    </Switch>
                </ControlPanel>
            </AccountSection>
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
