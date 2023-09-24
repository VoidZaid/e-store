export const UpIcon = ({onClick})=>(
    <span className={`material-icons-round`} onClick={onClick}>
        add
    </span>
)
export const DownIcon = ({onClick})=>(
    <span className={`material-icons-round`} onClick={onClick}>
        remove
    </span>
)
export const TrashIcon = ({onClick})=>(
    <span className={`material-icons-round`} onClick={onClick}>
        delete
    </span>
)
export const MenuIcon = ({onMenuClick})=>(
    <span className={`material-icons-round header__icon-menu icon__btn`} onClick={onMenuClick}>
        menu
    </span>
)
export const BasketIcon = ({onClick})=>(
    <span className={`material-icons-round`} onClick={onClick}>
        shopping_cart
    </span>
)