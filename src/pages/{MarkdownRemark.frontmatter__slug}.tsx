import React from 'react';
import { graphql } from 'gatsby';
import { BaseComponentProps } from '@/types';
import SEO from '@/components/SEO';

interface MarkdownTemplateProps extends BaseComponentProps {
    data: {
        markdownRemark: {
            frontmatter: {
                date: string;
                slug: string;
                title: string;
            }
        }
    };
    location: Location;
    path: string;
    uri: string;
}

const Template: React.FC<MarkdownTemplateProps> = ({ data }) => {

    return (
        <div>
            <SEO {...{
                title: data.markdownRemark.frontmatter.title,
                description: 'Here is the description for my post...'
            }} />
            Hello
        </div>
    )

}

export default Template;

export const pageQuery = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id } ) {
            html
            frontmatter {
                date(formatString: "DD MMMM, YYYY")
                slug
                title
            }
        }
    }
`