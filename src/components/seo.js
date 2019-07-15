import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title, image }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        siteUrl
                        title
                        lang
                        description
                        defaultKeywords
                        defaultMetaImage
                        authorNickName
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const metaImage = site.siteMetadata.siteUrl + (image || site.siteMetadata.defaultMetaImage);
    const metaLang = site.siteMetadata.lang || 'en';

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                // HTML
                {
                    name: `description`,
                    content: metaDescription
                },
                // Google
                {
                    itemprop: `name`,
                    content: title
                },
                {
                    itemprop: `description`,
                    content: metaDescription
                },
                {
                    itemprop: `image`,
                    content: metaImage
                },
                // Facebook
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:image`,
                    content: metaImage
                },
                // Twitter
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:title`,
                    content: title
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                },
                {
                    name: `twitter:image`,
                    content: metaImage
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.authorNickName
                },
                {
                    name: `keywords`,
                    content:
                        keywords.length > 0
                            ? site.siteMetadata.defaultKeywords.concat(keywords.join(`, `))
                            : site.siteMetadata.defaultKeywords
                }
            ].concat(meta)}
        >
            <html lang={metaLang}/>
        </Helmet>
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    keywords: [],
    description: ``
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired
};

export default SEO;
