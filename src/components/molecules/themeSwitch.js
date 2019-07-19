import React from "react";
import styled from "styled-components";
import Switch from "react-switch";

const Container = styled.div`
    display: inline-block;

    i {
        font-size: 20px;
        vertical-align: middle;
        padding: 5px;
        padding-left: 8px;

        &.fa-moon {
            color: #212121;
        }
        &.fa-sun {
            color: #3f0f3f;
        }
    }
`;

const ThemeSwitch = ({ onChange, checked }) => {
    return (
        <Container>
            <Switch
                onChange={onChange}
                checked={checked}
                width={60}
                height={30}
                handleDiameter={24}
                offColor={"#fff"}
                offHandleColor={"#3f0f3f"}
                onColor={"#999999"}
                onHandleColor={"#212121"}
                checkedIcon={<i className="fas fa-moon" />}
                uncheckedIcon={<i className="fas fa-sun" />}
            />
        </Container>
    );
};

export default ThemeSwitch;
