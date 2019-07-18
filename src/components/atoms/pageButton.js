import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
    padding: 0.5em;

    font-weight: bold;
    color: inherit;
`;

const StyledButton = styled.li`
    display: inline-block;
    border-radius: 3px;
    margin: 10px;

    ${props =>
        props.active
            ? css`
                  color: #fff;
                  background-color: #3f0f3f;
              `
            : css`
                  color: #808080;
              `};

    &:hover {
        color: #fff;
        background-color: #3f0f3f;
    }
`;

export const PageButton = ({ link, children, active }) => {
    return (
        <StyledButton active={active}>
            <StyledLink to={link}>{children}</StyledLink>
        </StyledButton>
    );
};

export default PageButton;
