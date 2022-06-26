import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby';
import { useMenuState } from "@/context";
import Sidedrawer from './Sidedrawer';
import HewyLogo from '@/images/h.svg';


interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {

}

const Header: React.FC<HeaderProps> = () => {
    const { menuOpen, setMenuOpen } = useMenuState();

    return (
        <header className="z-[9999] bg-black text-white py-4 px-8 fixed top-0 left-0 w-full">
            <div className="w-11/12 mx-auto flex flex-row items-center justify-center lg:gap-20 z-50 relative">
                <Link to={'/blog'} className="hidden font-heading text-2xl tracking-wide lg:block hover:text-purple-600 transition-all duration-300">
                    Blog
                </Link>
                <Link to={'/'} className="group">
                    <HewyLogo className="z-50 max-w-[45px] max-h-[45px] fill-white group-hover:fill-purple-600 transition-all duration-300" />
                </Link>
                <Link to={'/contact'} className="hidden lg:block font-heading text-2xl tracking-wide hover:text-purple-600 transition-all duration-300">
                    Contact
                </Link>
                <div className="flex items-center justify-end col-span-1 z-50 lg:hidden text-white absolute right-0">
                    <div className="flex flex-col items-end justify-center group cursor-pointer" onClick={() => setMenuOpen?.(!menuOpen)}>
                        <span className={`block h-1 w-8 transition duration-200 transform ${menuOpen ? '-translate-y-2 bg-transparent' : 'bg-white group-hover:bg-purple-600'}`} />
                        <span className="block h-1 w-8 group-hover:bg-purple-600 transition duration-200 mt-1 bg-white" />
                        <span className={`block h-1 w-8 mt-1 transition duration-200 transform ${menuOpen ? 'translate-y-2 bg-transparent' : 'bg-white group-hover:bg-purple-600'}`} />
                    </div>
                </div>
            </div>

            <Sidedrawer />
        </header>
    )
}

export default Header;