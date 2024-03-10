import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Products from './Products/Products';
import RouterRoot from './RouterRoot';
import CartProvider from './store/CartContext';
import ProductProvider from './store/ProductContext';
import CartItems from './CartItems/CartItems';

const routes = createBrowserRouter ([
  { 
    path: '/',
    element: <RouterRoot /> ,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products />},
      { path: 'cart', element: <CartItems /> }
    ]
  }, 
  // { path: '/products', element: <Products /> }
]);

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <div className='app-main'>
          <RouterProvider router={routes} />
        </div>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
