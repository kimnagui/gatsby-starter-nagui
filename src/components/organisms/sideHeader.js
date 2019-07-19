import React, { useState } from "react";
import styled from "styled-components";
import Circle from "../atoms/circle";
import Bio from "./bio";
import ClickPopup from "../atoms/clickPopup";
import { StaticQuery, graphql, Link } from "gatsby";

const Container = styled.header`
    padding: 20px;
    font-size: 15px;
    background-color: ${props => props.theme.side.defaultBack};
`;

const BioContainer = styled.div`
    position: relative;

    & > div {
        width: 240px;
        border-radius: 6px;
        padding: 8px;
        top: 125%;
        color: ${props => props.theme.bio.defaultText};
        background-color: ${props => props.theme.bio.defaultBack};
        &:after {
            bottom: 99%;
            left: 25%;
            margin-left: -5px;
            border-width: 7px;
            border-style: solid;
            border-color: transparent transparent
                ${props => props.theme.bio.defaultBack} transparent;
        }
    }
`;

const Author = styled.span`
    color: ${props =>
        props.changeColor
            ? props.theme.side.bio.activeText
            : props.theme.side.bio.defaultText};

    #circle {
        background-color: ${props => props.theme.side.bio.circle};
    }

    i {
        padding-left: 5px;
        vertical-align: middle;
    }

    span {
        vertical-align: middle;
    }

    &:hover {
        cursor: pointer;
        color: ${props => props.theme.side.bio.activeText};
    }
`;

const BlogTitle = styled(Link)`
    display: block;
    color: inherit;
    font-weight: bold;
    margin-bottom: 0;
    margin-left: 10px;
    font-size: 30px;
`;

const SideHeader = () => {
    const [bioOpen, setBioOpen] = useState(false);
    return (
        <StaticQuery
            query={query}
            render={data => {
                const node = data.site.siteMetadata;
                return (
                    <Container>
                        <BlogTitle to={"/"}>{node.title}</BlogTitle>
                        <BioContainer>
                            <Author
                                onClick={() => setBioOpen(true)}
                                changeColor={bioOpen}
                            >
                                <Circle size={"13"} />
                                <span>{node.authorNickName}</span>
                                <i className="fas fa-chevron-down" />
                            </Author>
                            <ClickPopup
                                open={bioOpen}
                                close={() => setBioOpen(false)}
                            >
                                <Bio />
                            </ClickPopup>
                        </BioContainer>
                    </Container>
                );
            }}
        />
    );
};

const query = graphql`
    query {
        site {
            siteMetadata {
                title
                authorNickName
            }
        }
    }
`;

export default SideHeader;
