
import { useContext } from 'react';
import styledClasses from './ProductCard.module.css';
import { CartContext } from '../../store/CartContext';
import { ProductContext } from '../../store/ProductContext';

function ProductCard({id, productImg, price, title, region, cardStyle}) {
    const {items: productItems, showProductInfo} = useContext(ProductContext);
    const {cartItems, updateCartItems} = useContext(CartContext);

    const updateToCart = (event, data) => {
        event.stopPropagation();

        const currProduct = productItems.find(item => item._id === data.id);
        
        updateCartItems({
            type: data.type,
            currProduct
        });
    }

    const showProductInfoFn = (id) => {
        const selectedProduct = productItems.filter(product => product._id === id);
        showProductInfo(...selectedProduct);
    }
    
    return (
        <div id={id} className={styledClasses["card-container"]} style={cardStyle} onClick={() => showProductInfoFn(id)}>
            <div className={styledClasses["card-header"]}>
                <img src={productImg} alt="prodduct_img"/>
            </div>
            <div className={styledClasses["card-header-divider"]}>
                <div className={styledClasses["card-divider-blank"]}></div>
                <p className={styledClasses["card-price"]}>${price}</p>
            </div>
            <div className={styledClasses["card-body"]}>
                <h3 className={styledClasses["card-title"]}>{title}</h3>
                <p className={styledClasses["card-subtitle"]}>{region}</p>
            </div>
            <div>
                <button className={styledClasses['remove-item']} onClick={(event) => updateToCart(event, {type: 'REMOVE_FROM_CART', id: id})}>-</button>
                <label>0</label>
                <button className={styledClasses['add-item']} onClick={(event) => updateToCart(event, {type: 'ADD_TO_CART', id: id})}>+</button>
            </div>
        </div>
    )
}

export default ProductCard;