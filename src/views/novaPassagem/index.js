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
    const [editarPacote, setEditarPacote] = useState({})
    const [listaDestinos, setListaDestinos] = useState([])
    const [prepararDestino, setPrepararDestino] = useState({})
    const [idDestino, setIdDestino] = useState("semId")
    const [novoDestino, setNovoDestino] = useState('')

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
                    setEditarPacote(data)
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

    const limparDestino = useCallback(() => {
        setShowNovoDestino(!showNovoDestino)
        setPrepararNovoPacote({ ...prepararNovoPacote, 'destino': '' })
    }, [prepararNovoPacote, showNovoDestino])

    const handleChange = useCallback((e) => {
        setPrepararNovoPacote({ ...prepararNovoPacote, [e.target.name]: e.target.value })
    }, [prepararNovoPacote])

    function handleChangeDestino(e) {
        if (e.target.value !== "semId") {
            setIdDestino(e.target.value)
        }
    }

    function handleChangeNovoDestino(e) {
        setNovoDestino(e.target.value)
    }

    useEffect(() => {
        if (idDestino !== "semId") {
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
                    setPrepararDestino(data)
                })
                .catch(error => console.log('error', error));
        }
    }, [idDestino])

    function submit(e) {
        e.preventDefault()
    }

    function salvarDestinoPacote(pacote) {
        let salvarDestino = { "cidade": novoDestino }
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token.access}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(salvarDestino);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/destino/", requestOptions)
            .then(response => response.json())
            .then((data) => {
                pacote.destino.id = data.id
                pacote.destino.cidade = data.cidade
                if (id) {
                    patchPacote(pacote)
                } else {
                    salvarPacote(pacote)

                }
            })
            .catch(error => console.log('error', error));
    }

    function salvarPacote(pacote) {
        console.log(pacote)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token.access}`);
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(pacote),
            redirect: 'follow'
        };

        fetch("http://localhost:8080/pacotes", requestOptions)
            .then((response) => response.json())
            .then(() => {
                navigate('/gerenciarPassagens', { state: { message: 'Pacote criado com sucesso!' } })
            })
            .catch(error => console.log('error', error));

    }

    function patchPacote(pacote) {
        console.log(pacote)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token.access}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(pacote);

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

    function trocarPacote(pacote){
        if(pacote.hospedagem === undefined){
            pacote.hospedagem = editarPacote.hospedagem
        }
        if(pacote.alimentacao === undefined){
            pacote.alimentacao = editarPacote.alimentacao
        }
        if(pacote.ingressos === undefined){
            pacote.ingressos = editarPacote.ingressos
        }
        if(pacote.nome === undefined){
            pacote.nome = editarPacote.nome
        }
        if(pacote.preco === undefined){
            pacote.preco = editarPacote.preco
        }
        if(pacote.destino.id === undefined){
            pacote.destino.id = editarPacote.destino.id
        }
        if(pacote.destino.cidade === undefined){
            pacote.destino.cidade = editarPacote.destino.cidade
        }
        if(pacote.descricao === undefined){
            pacote.descricao = editarPacote.descricao
        }
    }

    function salvar() {
        checkToken()
        if (logado) {
            let pacote = {
                "id": id,
                "hospedagem": prepararNovoPacote.hospedagem,
                "alimentacao": prepararNovoPacote.alimentacao,
                "ingressos": prepararNovoPacote.ingressos,
                "nome": prepararNovoPacote.nome,
                "preco": prepararNovoPacote.valor,
                "destino": {
                    "id": prepararDestino.id,
                    "cidade": prepararDestino.cidade
                },
                "descricao": prepararNovoPacote.descricao
            }

            trocarPacote(pacote)

            if (id) {
                if (showNovoDestino) {
                    salvarDestinoPacote(pacote)
                } else {
                    patchPacote(pacote)
                }
            } else {
                if (showNovoDestino) {
                    salvarDestinoPacote(pacote)
                } else {
                    salvarPacote(pacote)
                }
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
                                        <button className='main-btn btnNovaPassagem destino-btn' onClick={limparDestino}>Novo</button>
                                    </>
                                ) : (
                                    <>
                                        <input className='select' type={"text"} placeholder={"Digite o novo destino"} name={"destino"} id={"novoDestino"} onChange={handleChangeNovoDestino} />
                                        <button className='main-btn btnNovaPassagem destino-btn' onClick={limparDestino}>Cancelar</button>
                                    </>
                                )}
                            </div>
                            <div className='col-md-12 radio'>
                                <RadioBtn text={"Hospedagem"} name={"hospedagem"} handleOnChange={handleChange} id={"hospedagemPacote"} />
                                <RadioBtn text={"Alimentação"} name={"alimentacao"} handleOnChange={handleChange} id={"alimentacaoPacote"} />
                                <RadioBtn text={"Ingressos"} name={"ingressos"} handleOnChange={handleChange} id={"ingressosPacote"} />
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='valor'>Preço:</label>
                                <input className='input' type={"number"} placeholder={"Valor do pacote"} name={"valor"} id={"valorPacote"} onChange={handleChange} />
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