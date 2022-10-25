import { useState } from 'react';
import { HashLink } from "react-router-hash-link";
import Message from '../../components/message'
import token from "../../components/token/index";

import "./estilo.css"

function Login({ logado, setLogado }) {

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("")


    function submit(e) {
        e.preventDefault()
    }

    function handleChange(e) {
        if (e.target.name === "usuario") {
            setUsuario(e.target.value)
        } else {
            setSenha(e.target.value)
        }
    }

    function limpar() {
        setUsuario("")
        setSenha("")
    }

    function gerarToken() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic bmRyVmlhZ2Vuc1dlYjpuZHIwODA2OTlWaWFnZW5z");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("username", usuario);
        urlencoded.append("password", senha);
        urlencoded.append("grant_type", "password");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/oauth/token", requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    setMessage("Usuário e/ou senha inválidos!")
                    setMessageType("error")
                }
            })
            .then((data) => {
                token.access = data.access_token
                limpar()
                setLogado(true)
            })
            .catch(error => console.log('error', error));

            setMessage("")
            setMessageType("")
    }

    return (
        <div className="modalLogin" id="login-modal" role="dialog" aria-labelledby="Login" aria-hidden="true" data-backdrop="static" >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="main-title login-title">Login</h3>
                            {message && <Message type={messageType} msg={message} />}
                            <div className="col-md-12" id="form-login">
                                <form onSubmit={submit} id="form-login">
                                    <div className='col-md-12'>
                                        <input className='inputLogin' type={"text"} placeholder={"Usuário"} name={"usuario"} onChange={handleChange} />
                                    </div>
                                    <div className='col-md-12'>
                                        <input className='inputLogin' type={"password"} placeholder={"Senha"} name={"senha"} onChange={handleChange} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer justify-content-around">
                                <button type="button" className="main-btn modal-btn" aria-label="Login" onClick={gerarToken}>Login</button>
                                <h6 onClick={() => { setLogado(false); limpar() }}><HashLink to="/" >Cancelar</HashLink></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login