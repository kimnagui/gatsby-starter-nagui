import React from "react";
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

const ClickPopup = ({ open, close, children }) => {
    ClickPopup.handleClickOutside = () => close();
    return <Container show={open}>{children}</Container>;
};

const clickOutsideConfig = {
    handleClickOutside: () => ClickPopup.handleClickOutside
};

export default onClickOutside(ClickPopup, clickOutsideConfig);
