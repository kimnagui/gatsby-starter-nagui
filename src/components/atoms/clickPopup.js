import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

const Container = styled.div`
    visibility: ${props => (props.show ? "visiable" : "hidden")};
    position: absolute;
    z-index: 1;

    &:after {
    content: "";
    position: absolute;
    }
`;

class ClickPopup extends Component {
    handleClickOutside = e => this.props.close();
    render() {
        const { open, children } = this.props;
        return <Container show={open}>{children}</Container>;
    }
}

export default onClickOutside(ClickPopup);
