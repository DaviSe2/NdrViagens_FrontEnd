import { useState } from "react"
import { useEffect } from "react"
import { BsCheckLg, BsXLg } from 'react-icons/bs'
import { HashLink } from "react-router-hash-link"
import Token from "../token/index"
import Message from "../message"

import './estilo.css'

function PacoteCard({ checkToken, logado, setLogado }) {

    const [pacotes, setPacotes] = useState([])
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

        fetch("http://localhost:8080/pacotes", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setPacotes(data)
            })
            .catch((error) => console.log('error', error));
    })

    function deletarPacote(e) {
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

            fetch(`http://localhost:8080/pacotes/${e.target.id}`, requestOptions)
                .then((response) => {
                    if(response.ok){
                        setPacotes(pacotes.filter((project) => project.id !== e.target.id))
                        setMessageType("success")
                        setMessage("Pacote removido com sucesso!")    
                    }else{
                        setMessageType("error")
                        setMessage("Não foi possível remover a passagem!")
                    }
                })
                .catch(error => console.log('error', error));
        }
    }

    return (
        <>
            {message && <Message type={messageType} msg={message} />}
            {pacotes.map((pacote) => (
                <div className="card" key={pacote.id}>
                    <h4>{pacote.nome}</h4>
                    <p><span>Destino: </span>{pacote.destino.cidade}</p>
                    <p><span>Hospedagem: </span>{pacote.hospedagem ? (<BsCheckLg />) : (<BsXLg />)}</p>
                    <p><span>Alimentação: </span>{pacote.alimentacao ? (<BsCheckLg />) : (<BsXLg />)}</p>
                    <p><span>Ingressos: </span>{pacote.ingressos ? (<BsCheckLg />) : (<BsXLg />)}</p>
                    <p><span>Preço: </span>R$ {pacote.preco}</p>
                    <p><span>Descrição: </span>{pacote.descricao}</p>
                    <div className="project_card_actions">
                        <button id={pacote.id}>
                            <HashLink to={`/NovaPassagem/${pacote.id}`}>
                                EDITAR
                            </HashLink>
                        </button>
                        <button id={pacote.id} onClick={deletarPacote}>
                            EXCLUIR
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PacoteCard