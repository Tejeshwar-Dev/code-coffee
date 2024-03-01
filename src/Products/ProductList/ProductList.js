import { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styledClass from './ProductList.module.css';
import { productContext } from "../../store/productContext";

const ProductList = () => {
    const { items:products, showProductInfo} = useContext(productContext);

    return (
        <div className={styledClass["products-list"]}>
            {
                products?.map(product => {
                    const {id, image_url, price, name, region} = product;
                    return <ProductCard key={id} productImg={image_url} price={price} title={name} region={region} cardStyle={{width: '100%'}} showProductInfoFn={() => showProductInfo(product)} />
                })
            }
        </div>
    )
}

export default ProductList;