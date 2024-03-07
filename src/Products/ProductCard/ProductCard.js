
import { useContext } from 'react';
import styledClasses from './ProductCard.module.css';
import { CartContext } from '../../store/CartContext';
import { ProductContext } from '../../store/ProductContext';
// import * as utils from './../../utils/constants';
// const { HEART_IMG, HEART_FILLED_IMG } = utils.ASSETS;
import HEART_IMG from './../../assets/img/heart.svg';
import HEART_FILLED_IMG from './../../assets/img/heart-filled.svg';

function ProductCard({id, productImg, price, title, region, cardStyle, grindOption, flavors, roastLevel}) {
    const {items: productItems, showProductInfo} = useContext(ProductContext);
    const {cartItems, wishedItems, updateCartItems, updateWishlist} = useContext(CartContext);

    const updateToCart = (event, data) => {
        event.stopPropagation();

        const currProduct = productItems.find(item => item._id === data.id);
        console.log("🚀 currProduct", currProduct)
        updateCartItems({
            type: data.type,
            currProduct
        });
    }

    const showProductInfoFn = (id) => {
        const selectedProduct = productItems.filter(product => product._id === id);
        showProductInfo(...selectedProduct);
    }

    const updateItemToWishlist = (event, id) => {
        event.stopPropagation();
        updateWishlist(id);
    }

    // const itemQuantity = cartItems.find(item => item.id === id);
    // const addToCartHtml = `
    //     <button className={styledClasses['remove-item']} onClick={(event) => updateToCart(event, {type: 'REMOVE_FROM_CART', id: id})}>-</button>
    //         <label>0</label>
    //     <button className={styledClasses['add-item']} onClick={(event) => updateToCart(event, {type: 'ADD_TO_CART', id: id})}>+</button>
    // `;
    
    // const addToCart = () => {
        const cartItem = cartItems.find(item => item.id === id);
        let productCardCartBtn = (
            <button className={styledClasses['product-cart-btn']} onClick={(event) => updateToCart(event, {type: 'ADD_TO_CART', id: id})}>Add to cart</button>
        );
        
        if(cartItem && cartItem.quantity > 0) {
            productCardCartBtn = (
                <div className={styledClasses['product-cart-btn']}>
                    <button className={styledClasses['remove-item']} onClick={(event) => updateToCart(event, {type: 'REMOVE_FROM_CART', id: id})}>-</button>
                        <label>{cartItem.quantity}</label>
                    <button className={styledClasses['add-item']} onClick={(event) => updateToCart(event, {type: 'ADD_TO_CART', id: id})}>+</button>
                </div>
            )
        }
        

        // return productCardCartBtn;
    // };
    
    return (
        <div id={id} className={styledClasses["card-container"]} style={cardStyle} onClick={() => showProductInfoFn(id)}>
            <section className={styledClasses["card-header"]}>
                <img className={styledClasses['product-image']} src={productImg} alt="prodduct_img"/>
                {/* <button  className={styledClasses['product-wishlist-btn']} onClick={(event) => updateItemToWishlist(event, id)}>
                    <img src={wishedItems.includes(id) ? HEART_FILLED_IMG : HEART_IMG} alt="favourite" />
                    Wishlist
                </button> */}
            </section>
            <div className={styledClasses["card-header-divider"]}>
                <div className={styledClasses["card-divider-blank"]}></div>
                <p className={styledClasses["card-price"]}>${price}</p>
            </div>
            <div className={styledClasses["card-body"]}>
                <h3 className={styledClasses["card-title"]}>{title}</h3>
                <p className={styledClasses["card-subtitle"]}>{region}</p>
            </div>
            <footer className={styledClasses['product-card-footer']}>
                {productCardCartBtn}
                {/* <button className={styledClasses['remove-item']} onClick={(event) => updateToCart(event, {type: 'REMOVE_FROM_CART', id: id})}>-</button>
                <label>0</label>
                <button className={styledClasses['add-item']} onClick={(event) => updateToCart(event, {type: 'ADD_TO_CART', id: id})}>+</button> */}
            </footer>
        </div>
    )
}

export default ProductCard;