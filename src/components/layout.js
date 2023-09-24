import React from 'react';
import Header from "./Header";
import NavItemsContainer from "./NavItemsContainer";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <>
        <Header>
        </Header>

        <main className="main">
            <nav className="main__nav">
                <NavItemsContainer 
                className={"main__nav-list"} 
                responsive={false}/>
            </nav>

            <article className="main__products">
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