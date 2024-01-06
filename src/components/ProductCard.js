import React, { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import Icon from "./Icon";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/ProductCard.module.scss";

const ProductCard = ({ id, title, img, specs, features, price, stock }) => {
   const navigate = useNavigate();
   const { addProduct } = useContext(CartContext);

   return (
      <article className={styles.product} key={id}>
         <aside className={styles.product__espec}>
            <h3 className={styles.product__title}>
               <Link to={`products/${id}`}>{title}</Link>
            </h3>

            <div className={styles.product__img__container}>
               <figure>
                  <img src={`../../assets/${img}`} alt={title} />
               </figure>
            </div>
            <div className={styles.product__espec__dimension}>
               <ul>
                  {specs.dimensions.split("-").map((e, id) => {
                     return (
                        <li key={id}>
                           <Icon
                              className={styles.product__list__icon}
                              icon={"chevron_right"}
                           />
                           {e}
                        </li>
                     );
                  })}
               </ul>
            </div>
            {specs.capacity && (
               <div className="product__espec-capacity">
                  <h3>Capacity</h3>
                  <label>{specs.capacity}</label>
               </div>
            )}

            <div className="product__espec-features">
               {features && <h3>Features</h3>}
               <ul>
                  {features?.map((e, id) => {
                     return (
                        <li key={id}>
                           <Icon
                              className={styles.product__list__icon}
                              icon={"chevron_right"}
                           />
                           {e}
                        </li>
                     );
                  })}
               </ul>
            </div>
         </aside>

         <aside className={styles.product__finance}>
            <div className={styles.product__finance__price}>
               &pound; {price}
            </div>
            <div className={styles.product__finance__stock}>
               <label>Stock level: {stock}</label>
               <br />
               <label>Free delivery</label>
            </div>
            <div className={styles.product__action}>
               <button
                  onClick={() => {
                     navigate(`/products/${id}`);
                  }}
               >
                  View product <Icon icon={"search"} />
               </button>
               <button
                  onClick={() => {
                     addProduct({ id, title, price });
                  }}
               >
                  Add to basket <Icon icon={"shopping_cart"} />
               </button>
            </div>
         </aside>
      </article>
   );
};
export default ProductCard;
