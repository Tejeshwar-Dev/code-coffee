import { Link, Outlet } from 'react-router-dom';
import styledClass from './RouterRoot.module.css';

import coffeeBuy from './assets/img/coffee-buy.svg';
import cartIcon from './assets/img/cart_dark.svg';

export default function RouterRoot() {
    return (
        <>
            <header className={styledClass['header-nav-bar']}>
                <img src={coffeeBuy} alt='logo'/>
                <ul className={styledClass['header-nav-list']}>
                    <li className={styledClass['nav-item']}><Link to={'/'}>Home</Link> </li>
                    <li className={styledClass['nav-item']}><Link to={'/products'}>Products</Link> </li>
                    <li className={`${styledClass['nav-item']} styledClass['cart-btn-container']`}>
                        <Link to={'/cart'}>
                            <img src={cartIcon} alt='cart' />
                        </Link>
                    </li>
                </ul>
            </header>
            <Outlet />
        </>
    )
}
