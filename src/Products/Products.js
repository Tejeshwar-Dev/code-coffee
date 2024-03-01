import { useCallback, useContext, useEffect } from "react";
import ProductList from "./ProductList/ProductList";
import SideFilter from "./SideFilter/SideFilter";
import styledClass from "./Products.module.css";
import { GET } from "../apiRequests";
import ProductDetails from "./ProductDetails/ProductDetails";
import { productContext } from "../store/productContext";

const Products = () => {
    const { updateProductList, selectItemView, showProductInfo } = useContext(productContext)
    const responseErrorHandler = (err) => console.log('error', err);

    const getAllProductsItems = useCallback(() => {
        GET('https://fake-coffee-api.vercel.app/api', updateProductList, responseErrorHandler);
    }, []);

    useEffect(() => {
        getAllProductsItems();
    }, [getAllProductsItems]);

    const closeModal = (evt) => {
        evt.stopPropagation();
        evt.preventDefault();
        showProductInfo(null);
    }
    
    return (
        <>
            <div className={styledClass["products-container"]}>
                <SideFilter />
                <ProductList />
            </div>
            {selectItemView && <ProductDetails productInfo={selectItemView} onCloseModal={closeModal}/>}
        </>
    )
}

export default Products;