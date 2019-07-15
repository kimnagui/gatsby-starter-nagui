import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PostInfo from "components/molecules/postInfo";
import TagList from "components/molecules/tagList";
import RecentPostList from "components/organisms/recentPostList";
import Layout from "./layout";
import SEO from "../seo";

const PostHeader = styled.div`
    h1 {
        padding: 0;
        margin-bottom: 10px;
        border: none;
    }

    hr {
        margin: 20px 0 40px 0;
    }
`;

const PostContent = styled.div`
    .gatsby-highlight pre[class*="language-"] {
        padding: 20px;
    }
`;

const PostFooter = styled.div`
    margin-top: 40px;

    hr {
        margin: 20px 0;
    }
`;

class BlogPost extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;
        const {
            title,
            date,
            category,
            tags,
            cover
        } = this.props.data.markdownRemark.frontmatter;
        const { recent } = this.props.pageContext;

        return (
            <Layout
                location={this.props.location}
                title={siteTitle}
                activeMenu={category}
            >
                <SEO
                    title={title}
                    description={post.excerpt}
                    image={cover.childImageSharp.fluid.src}
                    keywords={tags || []}
                />

                <PostHeader>
                    <h1>{title}</h1>
                    <PostInfo category={category} date={date} />
                    <hr />
                </PostHeader>

                <PostContent>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </PostContent>

                <PostFooter>
                    <TagList data={tags} />
                    <hr />
                    {category && (
                        <RecentPostList category={category} data={recent} />
                    )}
                </PostFooter>
            </Layout>
        );
    }
}

export default BlogPost;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                authorNickName
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "YYYY-MM-DD")
                category
                tags
                cover {
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            src
                        }
                    }
                }
            }
        }
    }
`;
