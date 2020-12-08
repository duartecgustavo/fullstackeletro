import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logoSVG.svg';
import drop from '../assets/seta-para-baixo-do-angulo.svg';

import './global.css';

const Header = () => {
    return (
        <>


        {/* <!-- MENU DESKTOP --> */}
        <nav className="desktop nav d-flex align-items-center bg-danger">
            
            <Link className="link-img-header-desk col-4 col-sm-4 col-md-4 col-lg-4 d-flex align-items-center justify-content-left" to="/">
                <img src={logo} className="img-header-desk col-lg-5 p-2" />
            </Link>

            <div className="row col-lg-8 justify-content-end">
                <Link className="link-pages-desk font-weight-bold text-white text-center col-lg-2 bg-danger" to="/">Home</Link>
                <Link className="link-pages-desk font-weight-bold text-white text-center col-lg-2 bg-danger" to="/produtos">Produtos</Link>
                <Link className="link-pages-desk font-weight-bold text-white text-center col-lg-2 bg-danger" to="/lojas">Lojas</Link>
                <Link className="link-pages-desk font-weight-bold text-white text-center col-lg-2 bg-danger" to="/contatos">Contatos</Link>
            </div>
        </nav>

        {/* <!-- MENU DEVICE --> */}
        <nav className="phone nav row align-items-center bg-danger">

            <Link className="link-img-header-dev col-6 col-sm-6 col-md-6 col-lg-6 d-flex align-items-center justify-content-left" to="/">
                <img className="img-header-dev col-lg-5 p-2" src={logo} />
            </Link>


            <button className="botao-drop navbar-toggler col-5 col-sm-5 col-md-5 col-lg-5 d-flex align-items-center justify-content-end bg-danger pr-4" type="button">
                <div className="dropdown">
                    <a className="btn navbar-toggler-icon" 
                        href="#" 
                        
                        role="button" 
                        id="dropdownMenuLink" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                        <img className="img-drop mx-auto my-auto" src={drop} />
                        </a>
                
                    <div className="div-drop dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                        <Link className="link-pages-dev dropdown-item p-3 dropBar" to="/">HOME</Link>
                        <Link className="link-pages-dev2 dropdown-item p-3 dropBar" to="/lojas">LOJAS</Link>
                        <Link className="link-pages-dev dropdown-item p-3 dropBar" to="/contatos">CONTATO</Link>
                        <Link className="link-pages-dev2 dropdown-item p-3 dropBar" to="/produtos">PRODUTOS</Link>
                    </div>
                </div>
            </button>
        </nav>

        </>
    )
}
export default Header;