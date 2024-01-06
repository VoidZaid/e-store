import React from "react";

import ProductCardDetail from './pages/productCardDetail';
import Basket from './pages/basket';
import Checkout from './pages/checkout';
import Category from './pages/category';
import Layout from "./pages/layout";
import Home from "./pages/home";
import OrderConfirmation from "./pages/orderConfirmation";
import SearchResult from "./pages/searchResult";

import {
    BrowserRouter,
    HashRouter,
    Routes,
    Route
} from "react-router-dom";

import "./css/normalize.css";
import "./css/App.css";

function App() {
    return (
    <>
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='basket' element={<Basket/>}/>
                    <Route path='checkout' element={<Checkout/>}/>
                    <Route path='products/:productId' element={<ProductCardDetail/>}/>
                    <Route path='categories/:categoryId' element={<Category/>}/>
                    <Route path='orderconfirmation' element={<OrderConfirmation/>}/>
                    <Route path='search' element={<SearchResult/>}/>
                </Route>
            </Routes>
        </HashRouter>
    </>
    );
}

export default App;
