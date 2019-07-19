import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Circle from "components/atoms/circle";

const Container = styled.div`
    font-size: ${props => (props.size ? props.size + "px" : "13px")};

    span {
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

const PostInfo = ({ category, date, size, link }) => {
    return (
        <Container size={size}>
            {category && (
                <Fragment>
                    {link ? (
                        <Link to={`/category/${category}`}>{category}</Link>
                    ) : (
                        <span>{category}</span>
                    )}
                    <Circle size={"3"} />
                </Fragment>
            )}

            <span>{date}</span>
        </Container>
    );
};

export default PostInfo;
