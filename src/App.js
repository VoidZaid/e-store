import React from "react";

import ProductCardDetail from './components/productCardDetail';
import Basket from './components/basket';
import Checkout from './components/checkout';
import Category from './components/category';
import Layout from "./components/layout";
import Home from "./components/home";
import OrderConfirmation from "./components/orderConfirmation";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import "./css/normalize.css";
import "./css/App.css";

function App() {
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='basket' element={<Basket/>}/>
                    <Route path='checkout' element={<Checkout/>}/>
                    <Route path='products/:productId' element={<ProductCardDetail/>}/>
                    <Route path='categories/:categoryId' element={<Category/>}/>
                    <Route path='orderconfirmation' element={<OrderConfirmation/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default App;
