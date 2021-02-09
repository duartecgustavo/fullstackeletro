import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import HomePage from './views/Home';
// import NossasLojas from './views/Lojas';
// import Products from './views/Produtos';
// import PaginaCadastro from './views/Cadastro';
// import PaginaContatos from './views/Contato';
// import PaginaCarrinho from './views/Carrinho';
// import notFound from './views/notFound';
const HomePage = lazy(() => import ('./views/Home'));
const NossasLojas = lazy(() => import ('./views/Lojas'));
const Products = lazy(() => import ('./views/Produtos'));
const PaginaCadastro = lazy(() => import ('./views/Cadastro'));
const PaginaContatos = lazy(() => import ('./views/Contato'));
const LazyLoading = lazy(() => import ('./views/Carrinho'));
const notFound = lazy(() => import ('./views/notFound'));

const MainRoutes = () => {
    return (
        
        <Suspense fallback={

            <div className="d-flex align-items-center justify-content-center" style={{height:'100vh', width:'100vw', backgroundColor:'violet'}}>
                <h1>LOADING</h1>
            </div>
            

            }>

        <Routes>

            <Route path="/" element={<HomePage/>} />
            <Route path="/lojas" element={<NossasLojas/>} />
            <Route path="/produtos" element={<Products/>} />
            <Route path="/contatos" element={<PaginaContatos/>} />
            <Route path="/cadastro" element={<PaginaCadastro/>} />
            <Route path="/lazyLoading" element={<LazyLoading/>} />
            <Route path="*" element={<notFound/>} />
            
        </Routes>
        </Suspense>
    );
}

export default MainRoutes;