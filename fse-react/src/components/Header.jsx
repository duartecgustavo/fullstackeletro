import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logoSVG.svg';

import './global.css';

const Header = () => {
    return (
        <>


        <nav className="desktop nav d-flex align-items-center bg-danger">
            
            <Link className="link-img-header col-4 col-sm-4 col-md-4 col-lg-4 d-flex align-items-center justify-content-left" to="/">
                <img src={logo} className="img-header col-lg-5 p-2" />
            </Link>

            <div className="row col-lg-8 justify-content-end">
                <Link className="link-pages font-weight-bold text-white text-center col-lg-2 bg-danger" to="/">Home</Link>
                <Link className="link-pages font-weight-bold text-white text-center col-lg-2 bg-danger" to="/produtos">Produtos</Link>
                <Link className="link-pages font-weight-bold text-white text-center col-lg-2 bg-danger" to="/lojas">Lojas</Link>
                <Link className="link-pages font-weight-bold text-white text-center col-lg-2 bg-danger" to="/contatos">Contatos</Link>
            </div>
        </nav>



        </>
    )
}
export default Header;