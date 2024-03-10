import { useContext } from 'react';
import styledClass from './CartItems.module.css';
import { CartContext } from '../store/CartContext';

import minuisIcon from './../assets/img/minus-dark.svg';
import plusIcon from './../assets/img/plus-dark.svg';
import closeIcon from './../assets/img/close-dark.svg';

const CartItems = () => {
    const {cartItems, updateCartItems} = useContext(CartContext);

    console.log("🚀 cartItems", cartItems)
    
    return (
        <div className={styledClass['cart-modal']}>
            <header className={styledClass['header']}>
                <h3 className={styledClass['header-title']}>Shopping cart</h3>
                <p className={styledClass['header-sub-title']}>3 Items</p>
            </header>
            <section className={styledClass['modal-details']}>
                <div className={styledClass['cart-items-title']}>
                    <p className={styledClass['cart-item']}>Items</p>
                    <p className={styledClass['cart-quantity']}>Quantity</p>
                    <p className={styledClass['cart-price']}>Price</p>
                    <p className={styledClass['cart-action']}></p>
                </div>
                <div className={styledClass['cart-items-list']}>
                    {cartItems.map(cartItem => 
                        <div className={`${styledClass['cart-col']} ${styledClass['cart-items']}`} key={cartItem.id}>
                            <div className={styledClass['cart-item']}>
                                <div className={styledClass['product-img']}>
                                    <img src={cartItem.productImg} alt={cartItem.name} />
                                </div>
                                <div className={styledClass['product-info']}>
                                    <h5 className={styledClass['product-name']}>{cartItem.name}</h5>
                                    <p className={styledClass['product-sub']}>{cartItem.price} $</p>
                                </div>
                            </div>
                            <div className={styledClass['cart-quantity']}>
                                <div className={styledClass['quantity-btn']}>
                                    <button className={styledClass['quantity-minus']} onClick={() => {}}>
                                        <img src={minuisIcon} alt='minus' />
                                    </button>
                                    <label className={styledClass['quantity-value']}>{cartItem.quantity}</label>
                                    <button className={styledClass['quantity-plus']} onClick={() => {}}>
                                        <img src={plusIcon} alt='plus' />
                                    </button>
                                </div>
                            </div>
                            <div className={styledClass['cart-price']}>
                                <p className={styledClass['item-total-price']}>{cartItem.price * cartItem.quantity}</p>
                            </div>
                            <div className={styledClass['cart-action']}>
                                <button className={styledClass['remove-item']}>
                                    <img src={closeIcon} alt='plus' />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className={styledClass['cart-items-footer']}>
                    <div className={styledClass['cart-checkout-details']}>
                        <span className={styledClass['cart-checkout-title']}>Todal</span>
                        <span className={styledClass['cart-total-amount']}>$ 99</span>
                    </div>
                    <button className={styledClass['cart-checkout-btn']}>Checkout</button>
                </div>
            </section>
        </div>
    )
}

export default CartItems;
