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
    <span className={`material-icons-round icon__btn`} onClick={onClick}>
        shopping_cart
    </span>
)

export const SearchBtn = ({onClick})=>(
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search icon__btn" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
        <path d="M21 21l-6 -6"></path>
    </svg>
)