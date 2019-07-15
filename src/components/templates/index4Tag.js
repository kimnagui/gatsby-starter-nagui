import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import SEO from "../seo";
import PostList from "components/organisms/postList";

const TagsTemplate = ({ location, pageContext, data }) => {
    const tag = pageContext.tag;
    const category = "";

    return (
        <Layout
            location={location}
            title={`"${tag}" 관련 글 목록`}
            activeMenu={category}
        >
            <div>
                <SEO title={`"${tag}" 관련 글 목록`} />

                <PostList
                    data={data.allMarkdownRemark.edges}
                    page={pageContext}
                    path={`/tags/${tag}`}
                    pageListSize={data.site.siteMetadata.pageListSize}
                />
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!, $tag: String) {
        site {
            siteMetadata {
                pageListSize
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
            skip: $skip
            limit: $limit
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 300)
                    frontmatter {
                        title
                        date(formatString: "YYYY-MM-DD")
                        category
                        tags
                        cover {
                            childImageSharp {
                                fixed(width: 120, height: 120) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default TagsTemplate;
