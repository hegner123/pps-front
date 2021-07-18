import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Notification,
  AlertWrap,
  CardTime,
  Card,
  CardBody,
  CardContent,
  CardTitle,
  Title,
} from "./style";

const Notifications = (props) => {
  const [isNew, setIsNew] = useState(true);
  let alert;
  let body;
  if (isNew) {
    alert = <Notification />;
  }
  console.log(props.activity);

  switch (props.type) {
    case "update":
      body = `${props.user.slice(
        0,
        5
      )} marked ${props.activity.activity.song.slice(0, 5)} ${
        props.activity.activity.instrument
      } as ${props.activity.activity.action}`;

      break;
    default:
      body = "";
  }
  return (
    <Card onClick={() => setIsNew(false)}>
      <AlertWrap>{alert}</AlertWrap>
      <CardTitle>
        <Title>{props.user.slice(0, 5)}</Title>
      </CardTitle>
      <CardBody>
        <CardContent>{body}</CardContent>
        <CardTime>
          <CardContent>{props.activity.updatedAt.slice(0, 3)}</CardContent>
        </CardTime>
      </CardBody>
    </Card>
  );
};

const connectedNotifications = connect()(Notifications);
export { connectedNotifications as Notifications };
