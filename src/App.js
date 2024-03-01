import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Products from './Products/Products';
import RouterRoot from './RouterRoot';
import CartProvider from './store/cartContext';
import ProductProvider from './store/productContext';

const routes = createBrowserRouter ([
  { 
    path: '/',
    element: <RouterRoot /> ,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products />}
    ]
  }
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
