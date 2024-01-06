import React, { useEffect, useState } from "react";
import { getProducts } from "../services/fetcher";
import ProductCard from "../components/ProductCard";

import styles from "../css/ProductCard.module.scss"

const Home = () => {
   const [loading, setLoading] = useState(true);
   const [products, setProducts] = useState({ errMessage: "", data: [] });

   useEffect(() => {
      const fetchData = async () => {
         const responseObject = await getProducts();
         setProducts(responseObject);
      };
      fetchData();
   }, []);

   useEffect(() => {
      setLoading(false);
   }, [loading, setProducts]);

   const renderProducts = () => {
      // console.log(getListProducts())
      if (loading) return "Aun esta cargando!!!!!!!!!!!";
      return getListProducts();
   };

   const getListProducts = () => {
      return products.data.map((e, id) => (
         <ProductCard
            key={id}
            id={e.id}
            title={e.title}
            img={e.image}
            specs={e.specs}
            features={e.features}
            price={e.price}
            stock={e.stock}
         />
      ));
   };

   return (
      <>
         {products.errMessage && <div>Error: {products.errMessage}</div>}
         {products.data && <div className={styles.products__container}>{renderProducts()}</div>}
      </>
   );
};

export default Home;

