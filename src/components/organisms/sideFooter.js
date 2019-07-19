import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    bottom: 0;
    padding: 15px;
`;

const SideFooter = ({ children }) => {
    return <Container>{children}</Container>;
};

export default SideFooter;
