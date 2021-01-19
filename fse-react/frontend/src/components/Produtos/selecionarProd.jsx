import React, { useState, useEffect } from "react";
//import API from './API_Products';

const SelectProducts = () => {
    const [prods, setProds] = useState([]);

    useEffect(async () => {
        const res = await fetch(
            "http://localhost:5000/produtos"
        );
        const data = await res.json();
        setProds(data);
    }, []);

    // create array with category and id
    const category = prods.map(category => {
        const container = {};
        container['id'] = category.id_categoria; // get id_category
        container['name'] = category.categoria; // get name_category
        return container;
    })

    // remove duplicates values from container
    const category_simple = category.map(JSON.stringify).reverse()
        .filter(function (item, index, arr) { return arr.indexOf(item, index + 1) === -1; })
        .reverse().map(JSON.parse);

    let filtro = document.getElementsByClassName("box-item");

    function filtroProd(event) {
        let item = event.target.id;

        for (let i = 0; i < filtro.length; i++) {
            if (item == filtro[i].id) {
                filtro[i].style.display = "block";
            }
            else {
                filtro[i].style.display = "none";
            }
        }
    }

    function todasCategorias() {
        for (let i = 0; i < filtro.length; i++) {
            filtro[i].style.display = "block";
        }
    }

    return (

        <>
            <nav className="menu-categoria desktop container d-flex align-items-center justify-content-center mt-4 shadow">
                <div className="row">


                    <div className="row">
                        <a className="text-categoria font-weight-bold text-white text-center mx-3" onClick={todasCategorias}>TODOS</a>
                        {category_simple.map(category => {
                            return (
                                <a key={category.id} id={category.id} className="text-categoria font-weight-bold text-white text-center mx-3" onClick={filtroProd}>{category.name}</a>
                            )
                        })}

                    </div>

                </div>
            </nav>
        </>
    );
};
export default SelectProducts;