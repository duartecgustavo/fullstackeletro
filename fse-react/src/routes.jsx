import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './views/Home';
import NossasLojas from './views/Lojas';
import Products from './views/Produtos';
import notFound from './views/notFound';


const MainRoutes = () => {
    return (

        <Routes>

            <Route path="/" element={<HomePage/>} />
            <Route path="/lojas" element={<NossasLojas/>} />
            <Route path="/produtos" element={<Products/>} />
            <Route path="*" element={<notFound/>} />
            
        </Routes>

    );
}

export default MainRoutes;