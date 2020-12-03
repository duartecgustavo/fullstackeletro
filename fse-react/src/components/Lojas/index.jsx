import React from 'react';

import lojaRio from '../../assets/lojas/Rio.jpg';
import lojaSalvador from '../../assets/lojas/salvador.jpg';
import lojaSP from '../../assets/lojas/sp.jpg';

import './style.css';

const Lojas = () => {
    return(

        <>

<div className="desktop space-lojas-top container"></div>

    <div className="container-fluid d-flex">

        <div className="row container-fluid d-flex justify-content-center my-auto">

            <div className="lojaSP col-12 col-sm-12 col-lg-3 my-5 mx-4 p-0">
                <div> 
                    <h3 className="lojaSP-tittle text-center m-2">SÃO PAULO</h3>
                    <p className="text-loja-sp text-center m-1">Avenida Paulista, 550 - Jardim Paulista</p>
                    <p className="tell-loja-sp text-center mb-2">(11)99999-9999</p>
                </div>
                <div>
                    <img className="img-fluid" src={lojaSP} alt="loja são paulo" />
                </div>
            </div>


            <div className="lojaRio col-12 col-sm-12 col-lg-3 my-5 mx-4 p-0">
                <div>
                    <h3 className="lojaRio-tittle text-center m-2">RIO DE JANEIRO</h3>
                    <p className="text-loja-rio text-center m-1">Avenida Leblon, 777 - Asa Delta</p>
                    <p className="tell-loja-rio text-center mb-2">(25)66666-6666</p>
                </div>
                <div>
                    <img className="img-fluid" src={lojaRio} alt="loja rio de janeiro" />
                </div>
            </div>
            
            <div className="lojaSalvador col-12 col-sm-12 col-lg-3 my-5 mx-4 p-0">
                <div>
                    <h3 className="lojaSalvador-tittle text-center m-2">SALVADOR</h3>
                    <p className="text-loja-salvador text-center m-1">Rua Larica, 1882 - Jardim America</p>
                    <p className="tell-loja-salvador text-center mb-2">(12)88888-8888</p>
                </div>
                <div>
                    <img className="img-fluid" src={lojaSalvador} alt="" />    
                </div>
            </div>  

        </div>

    </div>

<div className="desktop space-lojas-botton container"></div>



        </>

    );
}

export default Lojas;