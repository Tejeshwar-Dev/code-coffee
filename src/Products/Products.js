import ProductList from "./ProductList/ProductList";
import SideFilter from "./SideFilter/SideFilter";
import styledClass from "./Products.module.css";
import { createContext, useState } from "react";

export const ProductListContext = createContext({
    products: [],
    setProductsList: () => {}
});

const Products = () => {
    const  [products, setProductsList] = useState([]);

    const productContext = {
        products: products,
        setProductsList: setProductsList
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