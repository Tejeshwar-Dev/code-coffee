import ProductList from "./ProductList/ProductList";
import SideFilter from "./SideFilter/SideFilter";
import styledClass from "./Products.module.css";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { GET } from "../apiRequests";

export const ProductListContext = createContext({
    products: [],
    setProductsList: () => {},
    filterList: []
});

const Products = () => {
    const productList = useRef([]);
    const  [products, setProductsList] = useState([]);

    const updateProductList = (result) => {
        setProductsList(result);
        productList.current = result;
    }
    const responseErrorHandler = (err) => console.log('error', err);

    const getAllProductsItems = useCallback(() => {
        GET('https://fake-coffee-api.vercel.app/api', updateProductList, responseErrorHandler);
    }, []);

    useEffect(() => {
        getAllProductsItems();
    }, [getAllProductsItems]);

    const productContext = {
        products: products,
        setProductsList: setProductsList,
        filterList: productList.current
    };
    
    return (
        <ProductListContext.Provider value={productContext}>
            <div className={styledClass["products-container"]}>
                <SideFilter />
                <ProductList />
            </div>
        </ProductListContext.Provider>
    )
}

export default Products;