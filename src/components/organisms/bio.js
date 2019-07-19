import React, { Fragment } from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: inherit;
    color: inherit;

    p {
        margin-left: 10px;
        margin-right: 10px;
    }
`;

const BioNameAndPhoto = styled.div`
    display: flex;
    margin-bottom: 10px;

    div img {
        min-width: 70px;
        border-radius: 6px;
    }

    div:first-child {
        margin-right: 10px;
    }

    div:last-child {
        margin: auto 0;
        div:first-child {
            font-size: 20px;
            font-weight: bold;
        }
        div:last-child {
            color: ${props => props.theme.bio.subText};
        }
    }
`;

const BioSocial = styled.div`
    width: 100%;
    display: flex;

    a {
        display: block;
        margin-bottom: 5px;
        cursor: pointer;
        color: ${props => props.theme.bio.socialButton};
    }

    span {
        margin-right: 5px;
    }
`;

const Bio = () => {
    return (
        <StaticQuery
            query={bioQuery}
            render={data => {
                const {
                    authorNickName,
                    authorFullName,
                    authorDescription,
                    social
                } = data.site.siteMetadata;
                return (
                    <Container>
                        <BioNameAndPhoto>
                            <Image
                                fixed={data.avatar.childImageSharp.fixed}
                                alt={authorNickName}
                            />
                            <div>
                                <div>{authorNickName}</div>
                                <div>{authorFullName}</div>
                            </div>
                        </BioNameAndPhoto>
                        <p>{authorDescription}</p>
                        <BioSocial>
                            {social && (
                                <Fragment>
                                    {social.github && (
                                        <a
                                            href={social.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="fa-stack">
                                                <i className="fas fa-circle fa-stack-2x" />
                                                <i className="fab fa-github fa-stack-1x fa-inverse fa-lg" />
                                            </span>
                                        </a>
                                    )}
                                    {social.email && (
                                        <a href={`mailto:${social.email}`}>
                                            <div>
                                                <span className="fa-stack">
                                                    <i className="fas fa-circle fa-stack-2x" />
                                                    <i className="fas fa-envelope fa-stack-1x fa-inverse" />
                                                </span>
                                            </div>
                                        </a>
                                    )}
                                </Fragment>
                            )}
                        </BioSocial>
                    </Container>
                );
            }}
        />
    );
};

const bioQuery = graphql`
    query {
        avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
            childImageSharp {
                fixed(width: 70, height: 70) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                authorFullName
                authorNickName
                authorDescription
                social {
                    email
                    github
                }
            }
        }
    }
`;

export default Bio;
