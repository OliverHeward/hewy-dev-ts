import React, { HTMLAttributes } from 'react';
import { StaticImage } from 'gatsby-plugin-image'

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {

}

const Header: React.FC<HeaderProps> = () => {

    return (
        <header className="z-[9999] bg-black text-white py-4 px-8 fixed top-0 left-0 w-full">
            <div className="w-11/12">
                <StaticImage src="../../images/h.svg" alt="Hewy Logo" className="max-w-[30px]" />
            </div>
        </header>
    )
}

export default Header;