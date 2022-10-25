import { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import token from "../../components/token/index";
import './estilo.css'
import RadioBtn from './novaPassagem_components/RadioBtn'
import Login from '../../components/login'

function NovaPassagem({ checkToken, logado, setLogado }) {

    const navigate = useNavigate()
    const { id } = useParams()
    const [showNovoDestino, setShowNovoDestino] = useState(false)
    const [prepararNovoPacote, setPrepararNovoPacote] = useState({})
    const [listaDestinos, setListaDestinos] = useState([])

    const getEditarPacote = useCallback(() => {
        if (id) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token.access}`);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`http://localhost:8080/pacotes/${id}`, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    setPrepararNovoPacote(data)
                    document.getElementById("nomePacote").value = data.nome
                    document.getElementById("destinoPacote").value = data.destino.id
                    document.getElementById("valorPacote").value = data.preco
                    document.getElementById("descricaoPacote").value = data.descricao
                    if (data.hospedagem) {
                        document.getElementById("hospedagemPacoteSim").checked = true
                    } else {
                        document.getElementById("hospedagemPacoteNao").checked = true
                    }
                    if (data.alimentacao) {
                        document.getElementById("alimentacaoPacoteSim").checked = true
                    } else {
                        document.getElementById("alimentacaoPacoteNao").checked = true
                    }
                    if (data.ingressos) {
                        document.getElementById("ingressosPacoteSim").checked = true
                    } else {
                        document.getElementById("ingressosPacoteNao").checked = true
                    }
                })
                .catch(error => console.log('error', error));

        }

    }, [id])

    useEffect(() => {
        checkToken()
        if (logado) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token.access}`);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("http://localhost:8080/destino", requestOptions)
                .then(response => response.json())
                .then((data) => {
                    setListaDestinos(data)
                    getEditarPacote()
                })
                .catch(error => console.log('error', error));

        }
    }, [checkToken, getEditarPacote, logado])

    useEffect(() => { console.log(prepararNovoPacote) }, [prepararNovoPacote])

    function handleChange(e) {
        setPrepararNovoPacote({ ...prepararNovoPacote, [e.target.name]: e.target.value })
    }

    function handleChangeDestino(e) {
        getDestino(e.target.value)
    }

    function handleChangeNovoDestino(e) {
        setPrepararNovoPacote({ ...prepararNovoPacote, "destino": { "cidade": e.target.value } })
    }

    function getDestino(idDestino) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token.access}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://localhost:8080/destino/${idDestino}`, requestOptions)
            .then(response => response.json())
            .then((data) => {
                setPrepararNovoPacote({ ...prepararNovoPacote, "destino": data })
            })
            .catch(error => console.log('error', error));
    }

    function submit(e) {
        e.preventDefault()
    }

    function salvarPacote() {
        console.log(prepararNovoPacote)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token.access}`);
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(prepararNovoPacote),
            redirect: 'follow'
        };

        fetch("http://localhost:8080/pacotes", requestOptions)
            .then((response) => response.json())
            .then(() => {
                navigate('/gerenciarPassagens', { state: { message: 'Pacote criado com sucesso!' } })
            })
            .catch(error => console.log('error', error));

    }

    function patchPacote() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token.access}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(prepararNovoPacote);

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/pacotes/", requestOptions)
            .then((response) => response.json())
            .then(() => {
                navigate('/gerenciarPassagens', { state: { message: 'Pacote atualizado com sucesso!' } })
            })
            .catch(error => console.log('error', error));
    }

    function salvar() {
        checkToken()
        if (logado) {
            if (id) {

                patchPacote()

            } else {

                salvarPacote()
            }
        }
    }

    return (

        <div id="novaPassagem">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="main-title title-novaPassagem">Nova Passagem</h3>
                        {!logado && <Login logado={logado} setLogado={setLogado} />}
                        <form onSubmit={submit}>
                            <div className='col-md-12'>
                                <label htmlFor='nome'>Nome:</label>
                                <input className='input' type={"text"} placeholder={"Nome do pacote"} name={"nome"} onChange={handleChange} id={"nomePacote"} />
                            </div>
                            <div className='col-md-12'>
                                <div className='row-md'>
                                    <label htmlFor='destino'>Destino:</label>
                                </div>
                                {!showNovoDestino ? (
                                    <>
                                        <select name='destino' onChange={handleChangeDestino} id={"destinoPacote"}>
                                            <option value={"semId"}>Selecione um destino</option>
                                            {listaDestinos.map((option) => (
                                                <option value={option.id} key={option.id}>{option.cidade}</option>
                                            ))}
                                        </select>
                                        <button className='main-btn btnNovaPassagem destino-btn' onClick={() => setShowNovoDestino(!showNovoDestino)}>Novo</button>
                                    </>
                                ) : (
                                    <>
                                        <input className='select' type={"text"} placeholder={"Digite o novo destino"} name={"destino"} id={"novoDestino"} onChange={handleChangeNovoDestino} />
                                        <button className='main-btn btnNovaPassagem destino-btn' onClick={() => setShowNovoDestino(!showNovoDestino)}>Cancelar</button>
                                    </>
                                )}
                            </div>
                            <div className='col-md-12 radio'>
                                <RadioBtn text={"Hospedagem"} name={"hospedagem"} handleOnChange={handleChange} id={"hospedagemPacote"} />
                                <RadioBtn text={"Alimentação"} name={"alimentacao"} handleOnChange={handleChange} id={"alimentacaoPacote"} />
                                <RadioBtn text={"Ingressos"} name={"ingressos"} handleOnChange={handleChange} id={"ingressosPacote"} />
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='preco'>Preço:</label>
                                <input className='input' type={"number"} placeholder={"Valor do pacote"} name={"preco"} id={"valorPacote"} onChange={handleChange} />
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='descricao'>Descrição:</label>
                                <textarea name="descricao" id='descricaoPacote' cols="40" rows="5" placeholder='Descreva o pacote' onChange={handleChange} />
                            </div>
                            <div className='col-12 d-flex justify-content-around'>
                                <Link to={"/gerenciarPassagens"}><button className='main-btn btnNovaPassagem cancelBtn'>Cancelar</button></Link>
                                <button className='main-btn btnNovaPassagem salvarBtn' onClick={salvar}>Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NovaPassagem