import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../services/fetcher';
import ProductCard from './ProductCard';

const Category = () => {
    const {categoryId} = useParams();
    
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState({errMessage: '', data: []});

    useEffect(()=>{
        const fetchData = async ()=>{
            const categoryProducts = await getProductsByCategory(categoryId);
            setProducts(categoryProducts);
        }
        fetchData()
    },[categoryId])

    useEffect(()=>{
        setLoading(false);
    },[loading, setProducts])

    const renderProducts = ()=>{
        if(loading) return "Cargando elementos...............";
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

        <>
            {products.errMessage && <div>Error: {products.errMessage}</div>}
            {products.data && renderProducts()}
        </>
    )
}

export default Category