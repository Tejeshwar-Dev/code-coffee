
import { useContext } from 'react';
import styledClasses from './ProductCard.module.css';
import { CartContext } from '../../store/CartContext';
import { ProductContext } from '../../store/ProductContext';
// import * as utils from './../../utils/constants';
// const { HEART_IMG, HEART_FILLED_IMG } = utils.ASSETS;
import HEART_IMG from './../../assets/img/heart.svg';
import HEART_FILLED_IMG from './../../assets/img/heart-filled.svg';

function ProductCard({id, productImg, price, title, description, region, cardStyle, grindOption, flavors, roastLevel}) {
    const {items: productItems, showProductInfo} = useContext(ProductContext);
    const {cartItems, wishedItems, updateCartItems, updateWishlist} = useContext(CartContext);

    const updateToCart = (event, data) => {
        event.stopPropagation();

        const currProduct = productItems.find(item => item._id === data.id);
        updateCartItems({ type: data.type, currProduct});
    }

    const showProductInfoFn = (id) => {
        const selectedProduct = productItems.filter(product => product._id === id);
        showProductInfo(...selectedProduct);
    }

    const updateItemToWishlist = (event, id) => {
        event.stopPropagation();
        updateWishlist(id);
    }

    const cartItem = cartItems.find(item => item.id === id);
    let productCardCartBtn = (
        <button className={styledClasses['product-cart-btn']} onClick={(event) => updateToCart(event, {type: 'ADD_TO_CART', id: id})}>Add to cart</button>
    );
    
    if(cartItem && cartItem.quantity > 0) {
        productCardCartBtn = (
            <div className={styledClasses['product-cart-quantity-btn']}>
                <button className={styledClasses['remove-item']} onClick={(event) => updateToCart(event, {type: 'REMOVE_FROM_CART', id: id})}>-</button>
                    <label className={styledClasses['product-quantity']}>{cartItem.quantity}</label>
                <button className={styledClasses['add-item']} onClick={(event) => updateToCart(event, {type: 'ADD_TO_CART', id: id})}>+</button>
            </div>
        )
    }
    
    return (
        <div className={styledClasses['product-card']} onClick={() => showProductInfoFn(id)}>
            <div className={styledClasses['product-card-header']}>
                <div className={styledClasses['product-img-wrapper']}>
                    <img src={productImg} alt={title}/>
                    <p className={styledClasses['product-price']}>{price}</p>
                </div>
                <div className={styledClasses['product-wishlist']} onClick={(event) => updateItemToWishlist(event, id)}>
                    <img src={wishedItems.includes(id) ? HEART_FILLED_IMG : HEART_IMG} alt="favourite" />
                </div>
            </div>
            <div className={styledClasses['product-card-body']}>
                <div className={styledClasses['product-details-header']}>
                    <h3>{title}</h3>
                    <p>{region}</p>
                </div>
                <div className={styledClasses['product-details']}>
                    <p className={styledClasses['product-info']}>{description}</p>
                    <div className={styledClasses['product-flavors']}>
                        {flavors.map(flavor => <span key={`${flavor}-flavor`} className={styledClasses['product-flavor']}>{flavor}</span>)}
                    </div>
                </div>
                <span className={styledClasses['product-divider']}></span>
                <div className={styledClasses['product-card-footer']}>
                    {productCardCartBtn}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;