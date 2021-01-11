import React from 'react';
import { Link } from 'react-router-dom';


import './style.css';

import bannerCadastro from '../../assets/cadastro/bannerCadastro.svg';

const Cadastro = () => {
    const registerUser = (event) => {
        event.preventDefault();
        // console.log(event.target);
        let formData = new FormData(event.target)

        const url = "http://localhost/FullStackEletro-v3/fse-react/backend/registerUsers.php";

        fetch(url, {
            method: "POST",
            body: formData
        })
    }
    return (

        <>


            <div className="container-fluid">

                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-lx-6 d-flex justify-content-center">

                        <form className="form px-3 py-3 my-5 mx-2" onSubmit={registerUser}>

                            <h2 className="text-cadastro text-center m-5 font-weight-bold">CADASTRO</h2>

                            <div className="form-group">
                                <label for="exampleInputEmail1" className="text-color m-0">Nome</label>
                                <input type="text" className="form-control" id="exampleInputNome" name="name" placeholder="digite seu nome" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="text-color m-0">E-mail</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="digite seu email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className="text-color m-0">Senha</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="senha" placeholder="digite sua senha" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="text-color m-0">Nascimento</label>
                                <input type="date" className="form-control" id="exampleInputNasc" name="idade" placeholder="sua data de nascimento" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className="text-color m-0">CEP</label>
                                <input type="number" className="form-control" id="exampleInputcep" name="cep" placeholder="digite seu cep" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className="text-color m-0">UF</label>
                                <input type="text" className="form-control" id="exampleInputUF" name="uf" placeholder="seu estado" />
                           </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className="text-color m-0">Cidade</label>
                                <input type="text" className="form-control" id="exampleInputUF" name="cidade" placeholder="sua cidade" />
                           </div>
                            <button className="botao-cadastro btn font-weight-bold">ENVIAR</button>
                        </form>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-lx-6 d-flex justify-content-center align-items-center">

                        <img src={bannerCadastro} className="img-cadastro d-flex align-items-center vertical-align-center" />
                    </div>

                </div>

            </div>

        </>
    )
}

export default Cadastro;