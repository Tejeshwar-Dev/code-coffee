import { createContext } from "react";

const productContext = createContext({
    products: [],
    selectedProducts: []
});

const productCtxValues = {
    products:[],
    selectedProducts:[]
};

const ProductProvider = ({children}) => {
    return <productContext.Provider value={productCtxValues}>
        {children}
    </productContext.Provider>
}

export default ProductProvider;
