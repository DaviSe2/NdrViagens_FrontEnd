import { TrocarBotaoRoteiro } from "./TrocarBtnAtivo";

function GaleriaRoteiros(){
    return(
        <div id="galeria-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="main-title">Veja imagens dos nossos roteiros</h3>
                        </div>
                        <div className="col-md-12" id="select-btn-box">
                            <button className="main-btn select-btn filterSelect active" id="all-btn" onClick={() => TrocarBotaoRoteiro("all-btn")}>Todos</button>
                            <button className="main-btn select-btn filterSelect" id="sw-btn" onClick={() => TrocarBotaoRoteiro("sw-btn")}>Star Wars</button>
                            <button className="main-btn select-btn filterSelect" id="hp-btn" onClick={() => TrocarBotaoRoteiro("hp-btn")}>Harry Potter</button>
                            <button className="main-btn select-btn filterSelect" id="got-btn" onClick={() => TrocarBotaoRoteiro("got-btn")}>Game of Thrones</button>
                        </div>
                        <div className="col-md-4 project-box got">
                            <img src="./imagens/GoT2.jpg" className="img-fluid" alt="Game of Thrones"/>
                        </div>
                        <div className="col-md-4 project-box hp">
                            <img src="./imagens/HP2.jpg" className="img-fluid" alt="Harry Potter"/>
                        </div>
                        <div className="col-md-4 project-box sw">
                            <img src="./imagens/starWars2.jpg" className="img-fluid" alt="Star Wars"/>
                        </div>
                        <div className="col-md-4 project-box got">
                            <img src="./imagens/GoT3.jpg" className="img-fluid" alt="Game of Thrones"/>
                        </div>
                        <div className="col-md-4 project-box hp">
                            <img src="./imagens/HP3.jpg" className="img-fluid" alt="Harry Potter"/>
                        </div>
                        <div className="col-md-4 project-box sw">
                            <img src="./imagens/starWars3.jpg" className="img-fluid" alt="Star Wars"/>
                        </div>
                        <div className="col-md-4 project-box got">
                            <img src="./imagens/GoT1.png" className="img-fluid" alt="Game of Thrones"/>
                        </div>
                        <div className="col-md-4 project-box hp">
                            <img src="./imagens/HP1.jpg" className="img-fluid" alt="Harry Potter"/>
                        </div>
                        <div className="col-md-4 project-box sw">
                            <img src="./imagens/starWars1.jpg" className="img-fluid" alt="Star Wars"/>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default GaleriaRoteiros;