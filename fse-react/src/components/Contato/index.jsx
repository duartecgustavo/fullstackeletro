import React from 'react';

import email from '../../assets/contatos/email.svg';
import github from '../../assets/contatos/github.svg';
import insta from '../../assets/contatos/instagram.svg';
import twitter from '../../assets/contatos/twitter.svg';
import wpp from '../../assets/contatos/wpp.svg';

import MsgList from './MsgList';
import './style.css';

const Contatos = () => {
    return(

        <>

            <div className="bg-size-body">

                <div className="container-fluid mt-4">

                    <h3 className="text-contato text-center">ENTRE EM CONTATO!</h3>

                    <div className="row d-flex align-items-center justify-content-center;">
                        
                        <form className="form-contato col-12 col-sm-12 col-md-8 col-lg-4 col-xl-4 p-4 mx-auto" action="../../../backend/model/fasd.php" method="post">
                            
                            <div className="form-group">
                                <label for="exampleInputEmail1">E-mail</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="digite seu email"/>
                            </div>

                            <div className="form-group">
                                <label for="exampleInputPassword1">Senha</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="digite sua senha"/>
                            </div>

                            <div>
                                <label for="validationTextarea">Mensagem</label>
                                <textarea className="form-control" id="validationTextarea" name="comentario" placeholder="O que está pensando?"></textarea>
                            </div>

                            <div>
                                <button type="submit" className="btn-formulario btn mt-3 font-weight-bold">ENVIAR</button>
                            </div>

                            <div className="text-center mt-4">
                                <a><img className="mx-2" src={email} /></a>
                                <a><img className="mx-2" src={github} /></a>
                                <a><img className="mx-2" src={insta} /></a>
                                <a><img className="mx-2" src={twitter} /></a>
                                <a><img className="mx-2" src={wpp} /></a>
                            </div>

                        </form>

                    </div>

                    <div className="container my-4">
                        <h1 className="text-contato text-center">Comentarios</h1>
                        <MsgList/>
                    </div>

                </div>

            </div>

        </>

    );
}

export default Contatos;