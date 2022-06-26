import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContextProvider } from '@/context';

interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    location: Location,
    children?: any
}

const Layout: React.FC<PageLayoutProps> = ({ children }) => (
    <ContextProvider>
        <div className="">
            <Header />
            {children}
            <Footer />
        </div>
    </ContextProvider>
)

export default Layout;