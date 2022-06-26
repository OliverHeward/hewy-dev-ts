import { createContext, useState, useContext } from 'react';

interface MenuContextProps {
    menuOpen: boolean;
    setMenuOpen?: (open: boolean) => void;
}

const MenuContext = createContext<Partial<MenuContextProps>>({ menuOpen: false });

const MenuProvider: React.FC = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
            {children}
        </MenuContext.Provider>
    )
}

const useMenuState = () => {
    const context = useContext(MenuContext)

    if (context === undefined) throw new Error('useMenuState must be used within a MenuProvider')

    return context
}

export { MenuProvider, useMenuState }
