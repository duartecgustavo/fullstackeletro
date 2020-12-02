import React, { useState, useEffect } from 'react';


const ProdutosPagina = () => {

    const [prods, setProds] = useState([]);
    useEffect(async () => {
        const res = await fetch('http://localhost/FullStackEletro-v3/fse-react/backend/api.php');
        setProds(await res.json())
    }, [])

    return (
        <>
            { prods.map(item => {
                return (
                    <>
                        <div key={item.id_produto} className="row">
                            <div id={item.categoria} className="col-lg-3">
                                <h1>{item.descricao}</h1>
                                <p>{item.id_produto}</p>
                                <p>{item.categoria}</p>
                                <p>{item.preco}</p>
                                <img className="img-thumbnail" src={item.imagem} />
                            </div>
                        </div>
                    </>
                )
            })
            }
        </>
    )
}

export default ProdutosPagina;