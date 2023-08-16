import  {useState, useEffect} from 'react';

const useCategories = (typeData="categories", responsive) => {
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState([]);

    const title = responsive? "My E-Store":null;

    useEffect(()=>{
        fetch(`http://localhost:3001/${typeData}`)
        .then(response =>  response.json())
        .then(data =>{
            // if(title) data.unshift({title: title})
            setResults(data)//establecemos resultado fetch como estado
        })
        .finally(()=> setIsLoading(false))
    },[]);

    return {isLoading, results}
}

export default useCategories;