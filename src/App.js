import React, {useState,useEffect} from "react";
import Header from "./components/Header";
import NavItemsContainer from "./components/NavItemsContainer";
import Footer from "./components/Footer";
import ProductsItems from "./components/ProductsItems";

import "./App.css";

function App() {
    const [idProducts, setIdProducts] = useState(null);

    const onCategoryClick=(id)=>{
        // alert("hola mundo"+id);
        setIdProducts(id);
        console.log(idProducts)
    }
    
    return (
    <>
        <Header onCategoryClick={onCategoryClick}>
            {/* <NavItemsContainer 
            className={"header__mobile__list"} 
            responsive={true} 
            onCategoryClick={onCategoryClick}>
                <nav> componente de redes sociales</nav>
            </NavItemsContainer> */}
        </Header>

        <section className="main__container">
            <nav className="header__nav">
                <NavItemsContainer 
                className={"header__list"} 
                responsive={false} 
                onCategoryClick={onCategoryClick}/>
            </nav>

            <article>
                <h1>Main Area</h1>
                <section>
                    <ProductsItems
                    id = {idProducts}
                    />
                </section>
            </article>
        </section>

        <Footer></Footer>
    </>
    );
}

export default App;
