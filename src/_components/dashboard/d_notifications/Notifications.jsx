import React from 'react';
import { connect } from 'react-redux';
import {Notification, AlertWrap, CardTime, Card, CardBody, CardContent ,CardTitle, Title} from './style'


class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            new:true
        }
    }

    render() {
        let alert;
        if (this.state.new === true){
            alert = < Notification/>
        };

        return (
            <Card>
                <AlertWrap>
                    {alert}
                </AlertWrap>
                <CardTitle>
                    <Title>radXDAD</Title>
                </CardTitle>
                <CardBody>
                    <CardContent>radxDAD added lyrics to 4 songs.</CardContent>
                    <CardTime>
                        <CardContent> 2m</CardContent>
                    </CardTime>
                </CardBody>
            </Card>
        );
    }
}



const connectedNotifications = connect()(Notifications);
export { connectedNotifications as Notifications };