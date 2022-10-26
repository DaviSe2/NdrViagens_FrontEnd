import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BsFillTrashFill } from 'react-icons/bs'

import './estilo.css'

function NovoRoteiro() {

    const navigate = useNavigate()
    const [showAddPacote, setShowAddPacote] = useState(false)
    const [showSelectPacote, setShowSelectPacote] = useState(false)
    const [roteiro, setRoteiro] = useState({})
    const [pacotes, setPacotes] = useState([])
    const [listaPacotes, setListaPacotes] = useState([])
    const [precoTotal, setPrecoTotal] = useState(0)
    const [precoPromoTotal, setPrecoPromoTotal] = useState(0)

    useEffect(() => { }, [roteiro])

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 5520bbb6-1f78-4cf9-8853-1af25f7642cd");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/pacotes", requestOptions)
            .then(response => response.json())
            .then(data => {
                setListaPacotes(data)
            })
            .catch(error => console.log('error', error));
    })

    function prepararPacote(e) {
        if (e.target.value !== "semId") {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer 5520bbb6-1f78-4cf9-8853-1af25f7642cd");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`http://localhost:8080/pacotes/promocoes/${e.target.value}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    setPacotes(oldArray => [...oldArray, data]);
                    setPrecoTotal(precoTotal + data.preco)
                    setPrecoPromoTotal(precoPromoTotal + data.precoPromo)
                    setRoteiro({ ...roteiro, "pacotes_viagens": pacotes });
                })
                .catch(error => console.log('error', error));
        }
    }

    function fecharAddPacote() {
        setShowAddPacote(false)
        setShowSelectPacote(false)

    }

    function removerPacote(pacote, index) {
        pacotes.splice(index, 1)
        setRoteiro({ ...roteiro, "pacotes_viagens": pacotes })
        setPrecoTotal(precoTotal - pacote.preco)
        setPrecoPromoTotal(precoPromoTotal - pacote.precoPromo)
    }

    function handleChange(e) {
        setRoteiro({ ...roteiro, [e.target.name]: e.target.value })
    }

    function submit(e) {
        e.preventDefault()
    }

    function salvarRoteiro() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 5520bbb6-1f78-4cf9-8853-1af25f7642cd");
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(roteiro),
            redirect: 'follow'
        };

        fetch("http://localhost:8080/roteiro", requestOptions)
            .then(response => response.json())
            .then(() => {
                navigate('/gerenciarRoteiros', { state: { message: 'Roteiro criado com sucesso!' } })
            })
            .catch(error => console.log('error', error));
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
                            {pacotes.length > 0 && (
                                <>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Pacote</th>
                                                <th>Destino</th>
                                                <th>Preço Original</th>
                                                <th>Preço Promocional</th>
                                                <th className="thRemover">Remover</th>
                                            </tr>
                                        </thead>
                                        {pacotes.map((pacote, index) => (
                                            <tbody key={index}>
                                                <tr>
                                                    <td>{pacote.nome}</td>
                                                    <td>{pacote.destino.cidade}</td>
                                                    <td>R$ {pacote.preco}</td>
                                                    <td>R$ {pacote.precoPromo}</td>
                                                    <td className="tdRemover" onClick={() => removerPacote(pacote, index)}>
                                                        <BsFillTrashFill />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>
                                    <p>DE: <span className="precoOriginal">R$ {precoTotal}</span></p>
                                    <p className="promo">POR: <span>R$ {precoPromoTotal}</span></p>
                                </>
                            )}
                            {!showAddPacote && (
                                <div className='col-12 d-flex justify-content-around mb-5'>
                                    <button className='main-btn adicionarPacote' onClick={() => setShowAddPacote(true)}>Adicionar Pacote</button>
                                </div>
                            )}
                            {showAddPacote && (
                                <>
                                    {!showSelectPacote && (
                                        <div className="select">
                                            <label htmlFor='pacote'>Pacote:</label>
                                            <select name='pacote' onChange={prepararPacote}>
                                                <option value={"semId"}>Selecione um destino</option>
                                                {listaPacotes.map((option) => (
                                                    <option value={option.id} key={option.id}>{option.nome}</option>
                                                ))}
                                            </select>
                                            <div className='col-12 d-flex justify-content-around mb-4'>
                                                <button className='main-btn cancelBtn destinoBtn' onClick={fecharAddPacote}>Fechar</button>
                                            </div>

                                        </div>
                                    )}
                                </>
                            )}
                            <div className='col-12 d-flex justify-content-around divBtns'>
                                <Link to={"/gerenciarRoteiros"}><button className='main-btn cancelBtn'>Cancelar</button></Link>
                                <button className='main-btn salvarBtn' onClick={salvarRoteiro}>Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NovoRoteiro