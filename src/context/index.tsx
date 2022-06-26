import { MenuProvider, useMenuState } from "./MenuProvider";

const ContextProvider: React.FC = ({
    children
}) => (
    <MenuProvider>
        {children}
    </MenuProvider>
)

export {
    ContextProvider,
    useMenuState,
}