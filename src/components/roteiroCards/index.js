import { useState } from "react"
import { HashLink } from "react-router-hash-link"
import { useEffect } from "react"

import Token from "../token/index"
import '../pacoteCards/estilo.css'
import './estilo.css'

import Message from '../../components/message'

function RoteiroCard({checkToken, logado, setLogado}){

    const [roteiros, setRoteiros] = useState([])
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${Token.access}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/roteiro", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setRoteiros(data)
            })
            .catch((error) => console.log('error', error));
    })

    function deletarRoteiro(e) {
        checkToken()
        if (logado) {
            setMessage("")
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${Token.access}`);

            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`http://localhost:8080/roteiro/${e.target.id}`, requestOptions)
                .then((response) => {
                    if(response.ok){
                        setRoteiros(roteiros.filter((project) => project.id !== e.target.id))
                        setMessageType("success")
                        setMessage("Roteiro removido com sucesso!")    
                    }else{
                        setMessageType("error")
                        setMessage("Não foi possível remover o roteiro!")    
                    }
                })
                .catch(error => console.log('error', error));
        }
    }

    return(
        <>
        {message && <Message type={messageType} msg={message} />}
            {roteiros.map((roteiro) => (
                <div className="cardGerenciar roteiroCard" key={roteiro.id}>
                    <h4>{roteiro.nomeRoteiro}</h4>
                    <p><span className="x-large">Total de Destinos: </span><span className="x-large">{roteiro.pacotes_viagens.length}</span></p>
                    <p><span className="large">De: </span><span className="precoOriginal">R$ {roteiro.precoTotal}</span></p>
                    <p><span className="large">Por: </span><span className="precoPromo">R$ {roteiro.precoPromoTotal}</span></p>
                    <div className="project_card_actions">
                        <button id={roteiro.id}>
                            <HashLink to={`/NovoRoteiro/${roteiro.id}`}>
                                EDITAR
                            </HashLink>
                        </button>
                        <button id={roteiro.id} onClick={deletarRoteiro}>
                            EXCLUIR
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default RoteiroCard