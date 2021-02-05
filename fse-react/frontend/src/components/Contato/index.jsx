import React from 'react';
import { useState, useEffect } from 'react';

import email from '../../assets/contatos/email.svg';
import github from '../../assets/contatos/github.svg';
import insta from '../../assets/contatos/instagram.svg';
import twitter from '../../assets/contatos/twitter.svg';
import wpp from '../../assets/contatos/wpp.svg';

import MsgList from './MsgList';
import './style.css';

const Contatos = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    // sentMessage
    const sentMessage = (event) => {
        event.preventDefault();
        // console.log(event.target);
        let form = {
            nome: name,
            msg: message
        }

        const url = "http://localhost:5000/comentarios";

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })
    }

    return(

        <>

            <div className="bg-size-body">

                <div className="container-fluid mt-4">

                    <h3 className="text-contato text-center">ENTRE EM CONTATO!</h3>

                    <div className="row d-flex align-items-center justify-content-center;">
                        
                        <form className="form-contato col-12 col-sm-12 col-md-8 col-lg-4 col-xl-4 p-4 mx-auto" onSubmit={sentMessage}>
                            
                            <div className="form-group">
                                <label for="exampleInputEmail1">E-mail</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="name" aria-describedby="emailHelp" placeholder="digite seu email"
                                value={name} onChange= {event => setName(event.target.value)}/>
                            </div>

                            <div>
                                <label for="validationTextarea">Mensagem</label>
                                <textarea className="form-control" id="validationTextarea" name="message" placeholder="O que está pensando?"
                                value={message}  onChange= {event => setMessage(event.target.value)}></textarea>
                            </div>

                            <div>
                                <button className="btn-formulario btn mt-3 font-weight-bold">ENVIAR</button>
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