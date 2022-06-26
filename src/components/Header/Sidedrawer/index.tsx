import { useMenuState } from "@/context";
import { Link } from 'gatsby'

const Sidedrawer: React.FC = () => {
    const { menuOpen, setMenuOpen } = useMenuState();

    return (
        <div className={`bg-black transition-all delay-400 w-full fixed top-0 left-0 h-full z-40 ${menuOpen ? 'opacity-100 visible pointer-events-auto lg:hidden' : 'opacity-0 pointer-events-none lg:hidden'} lg:hidden`}>
            <nav className="flex items-center justify-center flex-col h-full w-full text-center">
                <ul className="flex flex-col gap-6">
                    <li className="font-heading uppercase tracking-widest text-5xl hover:text-7xl transition-all duration-500 hover:text-purple-600">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className="font-heading uppercase tracking-widest text-5xl hover:text-7xl transition-all duration-500 hover:text-purple-600">
                        <Link to={'/blog'}>Blog</Link>
                    </li>
                    <li className="font-heading uppercase tracking-widest text-5xl hover:text-7xl transition-all duration-500 hover:text-purple-600">
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Sidedrawer;