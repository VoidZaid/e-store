import React, {useEffect, useState} from 'react';
import { getCategories } from '../services/fetcher';
import { Link } from 'react-router-dom';
const NavItemsContainer = ({className, responsive, onCategoryClick,onShowMenu,  children}) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async ()=>{
            const responseObj = await getCategories();
            debugger
            setResults(responseObj)            
        };
        fetchCategories()
    }, []);
    
    useEffect(()=>{
        setLoading(false)
    },[results])

    const renderResponsiveMenu = ()=>{
        if(loading) return "Aun esta cargando..................";
        const arrNav = getNavItems(results);
        return arrNav;
    }

    const getNavItems = (arrResult) => {
        const arrNav = [];
        arrResult.map((e, id) => {
            arrNav.push(createListItem(e, id));
        });
        return arrNav;
    };

    const createListItem = (e, id) => {
        const valCategory = e.id? `category__${e.id}` : "";
        return (
        <li
        className={`header__list__item item__${id}`} 
        key={id} 
        id={valCategory} 
        onClick={()=>handleClick(e.id)} >
            <Link to={`/categories/${e.id}`}>{e.title}</Link> 
        </li>
        );
    };

    const handleClick = (id)=>{
        onShowMenu();
        onCategoryClick(id)
    }


    return (
        <>
            <ul className={className}>
                {renderResponsiveMenu()}
                <div>
                    {children}
                </div>
            </ul>
        </>
    )
}

export default NavItemsContainer