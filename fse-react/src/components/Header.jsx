import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <Link to="/">Home!</Link>
            <Link to="/lojas">Nossas Lojas!</Link>
            <Link to="/produtos">Produtos</Link>
        </>
    )
}
export default Header;