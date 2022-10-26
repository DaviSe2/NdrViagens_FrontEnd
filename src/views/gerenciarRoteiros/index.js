import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import LinkButton from '../../components/LinkButton'
import Login from '../../components/login'
import Message from '../../components/message'
import RoteiroCard from '../../components/roteiroCards'
import './estilo.css'

export default function GerenciarRoteiros({checkToken, logado, setLogado}) {

    useEffect(() => {
        checkToken()
    })

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (
        <div id="gerenciarRoteiros">
            {!logado && <Login logado={logado} setLogado={setLogado}/>}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="main-title">Meus Roteiros</h3>
                        <LinkButton text={`Novo Roteiro`} to={"/NovoRoteiro"}/>
                    </div>
                    {message && <Message type={"success"} msg={message} />}
                    {logado && <RoteiroCard checkToken={checkToken} logado={logado} setLogado={setLogado} />}
                </div>
            </div>
        </div>
    )
}