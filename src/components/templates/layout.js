import React, { Fragment } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import SideHeader from "components/organisms/sideHeader";
import SideContent from "components/organisms/sideContent";
import MainHeader from "components/organisms/mainHeader";
import MainContent from "components/organisms/mainContent";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    html, body {
        overflow: auto;

        ${props =>
            props.mobileOpen &&
            css`
                overflow: hidden;
                position: fixed;
                width: 100%;
                height: 100%;
            `}

        div[role='group'] {
            /* iphone의 elastic scrolling 시, 고정된 헤더가 가려지지 않도록 body 에 속해있던 속성을 하단 div로 가져옴 */
            -webkit-overflow-scrolling: touch;
        }
    }
`;

const SideBar = styled.div`
    min-width: 280px;
    height: 100%;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    overflow-x: hidden;

    background-color: #3f0f3f;
    color: #ffffff;

    transition: margin 0.5s;
    margin-left: ${props => (props.mobileOpen ? 0 : "-280px")};

    @media all and (min-width: 992px) {
        min-width: 280px;
        margin-left: 0 !important;
    }
`;

const Main = styled.div`
    margin-top: 50px;
    margin-left: 0;

    @media all and (min-width: 992px) {
        margin-top: 0;
        margin-left: 280px !important;
    }
`;

const MainOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.8;

    z-index: 2;

    @media all and (min-width: 992px) {
        display: none;
    }
`;

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile_side: false
        };
    }

    sideToggle = e => {
        const open = !this.state.mobile_side;
        this.setState({
            mobile_side: open
        });
    };

    profileClick = e => {};

    render() {
        const { children, activeMenu } = this.props;
        const { mobile_side } = this.state;
        return (
            <Fragment>
                <GlobalStyle mobileOpen={mobile_side} />
                <SideBar mobileOpen={mobile_side}>
                    <SideHeader />
                    <SideContent activeMenu={activeMenu} />
                </SideBar>
                <Main>
                    {mobile_side && <MainOverlay onClick={this.sideToggle} />}
                    <MainHeader sideToggle={this.sideToggle} />
                    <MainContent>{children}</MainContent>
                </Main>
            </Fragment>
        );
    }
}
