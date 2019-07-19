import React from "react";
import styled from "styled-components";

const StyledMainHeader = styled.header`
    width: 100%;
    height: 50px;

    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;

    color: ${props => props.theme.main.header.text};
    background-color: ${props => props.theme.main.header.back};

    @media all and (min-width: 992px) {
        display: none;
    }
`;

const MenuButton = styled.button`
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    i {
        padding: 12px;
        color: ${props => props.theme.main.header.button};
    }
`;

const MainHeader = ({ sideToggle }) => {
    return (
        <StyledMainHeader>
            <MenuButton onClick={sideToggle}>
                <i className="fas fa-bars fa-lg" />
            </MenuButton>
        </StyledMainHeader>
    );
};

export default MainHeader;
