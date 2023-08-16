import React from 'react';
import Icon from './Icon';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({id,title, img, specs, features, price, stock}) => {
    const navigate = useNavigate();

    return (
        <article className='main__product' key={id}>
            <h3 className='main__product__title'>
                <Link to={`products/${id}`}>{title}</Link>
            </h3>

            <div className='main__product__img-container'>
                <figure>
                    <img className='main__product__img' src={`./assets/${img}`} alt={title} />
                </figure>
            </div>

            <aside className='main__product__espec'>
                <div className='main__product__espec-dimension'>
                    <h3>Dimensions</h3>
                    <ul>
                        {specs.dimensions.split("-").map((e,id) =>{
                            return <li key={id}><Icon className={'main__product__list-icon'} icon={"chevron_right"}/>{e}</li>
                        })}
                    </ul>
                </div>
                {
                specs.capacity&&
                <div className='main__product__espec-capacity'>
                    <h3>Capacity</h3>
                    <label>{specs.capacity}</label>
                </div>
                }

                <div className='main__product__espec-features'>
                    {features&& <h3>Features</h3>}
                    <ul>
                        {features?.map((e, id)=> {
                            return <li key={id}><Icon className={'main__product__list-icon'} icon={"chevron_right"}/>{e}</li>
                        })}
                    </ul>
                </div>
            </aside>

            <aside className='main__product__finance'>
                <div className='main__product__finance-price'>
                    &pound; {price}
                </div>
                <div className='main__product__finance-stock'>
                    <label>Stock level: {stock}</label><br />
                    <label>Free delivery</label>
                </div>
                <div className='main__product__action'>
                    <button onClick={()=>{navigate(`products/${id}`)}}>View product <Icon icon={'search'}/></button>
                    <button>Add to basket <Icon icon={'shopping_cart'}/></button>
                </div>
            </aside>
        </article>
    )
}
 export default ProductCard;