import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductDetail from './components/productDetail';
import Basket from './components/basket';
import Checkout from './components/checkout';
import Category from './components/category';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route path='basket' element={<Basket/>}/>
                    <Route path='checkout' element={<Checkout/>}/>
                    <Route path='products/:productId' element={<ProductDetail/>}/>
                    <Route path='categories/:categoryId' element={<Category/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
