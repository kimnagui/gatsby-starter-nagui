import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
    margin: 5px 10px 5px 0;
`;

const StyledButton = styled.span`
    padding: 5px 10px;
    border-radius: 5px;

    color: ${props => props.theme.tag.text};
    background-color: ${props => props.theme.tag.back};
    font-size: 15px;

    &:hover {
        text-decoration: underline;
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
