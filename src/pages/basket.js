import React, {useContext, useEffect, useState} from 'react';
import { TrashIcon, UpIcon, DownIcon } from '../components/Icons';
import { CartContext } from '../contexts/cartContext';

import { Link, useNavigate } from 'react-router-dom';

const Basket = () => {
    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();
    const {getItems, clearBasket,removeProduct,increaseQuantity,decreaseQuantity} = useContext(CartContext);

    useEffect(()=>{
        setCartItems(getItems());
        console.log(cartItems)
    },[getItems])

    const renderCart= ()=>{
        if(cartItems.length > 0){
            return cartItems.map((p)=>(
                <tr key={p.id}> 
                    <td><Link to={`/products/${p.id}`}>{p.title}</Link></td>
                    <td>{p.quantity}</td>
                    <td className='basket__items__data-actions'>
                        {/* para incrementar o restar cantidad solo necsitamos el id */}
                        <UpIcon onClick={()=>setCartItems(increaseQuantity({id: p.id}))}/>
                        <DownIcon onClick={()=>setCartItems(decreaseQuantity({id: p.id}))}/>
                        <TrashIcon onClick={()=>setCartItems(removeProduct({id: p.id}))}/>
                    </td>
                    <td>${p.price*p.quantity}</td>
                </tr>
            ))
        }else{
            return <tr><td><span>The basket is actually empty</span></td></tr>
        }
    }

    const renderTotal = ()=>{
        const cartItems = getItems();
        if(cartItems.length > 0){
            return cartItems.reduce((total, e)=> total + (e.price* e.quantity),0)
        }
        return 0;
    }


    return (
        <>
            <div className='basket__header'>
                <h2 className='basket__header__title'>Shopping Basket</h2>
                <button onClick={()=>navigate('/checkout')} className='basket__btn'>Checkout</button>
            </div>

            <table className='basket__items'>
                <thead className='basket__items__header'>
                    <tr>
                        <th className='first'>Items</th>
                        <th className='second'>Qty</th>
                        <th className='second'>Action</th>
                        <th className='third'>Price</th>
                    </tr>
                </thead>
                <tbody className='basket__items__data'>
                    {renderCart()}
                </tbody>
            </table>
            <div className='basket__footer'>
                {/* <button onClick={()=>{
                    clearBasket();
                    setCartItems(getItems())
                }} className='basket__btn'>Clear</button> */}
                <button onClick={()=>setCartItems(clearBasket())} className='basket__btn'>Clear</button>
                <p className='basket__footer__total'>Total $<span>{renderTotal()}</span></p>
            </div>

        </>
    )
}

export default Basket