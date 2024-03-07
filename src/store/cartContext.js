import { createContext, useReducer } from "react";

export const CartContext = createContext({
    cartItems: {},
    updateCartItems: () => {}
});

const initialCartState = {
    cartList: [],
    wishList: []
}

const cartReducerFn = (state, action) => {
    if(action.type ===  'ADD_TO_CART'){
        const cartItems = [...state.cartList];
        const prroductDetails = action.product;
        
        const itemIndex = cartItems.findIndex(item => item.id === prroductDetails._id);
        const existingItem = cartItems[itemIndex];

        if(existingItem){
            const item = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }

            cartItems[itemIndex] = item;
        } else {
            cartItems.push({
                quantity: 1,
                name: prroductDetails.name,
                id: prroductDetails._id,
                price: prroductDetails.price,
                productImg: prroductDetails.image_url
            });
        }
        
        
        return {
            ...state,
            cartList: cartItems
        }
    }

    if(action.type === 'REMOVE_FROM_CART') {
        const cartItems = [...state.cartList];
        const productDetails = action.product;

        const itemIndex = cartItems.findIndex(item => item.id === productDetails._id);
        const existingItem = cartItems[itemIndex];

        if(existingItem.quantity > 1) {
            const item = {
                ...existingItem,
                quantity: existingItem.quantity - 1
            }
            cartItems[itemIndex] = item;
        } else {
            cartItems.splice(itemIndex, 1);
        }

        return {
            ...state,
            cartList: cartItems
        }
    }
    
    if(action.type === 'UPDATE_WISHLIST') {
        let wishListItems = [...state.wishList];

        wishListItems.includes(action.payload) ? 
            wishListItems = wishListItems.filter(itemId => itemId !== action.payload)
        :
            wishListItems.push(action.payload);

        return {
            ...state,
            wishList: wishListItems
        }
    }
    
    return state;
}


const CartProvider = ({children}) => {
    const [cartState, dispatchCartActionFn] = useReducer(cartReducerFn, initialCartState);

    const updateCartItems = (updateType) => {
        const {currProduct, type} = updateType;
        
        dispatchCartActionFn({
            type: type,
            product: currProduct
        });
    }

    const updateWishlist = (productID) => {
        dispatchCartActionFn({
            type: 'UPDATE_WISHLIST',
            payload: productID
        })
    }

    const cartCtx = {
        cartItems: cartState.cartList,
        wishedItems: cartState.wishList,
        updateCartItems: updateCartItems,
        updateWishlist: updateWishlist
    }

    return <CartContext.Provider value={cartCtx}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;