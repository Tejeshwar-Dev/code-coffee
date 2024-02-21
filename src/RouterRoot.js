import { Link, Outlet } from 'react-router-dom';

export default function RouterRoot() {
    return (
        <>
            <header>
                <ul>
                    <li><Link to={'/'}>Home</Link> </li>
                    <li><Link to={'/products'}>Products</Link> </li>
                </ul>
            </header>
            <Outlet />
        </>
    )
}