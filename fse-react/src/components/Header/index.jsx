import React from 'react';
import './styles.css';

const Header = () => {

    return (

        <header className="desktop nav d-flex align-items-center bg-danger">

            <a className="col-4 col-sm-4 col-md-4 col-lg-4 d-flex align-items-center justify-content-left">
                <img className="col-lg-5 p-2" src="img/logoSVG.svg"/>
            </a>
            <div className="row col-lg-8 justify-content-end">
                <a className="nav-format2 font-weight-bold text-white text-center col-lg-2">Home</a>
                <a className="nav-format font-weight-bold text-white text-center col-lg-2 bg-danger">Produtos</a>
                <a className="nav-format font-weight-bold text-white text-center col-lg-2 bg-danger">Lojas</a>
                <a className="nav-format font-weight-bold text-white text-center col-lg-2 bg-danger">Contatos</a>
            </div>
        </header>

    );
}

export default Header;