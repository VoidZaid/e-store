import { useState, useEffect } from 'react'

const GetProductById = (id) => {
    const [isProductsLoading, setIsProductsLoading] = useState(true);
    const [resultsProducts, setResultsProducts] = useState([]);

    const categoryProducts = id!==0?`?catId=${id}`:"";

    useEffect(()=>{
        fetch(`http://localhost:3001/products${categoryProducts}`)
        .then(response =>  response.json())
        .then(data =>{
            debugger
            console.log(data)
            setResultsProducts([...data])//establecemos resultado fetch como estado
        })
        .finally(()=> {
            console.log(resultsProducts)
            setIsProductsLoading(false)
        })
    },[]);

    return {isProductsLoading, resultsProducts}
}

export default GetProductById