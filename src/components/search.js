import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBtn } from './Icons';
const Search = () => {
    const [searchTerm , setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const delay = setTimeout(()=>{//SE AUTOINVOCA A Si misma
            if(searchTerm) navigate('search?s='+searchTerm)
            else navigate('/')
        },2000)
        return ()=> clearTimeout(delay)
    },[searchTerm])

    const handleChange = (ev)=>{
        setSearchTerm(ev.target.value)
    }
  return (
    <div className='search__container' id='search'>
        <input type="text" name='search' onChange={handleChange}/>
        <label htmlFor="">
            <SearchBtn/>
        </label>
    </div>
  )
}

export default Search