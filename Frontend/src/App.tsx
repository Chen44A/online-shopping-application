import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import { ProductsPage } from './Pages/ProductsPage';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<ProductsPage />}></Route>
          <Route path='products/:id' element={<ProductPage />}></Route>
          <Route path='cart' element={<CartPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
