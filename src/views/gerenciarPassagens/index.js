import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Login from '../../components/login'
import PacoteCard from '../../components/pacoteCards'
import LinkButton from '../../components/LinkButton'
import Message from '../../components/message'
import './estilo.css'

export default function GerenciarPassagens({checkToken, logado, setLogado}) {

    useEffect(() => {
        checkToken() 
    })

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (

        <div id="gerenciarPassagens">
            {!logado && <Login logado={logado} setLogado={setLogado}/>}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="main-title gerenciarTitle">Minhas Passagens</h3>
                        <LinkButton text={`Nova Passagem`} to={"/NovaPassagem"} />
                    </div>
                    {message && <Message type={"success"} msg={message} />}
                    {logado && <PacoteCard checkToken={checkToken} logado={logado} setLogado={setLogado} />}
                </div>
            </div>
        </div>
    )
}