import { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styledClass from './ProductList.module.css';
import { ProductContext } from "./../../store/ProductContext";

const ProductList = () => {
    const { items:products} = useContext(ProductContext);

    return (
        <div className={styledClass["products-list"]}>
            {
                products?.map(product => {
                    const {_id, image_url, price, name, region} = product;
                    return <ProductCard id={_id} key={_id} productImg={image_url} price={price} title={name} region={region} cardStyle={{width: '100%'}} />
                })
            }
        </div>
    )
}

export default ProductList;