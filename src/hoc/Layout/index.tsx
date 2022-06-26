import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    location: Location,
    children?: any
}

const Layout: React.FC<PageLayoutProps> = ({ children }) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
)

export default Layout;