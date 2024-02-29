import { createContext } from "react";

export const cartContext = createContext({
    cartList: [],
    wishList: []
});

const cartCtxValues = {
    cartList: [],
    wishList: []
}

const cartProvider = ({children}) => {
    return <cartContext.Provider value={cartCtxValues}>
        {children}
    </cartContext.Provider>
}

export default cartProvider;