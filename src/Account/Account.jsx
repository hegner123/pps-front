import React from 'react'
import { connect } from 'react-redux'
import { Main } from './style'

const Account = (props) => {
    const userInfo = props.authentication.user
    return (
        <Main>
            <section>
                <div>{userInfo.userName}</div>
                <div>
                    {userInfo.firstName} {userInfo.lastName}
                </div>
                <div>{userInfo.userName}</div>
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
