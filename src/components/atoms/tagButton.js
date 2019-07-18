import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
    margin: 5px 5px 5px 0;
`;

const StyledButton = styled.div`
    display: inline-block;
    padding: 5px 10px;
    border: 2px solid #3f0f3f;
    border-radius: 15px;

    color: #3f0f3f;

    font-size: 15px;
    line-height: 15px;

    svg,
    span {
        vertical-align: middle;
        color: #808080;
    }

    &:hover {
        color: #fff;
        background-color: #3f0f3f;
    }
`;

const TagButton = ({ link, children }) => {
    return (
        <StyledLink to={link}>
            <StyledButton>{children}</StyledButton>
        </StyledLink>
    );
};

export default TagButton;
