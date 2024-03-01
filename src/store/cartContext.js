import { createContext } from "react";

export const cartContext = createContext({
    cartList: [],
    wishList: []
});

const cartCtxValues = {
    cartList: [],
    wishList: []
}

const CartProvider = ({children}) => {
    return <cartContext.Provider value={cartCtxValues}>
        {children}
    </cartContext.Provider>
}

export default CartProvider;