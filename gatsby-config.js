"use strict";

const siteConfig = require("./config.js");

module.exports = {
    siteMetadata: {
        siteUrl: siteConfig.url,
        title: siteConfig.title,
        lang: siteConfig.lang,
        description: siteConfig.description,
        defaultKeywords: siteConfig.defaultKeywords,
        defaultMetaImage: siteConfig.defaultMetaImage,
        copyright: siteConfig.copyright,
        authorNickName: siteConfig.authorNickName,
        authorFullName: siteConfig.authorFullName,
        authorDescription: siteConfig.authorDescription,
        photo: siteConfig.photo,
        social: siteConfig.social,
        category: siteConfig.category,
        pageListSize: siteConfig.pageListSize
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-emoji`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`
                        }
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            languageExtensions: [
                                {
                                    language: "superscript",
                                    extend: "javascript",
                                    definition: {
                                        superscript_types: /(SuperType)/
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`
                ]
            }
        },
        {
            resolve: "gatsby-plugin-root-import",
            options: {
                content: `${__dirname}/content`,
                src: `${__dirname}/src`,
                components: `${__dirname}/src/components`,
                pages: `${__dirname}/src/pages`,
                utils: `${__dirname}/src/utils`,
                themes: `${__dirname}/src/themes`
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: siteConfig.googleAnalyticsId,
                head: true
            }
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`
            }
        },
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: siteConfig.s3Bucket
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`
        }
    ]
};
