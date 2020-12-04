import React, { useState, useEffect } from "react";
//import API from './API_Products';

const SelectProducts = () => {
    const [prods, setProds] = useState([]);

    useEffect(async () => {
        const res = await fetch(
            "http://localhost/FullStackEletro-v3/fse-react/backend/api.php"
        );
        setProds(await res.json());
    }, []);

    const categoria = prods.map(element => {
        const obj = {}
        obj["id"] = element.id_categoria;
        obj["categoria"] = element.categoria;
        return obj;
    })
    console.log(categoria);
    const categoriaLimpa = [...new Set(categoria.map(JSON.stringify))].map(JSON.parse);
    console.log(categoriaLimpa);
    console.log(categoria.id_categoria)

    let filtro = document.getElementsByClassName("box-item");

    function filtroProd(event) {
        let item = event.target.id;
        console.log(item);
        // for (let i = 0; i < filtro.length; i++) {
        //     if (item == filtro[i].id) {
        //         filtro[i].style.display = "block";
        //     }
        //     else {
        //         filtro[i].style.display = "none";
        //     }
        // }
    }

    // function todasCategorias() {
    //     for (let i = 0; i < filtro.length; i++) {
    //         filtro[i].style.display = "block";
    //     }
    // }

    return (

        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <nav className="menu-categoria desktop container d-flex align-items-center justify-content-center mt-4 shadow">
            <div className="row">


                <div className="row">
                {/* <a className="text-categoria font-weight-bold text-white text-center mx-3" onclick={todasCategorias}>TODOS</a> */}
                <a className="text-categoria font-weight-bold text-white text-center mx-3" id={1} onclick={filtroProd}>GELADEIRAS</a>
                <a className="text-categoria font-weight-bold text-white text-center mx-3" id={2} onclick={filtroProd}>FOGÕES</a>
                <a className="text-categoria font-weight-bold text-white text-center mx-3" id={3} onclick={filtroProd}>LAVA-ROUPA</a>
                <a className="text-categoria font-weight-bold text-white text-center mx-3" id={4} onclick={filtroProd}>MICROONDAS</a>
                <a className="text-categoria font-weight-bold text-white text-center mx-3" id={5} onclick={filtroProd}>FREEZER</a>
                <a className="text-categoria font-weight-bold text-white text-center mx-3">EXAUSTORES</a>
                </div>

                </div>
            </nav>
        </>
    );
};
export default SelectProducts;