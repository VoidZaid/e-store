import React from 'react';
import Icon from './Icon';
import NavItemsContainer from './NavItemsContainer';
import { useNavigate } from 'react-router-dom';

const MenuResponsive = ({menuShow, onDisplayMenu, onCategoryClick, children}) => {
    const NO_DISPLAY = "no__display";
    const navigate = useNavigate();

    const valMenuDisplay = ()=>{
        let classString = menuShow?"": NO_DISPLAY;
        return classString
    }
    const handleClick = ()=>{
        navigate('/');
        onDisplayMenu()
    }

    return (
        <>
        <div className={`header__bg-responsive ${valMenuDisplay()}`} id="header__bg-responsive"></div>
        <nav className={`header__mobile__nav ${valMenuDisplay()}`}>
            <Icon icon='close' className='header__icon-close icon__btn' onMenuClick={onDisplayMenu}/>
            <h1 className='header__mobile__title' onClick={()=>handleClick()}>My E-store</h1>
            <NavItemsContainer 
                className={"header__mobile__list"} 
                responsive={true} 
                onCategoryClick={onCategoryClick}
                onShowMenu={onDisplayMenu}>
                    <nav>
                        {children}componente de redes sociales
                    </nav>
            </NavItemsContainer>
        </nav>
        </>
    )
}

export default MenuResponsive