import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
    margin: 5px 15px;

    &:hover {
        text-decoration: none;
    }
`;

const StyledButton = styled.div`
    color: ${props => (props.active ? "#ebb424" : "black")};

    font-size: 15px;
    font-weight: 600;

    vertical-align: middle;

    svg,
    span {
        vertical-align: middle;
        color: gray;
    }

    &:hover {
        color: #ebb424;
    }
`;

export const PageButton = ({ link, children, active }) => {
    return (
        <StyledLink to={link}>
            <StyledButton active={active}>{children}</StyledButton>
        </StyledLink>
    );
};

export default PageButton;
