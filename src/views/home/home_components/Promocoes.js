import { TrocarBotaoPromo } from "./TrocarBtnAtivo";

function Promocoes() {
    return (
        <div id="promocoes">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="main-title">Promoções</h3>
                    </div>
                    <div className="col-md-12" id="select-btn-box">
                        <button data-target="#promoSlider" data-slide-to="0" className="main-btn select-btn promoSelect active" onClick={() => TrocarBotaoPromo("btn-nintendo-world")} id="btn-nintendo-world">Super Nintendo World</button>
                        <button data-target="#promoSlider" data-slide-to="1" className="main-btn select-btn promoSelect" onClick={() => TrocarBotaoPromo("btn-coliseu")} id="btn-coliseu">O Coliseu</button>
                        <button data-target="#promoSlider" data-slide-to="2" className="main-btn select-btn promoSelect" onClick={() => TrocarBotaoPromo("btn-museu-natural")} id="btn-museu-natural">Museu de História Natural</button>
                    </div>
                    <div id="promoSlider" className="carousel slide" data-interval="false">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-6" id="promoImg">
                                    <img className="img-fluid" src="./imagens/nintendoWorld.jpg" alt="Super Nintendo World" />
                                </div>
                                <div className="col-md-6">
                                    <p>Fãs dos games e personagens Super Nintendo vão adorar as atrações temáticas e os espaços</p>
                                    <p>interativos que prometem divertir tanto as crianças quanto os adultos.</p>
                                    <p>O grande diferencial deste parque é que, graças à inserção da tecnologia,</p>
                                    <p>é possível ter uma interação muito maior dos visitantes com as atrações do parque,</p>
                                    <p>onde é possível que os visitantes interajam entre sí, através do “Asobi”,</p>
                                    <p>um tipo de experiência completamente nova em parques de diversões.</p>
                                    <ul id="promocao-list">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><i className="fa fa-map-marker"></i></td><td>Endereço Osaka, Japão</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fa fa-bed"></i></td><td>Hospedagem</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fa fa-cutlery"></i></td><td>Alimentação</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fa fa-ticket"></i></td><td>Ingresso</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fa fa-money preco"></i></td><td><span>R$ 10.503,00</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="img-fluid" src="./imagens/coliseu.jpg" alt="O Coliseu" />
                                </div>
                                <div className="col-md-6">
                                    <p>Monumento histórico e espetacular da Roma Antiga,</p>
                                    <p>presente na Itália até os dias de hoje.</p>
                                    <p>Ele reflete todo o poder de Roma no período da sua construção,</p>
                                    <p>em 80 d.C, quando o império romano era o centro do mundo.</p>
                                    <p>Prepare-se para conhecê-lo e aproveitar muito essa viagem!</p>
                                    <ul id="promocao-list">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><i className="fa fa-map-marker"></i></td><td>Endereço: Roma, Itália</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fa fa-bed"></i></td><td>Hospedagem</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fa fa-cutlery"></i></td><td>Alimentação</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fa fa-ticket"></i></td><td>Ingresso</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fa fa-money preco"></i></td><td><span>R$ 3.665,00</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="img-fluid" src="./imagens/MuseuHistoriaNatural.jpg" alt="Museu de História Natural" />
                                </div>
                                <div className="col-md-6">
                                    <p>O Museu de História Natural de Los Angeles oferece aos visitantes</p>
                                    <p>a possibilidade de explorar a natureza por meio de completas coleções de pedras preciosas e minerais,</p>
                                    <p>maquetes e plantas e animais de diferentes épocas e lugares.</p>
                                    <ul id="promocao-list">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><i className="fa fa-map-marker"></i></td><td>Endereço: Nova Iorque, Estados Unidos</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fa fa-bed"></i></td><td>Hospedagem</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fa fa-cutlery"></i></td><td>Alimentação</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fa fa-ticket"></i></td><td>Ingresso</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fa fa-money preco"></i></td><td><span>R$ 5.724,00</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Promocoes;