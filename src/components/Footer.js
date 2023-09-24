import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <Link to={"/"}>Home</Link> | 
                <Link to={"/basket"}>Basket</Link>
            </footer>
        </>
    )
}

export default Footer