import { Component } from "react";
import { HashLink } from "react-router-hash-link";

export default class Header extends Component {
    
    render() {
        return (
            <div className="container" id="nav-container">
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                    <h6 className="navbar-brand">
                        <HashLink to="/#destaques" smooth={true}>
                            <img src="./imagens/NdR Branco.png" alt="NdR Viagens" id="logo" />
                        </HashLink>
                    </h6>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbar-links">
                        <div className="navbar-nav">
                            <h6 className="nav-item nav-link" id="home-menu"><HashLink to="/#destaques" smooth={true}>Home</HashLink></h6>
                            <h6 className="nav-item nav-link" id="cadastro-menu" ><HashLink to="/#promocoes" smooth={true}>Promoções</HashLink></h6>
                            <h6 className="nav-item nav-link" id="cadastro-menu" ><HashLink to="/#destinos" smooth={true}>Destinos</HashLink></h6>
                            <h6 className="nav-item nav-link" id="cadastro-menu" ><HashLink to="/#roteiros" smooth={true}>Roteiros</HashLink></h6>
                            <h6 className="nav-item nav-link" id="cadastro-menu" ><HashLink to="/#contato" smooth={true}>Contato</HashLink></h6>
                            <li className="nav-item dropdown">
                                <h6 className="nav-item nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Gerenciar
                                </h6>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <h6 className="dropdown-item" id="cadastro-menu" ><HashLink to="/gerenciarPassagens" smooth={true}>Passagens</HashLink></h6>
                                    <h6 className="dropdown-item" id="cadastro-menu" ><HashLink to="/gerenciarRoteiros" smooth={true}>Roteiros</HashLink></h6>
                                </div>
                            </li>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}