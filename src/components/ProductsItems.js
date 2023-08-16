import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/fetcher';
import ProductCard from './ProductCard'

const ProductsItems = ({className, id}) => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState({errMessage: '', data: []});

    useEffect(()=>{
        const fetchData = async ()=>{
            const responseObject = await getProducts(id);
            // console.log(responseObject)
            setProducts(responseObject);
        }
        fetchData()
    },[id])

    useEffect(()=>{
        setLoading(false);
    },[loading, setProducts])

    const renderProducts = ()=>{
        // console.log(getListProducts())
        if(loading) return "Aun esta cargando!!!!!!!!!!!";
        return getListProducts()
    }

    const getListProducts = ()=>{
        return products.data.map((e, id)=>(   
            <ProductCard key={id}
                id={e.id}
                title={e.title} 
                img={e.image} 
                specs={e.specs} 
                features={e.features} 
                price={e.price} 
                stock={e.stock}
            />
        ))
    }

    return (
        <section className={className}>
            {products.errMessage && <div>Error: {products.errMessage}</div>}
            {products.data && renderProducts()}
        </section>
    )
}

export default ProductsItems