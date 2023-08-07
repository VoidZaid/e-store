import React, {useState,useEffect} from "react";
import Header from "./components/Header";
import NavItemsContainer from "./components/NavItemsContainer";
import Footer from "./components/Footer";
import ProductsItems from "./components/ProductsItems";

import "./css/normalize.css";
import "./css/App.css";

function App() {
    const [idProducts, setIdProducts] = useState(undefined);

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

        <main className="main">
            <nav className="main__nav">
                <NavItemsContainer 
                className={"main__nav-list"} 
                responsive={false} 
                onCategoryClick={onCategoryClick}/>
            </nav>

            <article className="main__products">
                <h2 className="main__products__title">Main Area</h2>
                <ProductsItems
                className={"main__products__container"}
                id = {idProducts}
                />
            </article>
        </main>

        <Footer></Footer>
    </>
    );
}

export default App;
