import React, { useState, useEffect } from 'react';

import SelectProducts from './selecionarProd';
import './style.css';

const ProdutosPagina = () => {

    const [prods, setProds] = useState([]);
    useEffect(async () => {
        const res = await fetch('http://localhost/FullStackEletro-v3/fse-react/backend/api.php');
        setProds(await res.json())
    }, [])

    return (
        <>

          <SelectProducts/>

            <div class="container-fluid">

                <div class="row d-flex justify-content-center text-center m-3">
                    { prods.map(item => {
                        return (
                            <>
                                <div key="item.id_produto" id={item.categoria} className="box-item container-prod col-sm-10 col-md-4 col-lg-3 col-xl-3 mx-4 my-2">

                                <img className="img-prod img-thumbnail" src={item.imagem} />
                                <p className="text-muted">{item.descricao}</p>
                                    <hr/>
                                    <small className="text-muted"><del>R${item.preco}</del></small>
                                    <p className="text-preco"><strong>R${item.preco}</strong></p>

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