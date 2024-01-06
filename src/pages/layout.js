import React from 'react';
import Header from "../components/Header";
import NavItemsContainer from "../components/NavItemsContainer";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';

import styles from "../css/ProductCard.module.scss";

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
                <section className={styles.products__container}>
                    <Outlet/>
                </section>
            </article>
        </main>
        <Footer></Footer>
    </>
    )
}

export default Layout