import React, {useEffect, useState} from 'react';
import useCategories from '../services/useCategories';

const NavItemsContainer = ({className, responsive, onCategoryClick,onShowMenu,  children}) => {
    debugger
    const { isLoading, results } = useCategories('categories', responsive);

    const [useResults, setUseResults] = useState([]);
    const [loading, setLoading] = useState(isLoading);

    useEffect(()=>{
        setLoading(isLoading)
    },[isLoading])

    useEffect(() => {
        // debugger
        // console.log("inprimido cuantas veces")
        setUseResults([...results]);
    }, [loading, setUseResults]);

    const renderResponsiveMenu = ()=>{
        if(loading) return "Aun esta cargando..................";
        const arrNav = getNavItems(useResults);
        return arrNav;
    }

    const getNavItems = (arrResult) => {
        const arrNav = [];
        arrResult.map((e, id) => {
            arrNav.push(createListItem(e, id));
        });
        return arrNav;
    };


    const handleClick = (id)=>{
        onShowMenu();
        onCategoryClick(id)
    }
    
    const createListItem = (e, id) => {
        const valCategory = e.id? `category__${e.id}` : "";
        return <li 
        className={`header__list__item item__${id}`} 
        key={id} 
        id={valCategory} 
        onClick={()=>handleClick(e.id)} >{e.title}</li>;
    };


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