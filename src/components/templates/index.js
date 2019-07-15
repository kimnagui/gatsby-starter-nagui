import React from "react";
import { graphql } from "gatsby";

import Layout from "components/templates/layout";
import PostList from "components/organisms/postList";
import SEO from "components/seo";

class BlogIndex extends React.Component {
    render() {
        const { data, location, pageContext } = this.props;
        const { title, pageListSize } = data.site.siteMetadata;
        const posts = data.allMarkdownRemark.edges;

        return (
            <Layout location={location} title={title}>
                <SEO
                    title="Main"
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <PostList
                    data={posts}
                    page={pageContext}
                    path={"/"}
                    pageListSize={pageListSize}
                />
            </Layout>
        );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
                pageListSize
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            skip: $skip
            limit: $limit
        ) {
            edges {
                node {
                    excerpt(pruneLength: 300)
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "YYYY-MM-DD")
                        title
                        category
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
