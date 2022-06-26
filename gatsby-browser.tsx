import { GatsbyBrowser } from "gatsby";
import React from 'react';
import { ParallaxProvider } from "react-scroll-parallax";

import Layout from './src/hoc/Layout';

import './src/styles/global.scss';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
    element,
    props
}) => (
    <Layout {...props}>
        <ParallaxProvider>
            {element}
        </ParallaxProvider>
    </Layout>
)