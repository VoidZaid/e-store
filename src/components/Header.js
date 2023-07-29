import React,{useState} from 'react';
import Icon from './Icon';
import MenuResponsive from './MenuResponsive';

const Header = ({children, onCategoryClick}) => {
    const [menuShow, setMenuShow] = useState(false);

    const showMenu = ()=>{
        setMenuShow(menuShow === true? false: true);
    } 

    return (
        <header className="header">
            <h1 className="header__title">My E-store</h1>
            <Icon icon='menu' className='header__icon-menu icon__btn' id='header__icon' onMenuClick={showMenu}></Icon>
            <MenuResponsive menuShow={menuShow} onShowMenu={showMenu} onCategoryClick={onCategoryClick}>
                {children}
            </MenuResponsive>
        </header>        
    )
}

export default Header