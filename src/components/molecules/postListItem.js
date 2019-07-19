import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Image from "gatsby-image";
import TextEllipsis from "components/atoms/textEllipsis";
import PostInfo from "components/molecules/postInfo";

const PostItem = styled(Link)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`;

const TextContents = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    h2 {
        margin: 0;
        margin-bottom: 5px;
        padding-bottom: 0;
        border-bottom: none;
        color: ${props => props.theme.postlistitem.title};
    }

    p:nth-child(2) {
        color: ${props => props.theme.postlistitem.content};
    }

    div {
        color: ${props => props.theme.postlistitem.info};

        #circle {
            background-color: ${props => props.theme.postlistitem.info};
        }
    }
`;

const Thumbnail = styled(Image)`
    width: 120px;
    height: 120px;
    border-radius: 10px;
`;

const PostListItem = ({ node }) => {
    const isCover = !!node.frontmatter.cover;

    return (
        <PostItem to={node.fields.slug}>
            <TextContents>
                <h2>
                    <TextEllipsis line={1} text={node.frontmatter.title} />
                </h2>

                <TextEllipsis line={2} text={node.excerpt} />

                <PostInfo
                    date={node.frontmatter.date}
                    category={node.frontmatter.category}
                />
            </TextContents>
            {isCover && (
                <div>
                    <Thumbnail
                        fixed={node.frontmatter.cover.childImageSharp.fixed}
                    />
                </div>
            )}
        </PostItem>
    );
};

export default PostListItem;
