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
    } catch(err){
        responseObject.errMessage = err.message
    }
    return responseObject;
}

export const getProducts = (id)=>{
    let param =id.id?`products?catId=${id.id}`:"products";
    console.log(`${BASE_URL}${param}`)
    return fetcher(param)
}

export const getCategories = ()=>{
    return fetcher('categories')
}
