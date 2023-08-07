// import React, { useEffect, useState } from 'react';
// import GetData from '../services/useCategories';


// const NavItems = ({responsive, onCategoryClick})=>{
//     const { isLoading, results } = GetData('categories', responsive);

//     const [useResults, setUseResults] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(()=>{
//         setLoading(isLoading)
//     },[isLoading])

//     useEffect(() => {
//         // debugger
//         // console.log("inprimido cuantas veces")
//         setUseResults([...results]);
//     }, [loading, setUseResults]);

//     const setResponsiveMenu = ()=>{
//         if(loading) return "Aun esta cargando..................";
//         const arrNav = getNavItems(useResults);
//         return arrNav;
//     }

//     const getNavItems = (arrResult) => {
//         const arrNav = [];
//         arrResult.map((e, id) => {
//             arrNav.push(createListItem(e, id));
//         });
//         return arrNav;
//     };
    
//     const createListItem = (e, id) => {
//         const valCategory = e.id? `category__${e.id}` : "";
//         return <li className={`header__list__item item__${id}`} key={id} id={valCategory} onClick={()=>onCategoryClick(e.id)}>{e.title}</li>;
//     };

//     return(
//         <>
//         {setResponsiveMenu()}
//         </>
//     );

// }

// export default NavItems;

// const NavItemss = ({responsive}) => {
//     const {isLoading, results} = GetData('categories');

//     const [useResults, setUseResults]=useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(()=>{
//         valCompleteFetch()
//     },[]);

//     useEffect(()=>{
//         if(!loading){
//             if(responsive) results.unshift({title: "My E-Store"});
//             setUseResults([...results]);
//             console.log(useResults)
//         }
//     },[loading]);


//     const setResponsiveMenu = (results)=>{
//         if(loading) return "Aun esta cargando...";
//         const arrNav = getNavItems(results)
//         return arrNav;
//     }


//     const getNavItems = (arrResult)=>{
//         const arrNav =[];
//         arrResult.map((e, id)=>{
//             arrNav.push(createListItem(e, id));
//         })
//         return arrNav;
//     }

//     const createListItem = (e, id)=>{
//         const valCategory = e.id!==undefined?`category__${e.id}`:"";
//         return <li className={`header__list__item item__${id}`}key={id} id={valCategory}>{e.title}</li>
//     }
//     return (
//         <>
//            {setResponsiveMenu(useResults)} 
//         </>
//     )     
// }

