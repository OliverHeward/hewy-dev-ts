import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ReactNode } from 'react';

export interface BaseComponentProps {
    children?: ReactNode;
}

export interface ImageBackgroundProps {
    __typename: string;
    className?: string;
    id: string;
    backgroundIamge: {
        gatsbyImageData: IGatsbyImageData;
    }
    text: string;
}