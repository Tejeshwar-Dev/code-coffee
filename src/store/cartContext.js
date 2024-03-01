import { createContext } from "react";

export const CartContext = createContext({
    cartList: [],
    wishList: []
});

const cartCtxValues = {
    cartList: [],
    wishList: []
}

const CartProvider = ({children}) => {
    return <CartContext.Provider value={cartCtxValues}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;