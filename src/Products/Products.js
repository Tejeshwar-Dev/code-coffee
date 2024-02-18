import ProductList from "./ProductList/ProductList";
import SideFilter from "./SideFilter/SideFilter";
import styledClass from "./Products.module.css";

const Products = () => {
    return (
        <div className={styledClass["products-container"]}>
            <SideFilter />
            <ProductList />
        </div>
    )
}

export default Products;