import React, { useState } from "react";
import styled from "styled-components";
import Circle from "../atoms/circle";
import Bio from "./bio";
import ClickPopup from "../atoms/clickPopup";
import { StaticQuery, graphql, Link } from "gatsby";

const StyledSideHeader = styled.header`
    padding: 20px;
    font-size: 13px;
`;

const BioContainer = styled.div`
    position: relative;
`;

const Author = styled.span`
    vertical-align: middle;
    color: ${props => (props.changeColor ? "#fff" : "gray")};

    i {
        padding-left: 5px;
    }

    &:hover {
        cursor: pointer;
        color: white;
    }
`;

const BlogTitle = styled(Link)`
    display: block;
    color: white;
    font-weight: bold;
    margin-bottom: 0;
    margin-left: 10px;
    font-size: 30px;

    &:hover {
        text-decoration: none;
    }
`;

const SideHeader = () => {
    const [bioOpen, setBioOpen] = useState(false);
    return (
        <StaticQuery
            query={query}
            render={data => {
                const node = data.site.siteMetadata;
                return (
                    <StyledSideHeader>
                        <BlogTitle to={"/"}>{node.title}</BlogTitle>
                        <BioContainer>
                            <Author
                                onClick={() => setBioOpen(true)}
                                changeColor={bioOpen}
                            >
                                <Circle size={"13"} color={"#49c39e"} />
                                {node.authorNickName}
                                <i className="fas fa-chevron-down" />
                            </Author>
                            <ClickPopup
                                open={bioOpen}
                                close={() => setBioOpen(false)}
                            >
                                <Bio />
                            </ClickPopup>
                        </BioContainer>
                    </StyledSideHeader>
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
