import React from "react";
import Graphic from "../_assets/images/Image1.svg";
import {
  Header,
  SubTitle,
  SubText,
  ActionList,
  Action,
  ActionItem,
  EvenSpace,
  HeaderContent,
  HeaderImage,
} from "./style";

export function HomePage() {
  return (
    <div>
      <EvenSpace>
        <HeaderContent>
          <div>
            <Header>ProProject Studio</Header>
            <SubTitle>
              <SubText>
                <p>
                  Make managing your recording projects easier with ProProject
                  Studio. The only project management app that is both online
                  and in your DAW.
                </p>
              </SubText>
              <ActionList>
                <Action>
                  <ActionItem href="/register">Get Started</ActionItem>
                </Action>
                <Action spaced>
                  <ActionItem href="/login">Login</ActionItem>
                </Action>
              </ActionList>
            </SubTitle>
          </div>
          
        </HeaderContent>
        <div css={"display:flex; justify-content:center;"}>
          <Graphic css="height: 100%;width:50%" />
        </div>
      </EvenSpace>
    </div>
  );
}
