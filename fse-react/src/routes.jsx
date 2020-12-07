import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './views/Home';
import NossasLojas from './views/Lojas';
import Products from './views/Produtos';
import PaginaCadastro from './views/Cadastro';
import PaginaContatos from './views/Contato';
import notFound from './views/notFound';


const MainRoutes = () => {
    return (

        <Routes>

            <Route path="/" element={<HomePage/>} />
            <Route path="/lojas" element={<NossasLojas/>} />
            <Route path="/produtos" element={<Products/>} />
            <Route path="/contatos" element={<PaginaContatos/>} />
            <Route path="/cadastro" element={<PaginaCadastro/>} />
            <Route path="*" element={<notFound/>} />
            
        </Routes>

    );
}

export default MainRoutes;