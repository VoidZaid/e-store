import React from 'react';
import Header from "./components/Header";
import NavItemsContainer from "./components/NavItemsContainer";
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <>
        <Header onCategoryClick={onCategoryClick}>
        </Header>

        <main className="main">
            <nav className="main__nav">
                <NavItemsContainer 
                className={"main__nav-list"} 
                responsive={false} 
                onCategoryClick={onCategoryClick}/>
            </nav>

            <article className="main__products">
                <h2 className="main__products__title">Main Area</h2>
                <section className="main__products__container">
                    <Outlet/>
                </section>
            </article>
        </main>
        <Footer></Footer>
    </>
    )
}

export default Layout