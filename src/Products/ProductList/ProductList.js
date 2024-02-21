import { useContext, useEffect } from "react";
import { getAllProducts } from "../../apiRequests";
import ProductCard from "../../components/ProductCard/ProductCard";
import styledClass from './ProductList.module.css';
import { ProductListContext } from "../Products";

const ProductList = () => {
    const productCtx = useContext(ProductListContext);

    const updateProductsList = (result) => {
        productCtx.setProductsList(result);
    };

    useEffect(() => {
        getAllProducts(updateProductsList);
    }, []);

    console.log("product", productCtx.products);
    
    return (
        <div className={styledClass["products-list"]}>
            {
                productCtx.products.map(({id, image_url, price, name, region}, index) => 
                    <ProductCard key={id} productImg={image_url} price={price} title={name} region={region} cardStyle={{width: '100%'}}/>
                )
            }
        </div>
    )
}

export default ProductList;