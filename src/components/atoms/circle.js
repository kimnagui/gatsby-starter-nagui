import React from "react";
import styled from "styled-components";

const StyledCircle = styled.div`
    display: ${props => props.display || "inline-block"};
    width: ${props => props.size + "px"};
    height: ${props => props.size + "px"};
    border-radius: 50%;
    background-color: inherit;
    vertical-align: middle;
    margin: 0px 10px;
`;

const Circle = ({ display, size }) => {
    return <StyledCircle id="circle" display={display} size={size} />;
};

export default Circle;
