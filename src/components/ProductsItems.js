import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/useProducts';

const ProductsItems = (id) => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState({errMessage: '', data: []});

    useEffect(()=>{
        const fetchData = async ()=>{
            const responseObject = await getProducts(id);
            setProducts(responseObject);
        }
        console.log(id);
        fetchData()
    },[id])

    useEffect(()=>{
        setLoading(false);
    },[loading, setProducts])

    const renderProducts = ()=>{
        // console.log(getListProducts())
        if(loading) return "Aun esta cargando!!!!!!!!!!!"
        console.log(products)
        return getListProducts()
    }

    const getListProducts = ()=>{
        return products.data.map(e=>createProductItem(e))
    }
    const createProductItem = (e)=>{
        return <div key={e.id} id={e.id}>{e.title}</div>
    }

    return (
        <div>
            {products.errMessage && <div>Error: {products.errMessage}</div>}
            {products.data && renderProducts()}
        </div>
    )
}

export default ProductsItems