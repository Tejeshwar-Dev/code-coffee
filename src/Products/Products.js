import { createContext, useCallback, useEffect, useRef, useState } from "react";
import ProductList from "./ProductList/ProductList";
import SideFilter from "./SideFilter/SideFilter";
import styledClass from "./Products.module.css";
import { GET } from "../apiRequests";
import ProductDetails from "./ProductDetails/ProductDetails";

export const ProductListContext = createContext({
    products: [],
    setProductsList: () => {},
    filterList: []
});

const Products = () => {
    const productList = useRef([]);
    const [products, setProductsList] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

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

    const showProductInfo = (product) => {
        setSelectedProduct(product)
    }

    const closeModal = (evt) => {
        evt.stopPropagation();
        evt.preventDefault();
        setSelectedProduct(null);
    }

    const productContext = {
        products: products,
        setProductsList: setProductsList,
        filterList: productList.current,
        showProductInfo
    };
    
    return (
        <ProductListContext.Provider value={productContext}>
            <div className={styledClass["products-container"]}>
                <SideFilter />
                <ProductList />
            </div>
            {selectedProduct && <ProductDetails productInfo={selectedProduct} onCloseModal={closeModal} />}
        </ProductListContext.Provider>
    )
}

export default Products;