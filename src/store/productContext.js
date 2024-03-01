import { createContext, useEffect, useReducer, useRef } from "react";

export const ProductContext = createContext({
    items: [],
    selectItemView: null,
    filterList: [],
    updateProductList: () => {},
    showProductInfo: () => {}
});

const initialProductState = {
    products:[],
    selectedProducts: null,
};

const productReducerFn = (state, action) => {
    if(action.type === 'LOAD_PRODUCTS'){
        return {
            ...state,
            products: action.payload
        }
    }

    if(action.type === 'SHOW_PRODUCT_DETAILS') {
        return {
            ...state, 
            selectedProducts : action.payload
        }
    }

    return state;
}

const ProductProvider = ({children}) => {
    const [productState, productDispatchFn] = useReducer(productReducerFn, initialProductState);
    const productList = useRef([]);

    function loadProducts(productList) {
        productDispatchFn({
            type: 'LOAD_PRODUCTS',
            payload: productList
        });
    }

    function showProductInfo(productItem) {        
        productDispatchFn({
            type: 'SHOW_PRODUCT_DETAILS',
            payload: productItem
        });
    }

    useEffect(() => {
        if(productList.current.length < 1) {
            productList.current = productState.products;
        }
    }, [productState.products]);
    
    const productCtx = {
        items: productState.products,
        selectItemView: productState.selectedProducts,
        filterList: productList.current,
        updateProductList: loadProducts,
        showProductInfo
    }

    return <ProductContext.Provider value={productCtx}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider;
