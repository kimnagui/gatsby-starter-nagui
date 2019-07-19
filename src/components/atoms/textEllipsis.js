import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${props => props.line || 1};
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 24px;
    height: ${props => props.line * 24 || 24}px;

    margin-bottom: 5px;
    color: inherit;
`;

export const TextEllipsis = ({ text, line, color }) => {
    return (
        <StyledText line={line} color={color}>
            {text}
        </StyledText>
    );
};

export default TextEllipsis;
