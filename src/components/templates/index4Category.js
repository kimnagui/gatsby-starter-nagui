import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import SEO from "../seo";
import PostList from "components/organisms/postList";

const CategoryList = ({ location, pageContext, data }) => {
    const category = pageContext.category;

    return (
        <Layout
            location={location}
            title={`Category: ${category}`}
            activeMenu={category}
        >
            <div>
                <SEO title={`Category: ${category}`} keywords={[category]}/>

                <PostList
                    data={data.allMarkdownRemark.edges}
                    page={pageContext}
                    path={`/category/${category}`}
                    pageListSize={data.site.siteMetadata.pageListSize}
                />
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!, $category: String) {
        site {
            siteMetadata {
                pageListSize
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { category: { eq: $category } } }
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

export default CategoryList;
