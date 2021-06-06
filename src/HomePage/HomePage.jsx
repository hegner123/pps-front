import React from 'react';
import  Graphic from "../_assets/images/Image1.svg";
import { Header, SubTitle, SubText, ActionList, Action, ActionItem, RowEven, EvenSpace, HeaderContent, HeaderImage } from './style';

export function HomePage () {
    
        return (
        <RowEven>
            <EvenSpace>
                <HeaderContent>
                    <Header>ProProject Studio</Header>
                        <SubTitle>
                            <SubText>
                                <p>Make managing your recording projects easier with ProProject Studio. The only project management app that is both online and in your DAW.</p>
                            </SubText>
                                <ActionList>
                                    <Action>
                                        <ActionItem href='/register'>Get Started</ActionItem>
                                    </Action>
                                    <Action spaced>
                                        <ActionItem href='/login'>Login</ActionItem>
                                    </Action>
                                </ActionList>
                        </SubTitle>
                </HeaderContent>
                    <Graphic  css="height: 100%;width:50%"/>
            </EvenSpace>
        </RowEven>
        );
    }








export function CoomingSoon(){
        return (
        <div className="row-even">
            <div className="even-space">
                <div className="header-content w-50">
                    <div className="header-inner">
                        <h1>ProProject Studio</h1>
                            <div className="sub-title">
                                <div className="sub-title-text">
                                <p>In Progress. Make managing your recording projects easier with ProProject Studio. The only project management app that is both online and in your DAW.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <img src={Image} alt="logo" className="img-fluid header-img w-50"/>
            </div>
        </div>
        );
    }




