import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Products from './Products/Products';
import RouterRoot from './RouterRoot';

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
    <div className='app-main'>
      {/* <Products /> */}
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
