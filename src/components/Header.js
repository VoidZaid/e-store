import React,{useState} from 'react';
import Icon from './Icon';
import Search from './search';
import MenuResponsive from './MenuResponsive';
import { Link, useNavigate } from 'react-router-dom';

import { BasketIcon } from './Icons';

const Header = ({children, onCategoryClick}) => {
    const [menuShow, setMenuShow] = useState(false);

    const navigate = useNavigate();

    const displayMenu = ()=>{
        setMenuShow(menuShow === true? false: true);
    } 

    return (
        <header className="header">
            <BasketIcon onClick={()=>navigate('/basket')}/>
            <Search/>
            {/* <h1 className="header__title"><Link to={'/'}>My E-store</Link></h1> */}
            <Icon icon='menu' className='header__icon-menu icon__btn' id='header__icon' onMenuClick={displayMenu}/>
            <MenuResponsive menuShow={menuShow} onDisplayMenu={displayMenu} onCategoryClick={onCategoryClick}>
                {children}
            </MenuResponsive>
        </header>        
    )
}

export default Header