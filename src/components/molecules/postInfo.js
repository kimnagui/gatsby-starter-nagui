import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Circle from "components/atoms/circle";

const Container = styled.div`
    font-size: ${props => (props.size ? props.size + "px" : "13px")};
    color: ${props => props.color || "#808080"};

    span {
        color: inherit;
        vertical-align: middle;
    }

    a {
        color: inherit;
        vertical-align: middle;
        &:hover {
            text-decoration: underline;
        }
    }

    div {
        margin: 0 10px;
    }
`;

const PostInfo = ({ category, date, size, color }) => {
    return (
        <Container color={color} size={size}>
            {category && (
                <Fragment>
                    <Link to={`/category/${category}`}>{category}</Link>
                    <Circle size={"3"} color={color} />
                </Fragment>
            )}

            <span>{date}</span>
        </Container>
    );
};

export default PostInfo;
