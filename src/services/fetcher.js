const BASE_URL = "http://localhost:3001/";
export const fetcher = async (url) =>{
    let responseObject = {errMessage: '', data: []}
    try{
        const response = await fetch(`${BASE_URL}${url}`);
        if(!response.ok) throw new Error(`HTTP ERROR: ${response.status}`)
        const responseData = await response.json();
        responseObject.errMessage = '';
        responseObject.data = responseData
        // return responseObject;
        // console.log(responseObject)
    } catch(err){
        responseObject.errMessage = err.message
    }
    return responseObject;
}

export const getProductsByCategory = (id)=>{
    let param =`products?catId=${id}`;
    return fetcher(param)
}
export const getProducts = ()=>{
    return fetcher("products")
}

export const getCategories = async()=>{
    const result = await fetcher('categories');
    return result.data; 
}

export const getProductById = (id)=>{
    return fetcher(`products/${id}`)
}
