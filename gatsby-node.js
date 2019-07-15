const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { paginate } = require(`gatsby-awesome-pagination`);
const siteConfig = require("./config.js");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    const blogPost = path.resolve(`./src/components/templates/blogPost.js`);

    return graphql(
        `
            {
                allMarkdownRemark(
                    sort: { fields: [frontmatter___date], order: DESC }
                    limit: 1000
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                tags
                                category
                                date(formatString: "YYYY-MM-DD")
                                cover {
                                    childImageSharp {
                                        fixed(width: 1000) {
                                            src
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    ).then(result => {
        if (result.errors) {
            throw result.errors;
        }
        const posts = result.data.allMarkdownRemark.edges;
        let tags = [];
        let category = [];
        let recentCategoryPosts = {};

        // Create blog posts pages.
        posts.forEach((post, index) => {
            const previous =
                index === posts.length - 1 ? null : posts[index + 1].node;
            const next = index === 0 ? null : posts[index - 1].node;
            const cat = post.node.frontmatter.category;

            // Create tag & category list
            if (post.node.frontmatter.tags) {
                tags = Array.from(
                    new Set([...tags, ...post.node.frontmatter.tags])
                );
            }

            if (cat) {
                category = Array.from(new Set([...category, ...[cat]]));
            }

            // Create recent category posts
            if (!recentCategoryPosts[cat]) {
                let list = [];

                for (let i = 0; i < posts.length; i++) {
                    if (cat === posts[i].node.frontmatter.category) {
                        list.push(posts[i]);
                        if (list.length === 4) {
                            break;
                        }
                    }
                }

                recentCategoryPosts = {
                    ...recentCategoryPosts,
                    [cat]: list
                };
            }

            const recent = recentCategoryPosts[cat];

            createPage({
                path: post.node.fields.slug,
                component: blogPost,
                context: {
                    slug: post.node.fields.slug,
                    previous,
                    next,
                    recent
                }
            });
        });

        paginate({
            createPage,
            items: posts,
            itemsPerPage: siteConfig.postsPerPage,
            pathPrefix: "/",
            component: path.resolve("./src/components/templates/index.js")
        });

        category.forEach(cat => {
            const catEdges = posts.filter(
                ({ node }) =>
                    node.frontmatter.category &&
                    node.frontmatter.category.includes(cat)
            );
            paginate({
                createPage,
                items: catEdges,
                itemsPerPage: siteConfig.postsPerPage,
                pathPrefix: `/category/${cat}`,
                component: path.resolve(
                    "./src/components/templates/index4Category.js"
                ),
                context: {
                    category: `${cat}`
                }
            });
        });

        tags.forEach(tag => {
            const tagEdges = posts.filter(
                ({ node }) =>
                    node.frontmatter.tags && node.frontmatter.tags.includes(tag)
            );
            paginate({
                createPage,
                items: tagEdges,
                itemsPerPage: siteConfig.postsPerPage,
                pathPrefix: `/tags/${tag}`,
                component: path.resolve(
                    "./src/components/templates/index4Tag.js"
                ),
                context: {
                    tag: `${tag}`
                }
            });
        });

        return null;
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value
        });
    }
};
