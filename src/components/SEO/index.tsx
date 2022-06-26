import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type StaticQueryData = {
    siteMetadata: {
        title: string;
        description: string;
        author: {
            name: string;
        }
    }
}

interface SEOProps {
    title: string;
    description?: string;
    lang?: string;
    keywords?: string[];
}

const GetDefaults = () => {
    const { config } = useStaticQuery(graphql`
        query getDefaults {
            config: site {
                siteMetadata {
                    title
                    description
                    author {
                        name
                    }
                }
            }
        }
    `)

    return { ...config }
};

const SEO: React.FC<SEOProps> = ({ title, description, lang, keywords }) => {
    const defaults: StaticQueryData = GetDefaults();
    keywords = keywords || []
    title = title || defaults.siteMetadata.title
    description = description || defaults.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${defaults.siteMetadata.description}`}
            meta={[
                {
                    name: `description`,
                    content: defaults.siteMetadata.description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: defaults.siteMetadata.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:creator`,
                    content: defaults.siteMetadata.author.name,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: defaults.siteMetadata.description,
                },
            ].concat(
                keywords.length > 0 ? {
                    name: `keywords`,
                    content: keywords.join(`, `)
                } : [],
            )}
        />
    )
}

export default SEO;