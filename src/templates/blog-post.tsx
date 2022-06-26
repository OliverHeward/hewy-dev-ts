import React from 'react';
import { graphql } from 'gatsby';
import { BaseComponentProps } from '@/types';
import SEO from '@/components/SEO';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import Title from '@/components/Title';

interface MarkdownTemplateProps extends BaseComponentProps {
    data: {
        markdownRemark: {
            id: string;
            frontmatter: {
                date: string;
                slug: string;
                title: string;
                featuredImage: {
                    childImageSharp: {
                        gatsbyImageData: IGatsbyImageData
                    }
                }
            }
        }
    };
    location: Location;
    path: string;
    uri: string;
}

const BlogPost: React.FC<MarkdownTemplateProps> = ({ data: { markdownRemark } }) => {
    const image = getImage(markdownRemark.frontmatter.featuredImage.childImageSharp.gatsbyImageData);

    const bgImage = convertToBgImage(image);

    return (
        <div className="pt-[77px]">
            <SEO {...{
                title: markdownRemark.frontmatter.title,
                description: 'Here is the description for my post...'
            }} />
            <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
                <div className="pt-60 pb-20 w-11/12 mx-auto text-white z-20 relative">
                    <Title {...{
                        className: 'text-5xl uppercase font-heading tracking-wider'
                    }}>{markdownRemark.frontmatter.title}</Title>
                </div>
                <div className="bg-black opacity-40 z-10 absolute top-0 left-0 w-full h-full" />
            </BackgroundImage>
        </div>
    )

}

export default BlogPost;

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                date(formatString: "DD MMMM, YYYY")
                slug
                title
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
            }
        }
    }
`