import React from 'react'

const Icon = ({icon, className="", id="", onMenuClick}) => {
    return (
        <>
        <span className={`material-icons-round ${className}`}  id={id} onClick={onMenuClick}>
            {icon}
        </span>
        </>
    )
}

export default Icon