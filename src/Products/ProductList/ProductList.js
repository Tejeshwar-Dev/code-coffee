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
                    const {_id, image_url, price, name, description, region, grind_option, flavor_profile, roast_level} = product;
                    return <ProductCard 
                        id={_id} 
                        key={_id} 
                        productImg={image_url} 
                        price={price} 
                        title={name} 
                        region={region} 
                        description={description}
                        grindOption={grind_option} 
                        flavors={flavor_profile} 
                        roastLevel={roast_level} 
                        cardStyle={{width: '100%'}} 
                    />
                })
            }
        </div>
    )
}

export default ProductList;