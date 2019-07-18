import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Image from "gatsby-image";
import TextEllipsis from "components/atoms/textEllipsis";
import PostInfo from "components/molecules/postInfo";

const StyledLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    #content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-right: 10px;
        overflow: hidden;

        h3 {
            margin: 0;
            margin-bottom: 5px;
            color: #000;
        }
    }
`;

const StyledImg = styled(Image)`
    width: 120px;
    height: 120px;
    border-radius: 10px;
`;

const PostListItem = ({ node }) => {
    const isCover = !!node.frontmatter.cover;

    return (
        <StyledLink to={node.fields.slug} cover={isCover ? 1 : 0}>
            <div id="content">
                <h3>
                    <TextEllipsis line={1} text={node.frontmatter.title} />
                </h3>

                <TextEllipsis line={2} color={"#808080"} text={node.excerpt} />

                <PostInfo date={node.frontmatter.date} color={"#000"} />
            </div>
            {isCover && (
                <div>
                    <StyledImg
                        fixed={node.frontmatter.cover.childImageSharp.fixed}
                    />
                </div>
            )}
        </StyledLink>
    );
};

export default PostListItem;
