import React, { useState, useEffect } from 'react';

import SelectProducts from './selecionarProd';
import './style.css';

const ProdutosPagina = () => {

    const [prods, setProds] = useState([]);
    useEffect(async () => {
        const res = await fetch('http://localhost:5000/produtos');
        setProds(await res.json())
    }, [])

    const destaque = (event) => {
        if (event.target.style.width === "300px") {
            event.target.style.width = "200px"
        } else {
            event.target.style.width = "300px"
        }
    }
    const redimenciona = (event) => {
        if (event.target.style.width === "200px") {
            event.target.style.width = "300px"
        } else {
            event.target.style.width = "200px"
        }
    }
    return (
        <>

            <SelectProducts />

            <div class="container-fluid">

                <div class="row d-flex justify-content-center text-center m-3">
                    {prods.map(item => {
                        return (
                            <>
                                <div key={item.id_produto} id={item.id_categoria} className="box-item container-prod col-sm-10 col-md-4 col-lg-3 col-xl-3 mx-4 my-2">
                                    <div className="d-flex flex-column justify-content-between">
                                    <div className="d-flex-column h-100">
                                        <img className="img-prod img-thumbnail col-10" onMouseOver={destaque} onMouseOut={redimenciona} src={item.imagem} />
                                        <p className="text-muted">{item.descricao}</p>
                                    </div>

                                    <div className="row">
                                        <div className="d-flex flex-column align-items-center justify-content-center col-7 border">
                                            <small className="text-muted my-auto"><del>R${item.preco}</del></small>
                                            <p className="text-preco my-auto"><strong>R${item.preco}</strong></p>
                                        </div>
                                        <div className="bg-addcarrinho col-5 d-flex align-items-center justify-content-center border p-2">
                                            <a className="text-addcarrinho"><p className="row my-auto font-weight-bold text-white">Adicionar ao carrinho</p></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }
                </div>
            </div>

        </>
    )
}

export default ProdutosPagina;