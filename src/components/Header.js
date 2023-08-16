import React,{useState} from 'react';
import Icon from './Icon';
import MenuResponsive from './MenuResponsive';
import { Link } from 'react-router-dom';

const Header = ({children, onCategoryClick}) => {
    const [menuShow, setMenuShow] = useState(false);

    const showMenu = ()=>{
        setMenuShow(menuShow === true? false: true);
    } 

    return (
        <header className="header"> 
            <h1 className="header__title"><Link to={'/'}>My E-store</Link></h1>
            <Icon icon='menu' className='header__icon-menu icon__btn' id='header__icon' onMenuClick={showMenu}></Icon>
            <MenuResponsive menuShow={menuShow} onShowMenu={showMenu} onCategoryClick={onCategoryClick}>
                {children}
            </MenuResponsive>
        </header>        
    )
}

export default Header