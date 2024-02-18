import { useEffect, useState } from "react";
import { getAllProducts } from "../../apiRequests";
import ProductCard from "../../components/ProductCard/ProductCard";
import styledClass from './ProductList.module.css';

const ProductList = () => {
    const  [products, setProducts] = useState([]);

    const updateProductsList = (result) => {
        setProducts(result);
    };
    
    useEffect(() => {
        getAllProducts(updateProductsList);
    }, []);

    console.log("product", products);
    
    return (
        <div className={styledClass["products-list"]}>
            {
                products.map(({id, image_url, price, name, region}, index) => 
                    <ProductCard key={id} productImg={image_url} price={price} title={name} region={region} cardStyle={{width: '100%'}}/>
                )
            }
        </div>
    )
}

export default ProductList;