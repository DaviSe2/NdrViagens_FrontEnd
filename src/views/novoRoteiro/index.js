import { useState } from "react"
import { Link } from "react-router-dom"
import {v4 as uuidv4} from 'uuid'

import './estilo.css'

function NovoRoteiro() {

    const [showAddPacote, setShowAddPacote] = useState(false)
    const [showSelectPacote, setShowSelectPacote] = useState(false)
    const [listaPacotes, setListaPacotes] = useState([])

    function prepararPacote(e){
        let pacote = {
            "id": e.target.name,
            "name": e.target.value
        }
        setListaPacotes(prevPacote => [...prevPacote, pacote])
        console.log(listaPacotes[0])
        fecharAddPacote()
    }

    function fecharAddPacote(){
        setShowAddPacote(false)
        setShowSelectPacote(false)
    }

    function mostrarSelectPacote(e){
        if (e.target.value === "fechar"){
            setShowSelectPacote(false)
        }else{
            setShowSelectPacote(true)
        }        
    }

    function handleChange(e) {
        /*  setPacote({ ...pacote, [e.target.name]: e.target.value })
         console.log(pacote) */
    }

    function submit(e) {
        e.preventDefault()
    }

    return (
        <div id="novoRoteiro">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="main-title">Novo Roteiro</h3>
                        <form onSubmit={submit}>
                            <div className='col-md-12'>
                                <label htmlFor='nome'>Nome:</label>
                                <input className='input' type={"text"} placeholder={"Nome do roteiro"} name={"nomeRoteiro"} onChange={handleChange} />
                            </div>
                            <h3 className="main-title titlePacotes">Pacotes de Viagens</h3>
                            {listaPacotes.length > 0 && (
                                <>
                                    {listaPacotes.map((pacote) => (
                                        <p key={uuidv4()}>{pacote.name}</p>
                                    ))}
                                </>
                            )}
                            {!showAddPacote && (
                                <div className='col-12 d-flex justify-content-around mb-5'>
                                    <button className='main-btn adicionarPacote' onClick={() => setShowAddPacote(true)}>Adicionar Pacote</button>
                                </div>
                            )}
                            {showAddPacote && (
                                <>
                                    <div className="divSelect">
                                        <div className="select">
                                            <label htmlFor='destino'>Destino:</label>
                                            <select name='destino' onChange={mostrarSelectPacote}>
                                                <option value={"fechar"}>Selecione um destino</option>
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                        </div>
                                        {showSelectPacote && (
                                            <div className="select">
                                                <label htmlFor='destino'>Pacote:</label>
                                                <select name='destino' onChange={prepararPacote}>
                                                    <option>Selecione um pacote</option>
                                                    <option>Batata</option>
                                                    <option>Cenoura</option>
                                                </select>
                                            </div>
                                        )}
                                        <div className='col-12 d-flex justify-content-around mb-4'>
                                            <button className='main-btn cancelBtn destinoBtn' onClick={fecharAddPacote}>Fechar</button>
                                            <button className='main-btn salvarBtn destinoBtn' /* onClick={adicionarPacote} */>Incluir Pacote</button>
                                        </div>
                                    </div>
                                </>
                            )}
                            {!showAddPacote && (
                                <div className='col-12 d-flex justify-content-around divBtns'>
                                    <Link to={"/gerenciarRoteiros"}><button className='main-btn cancelBtn'>Cancelar</button></Link>
                                    <button className='main-btn salvarBtn' /* onClick={() => console.log(pacote)} */>Salvar</button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NovoRoteiro