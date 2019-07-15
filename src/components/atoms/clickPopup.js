import React from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

const StyledSpan = styled.div`
    visibility: ${props => (props.show ? "visiable" : "hidden")};
    width: 240px;
    background-color: #fff;
    color: #000;
    border-radius: 6px;
    padding: 8px;
    position: absolute;
    z-index: 1;
    top: 125%;

    &:after {
        content: "";
        position: absolute;
        bottom: 99%;
        left: 25%;
        margin-left: -5px;
        border-width: 7px;
        border-style: solid;
        border-color: transparent transparent #fff transparent;
    }
`;

const ClickPopup = ({ open, close, children }) => {
    ClickPopup.handleClickOutside = () => close();
    return <StyledSpan show={open}>{children}</StyledSpan>;
};

const clickOutsideConfig = {
    handleClickOutside: () => ClickPopup.handleClickOutside
};

export default onClickOutside(ClickPopup, clickOutsideConfig);
