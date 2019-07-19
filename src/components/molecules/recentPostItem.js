import React from "react";
import { Link } from "gatsby";
import TextEllipsis from "components/atoms/textEllipsis";
import styled from "styled-components";

const Container = styled.div`
    padding: 0 10px 10px 10px;
    width: 100%;

    @media all and (min-width: 992px) {
        display: ${props => props.display || "inline-block"};
        width: 25%;
    }
`;

const Cover = styled(Link)`
    display: inline-block;
    margin: 0 !important;
    width: 100%;
    height: 100px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 10px;

    &:hover {
        text-decoration: underline #fff;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        color: ${props => props.theme.recentpostitem.text};
        padding: 10px;
        border-radius: inherit;

        p {
            font-weight: bold;
        }

        span {
            font-size: 12px;
        }
    }

    @media all and (min-width: 992px) {
        height: 120px;
    }
`;

const RecentPostItem = ({ data }) => {
    const link = data.node.fields.slug;
    const node = data.node.frontmatter;
    const image = !!node.cover ? node.cover.childImageSharp.fixed.src : "";
    return (
        <Container>
            <Cover image={image} to={link}>
                <div>
                    <TextEllipsis line={2} text={node.title} />
                    <span>{node.date}</span>
                </div>
            </Cover>
        </Container>
    );
};

export default RecentPostItem;
