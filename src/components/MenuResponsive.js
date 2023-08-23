import React from 'react';
import Icon from './Icon';
import NavItemsContainer from './NavItemsContainer';

const MenuResponsive = ({menuShow, onShowMenu, onCategoryClick, children}) => {
    const NO_DISPLAY = "no__display";

    const valMenuDisplay = ()=>{
        let classString = menuShow?"": NO_DISPLAY;
        return classString
    }
    

    return (
        <>
        <div className={`header__bg-responsive ${valMenuDisplay()}`} id="header__bg-responsive"></div>
        <nav className={`header__mobile__nav ${valMenuDisplay()}`}>
            <Icon icon='close' className='header__icon-close icon__btn' onMenuClick={onShowMenu}/>
            <h1 className='header__mobile__title'>My E-store</h1>
            <NavItemsContainer 
                className={"header__mobile__list"} 
                responsive={true} 
                onCategoryClick={onCategoryClick}
                onShowMenu={onShowMenu}>
                    <nav>
                        {children}componente de redes sociales
                    </nav>
            </NavItemsContainer>
        </nav>
        </>
    )
}

export default MenuResponsive