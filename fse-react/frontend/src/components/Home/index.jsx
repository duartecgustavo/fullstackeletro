import React from 'react';

import banner1 from '../../assets/home/BannerHome.svg';
import banner2 from '../../assets/home/BannerHome2.svg';
import banner3 from '../../assets/home/BannerHome3.svg';
import imgLogin from '../../assets/home/imglogin.svg';

import bannerHome from '../../assets/home/banner1-home.png';
import bannerMin from '../../assets/home/banner-home-min.jpg';
import bannerMin2 from '../../assets/home/banner-menor-min2.jpg';
import bannerMin3 from '../../assets/home/banner-contagem.png';

import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
    return (

        <>

            {/*  CARROSEL  */}
            <div className="desktop container col-sm-10 col-md-10 col-lg-10 col-xl-10 my-4">

                <div id="carouselExampleIndicators" className="shadow carousel slide shadow" data-ride="carousel"   >
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="b-radius carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={banner1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={banner2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={banner3} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div className="container">

                <div className="row mt-4">

                    <div className="col-lg-5 d-flex align-items-center justify-content-center">
                        <img className="img-banner-promocao" src={bannerHome} />
                    </div>


                    <div className="col-lg-7 container-fluid">

                        <div className="col-lg-12 d-flex justify-content-center">
                            <div className="desktop mx-2 mb-3">
                                <img className="banner-min" src={bannerMin} />
                            </div>

                            <div className="desktop mx-2 mb-3">
                                <img className="banner-min2" src={bannerMin2} />
                            </div>

                        </div>
                        <div className="desktop col-lg-12 d-flex justify-content-center">
                            <img className="banner-min3 mt-2" src={bannerMin3} />
                        </div>

                    </div>
                </div>

            </div>

            <div className="mx-3    ">

                <div className="bg-container-login container my-5 p-0">

                    <div className="row">

                        <div className="d-flex align-items-center justify-content-center col-sm-12 col-md-12 col-lg-6 col-xl-6">

                            <div className="bg-container-campos container p-5">

                                <h1 className="text-login text-center pb-4">LOGIN</h1>

                                <form action="./conexao_BD/loginUsuario.php" method="post">

                                    <div className="form-group">
                                        <label className="text-label-email" for="exampleInputEmail1">Endereço de email</label>
                                        <input type="email" className="imput-email form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="digite seu email" />
                                    </div>

                                    <div className="form-group">
                                        <label className="text-label-senha" for="exampleInputPassword1">Senha</label>
                                        <input type="password" className="imput-senha form-control" name="senha" id="exampleInputPassword1" placeholder="digite sua senha" />
                                        <Link className="form-text text-muted" to="/cadastro">Cadastre-se aqui!</Link>
                                    </div>

                                    <button type="submit" className="btn btn-logar">
                                        LOGAR
                                    </button>
                                </form>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 ml-0">

                            <img className="img-fluid p-4" src={imgLogin} alt="Imagem de capa do card" />

                        </div>

                    </div>

                </div>
            </div>

        </>

    );
}

export default Home;