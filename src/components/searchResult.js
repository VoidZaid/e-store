import React, { useEffect, useState } from 'react';
import { getProductByQuery } from '../services/fetcher';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const SearchResult = () => {
    const [products, setProducts] = useState({
        errMessage: '', 
        data: {specs:{dimensions:'', capacity:''}, 
        features:[]}
    });
    const [searchParams] = useSearchParams();
    const query = searchParams.get('s');

    // cada que el query cambie vamos a ejecutar esto, en SEARCH usamos deboucing, con ello cambia nuestro QUERY
    useEffect(()=>{
        const fetchData = async ()=>{
            const responseObject = await getProductByQuery(query);
            setProducts(responseObject)
        };
        fetchData()
    },[query])

    const renderProducts = ()=>{
        if(Array.isArray(products.data)){
            if(products.data.length > 0){
                return products.data.map((e,id)=>(
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
            }else {
                return <div>No results found</div>
            }
        }
    };
    return (
        <div>
            {products.errMessage && <div>Error: {products.errMessage}</div>}
            {renderProducts()}
        </div>
    )
}

export default SearchResult