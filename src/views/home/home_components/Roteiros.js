import { HashLink } from "react-router-hash-link";

function Roteiros() {
    return (
        <div id="roteiros" className="parallax">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 roteiros-box" id="roteiros-img"></div>
                    <div className="col-md-6 roteiros-box" id="padrao-img">
                        <h4>Roteiros</h4>
                        <p>Já pensou em conhecer os cenários onde foram gravados</p>
                        <p>verdadeiros clássicos da cultura pop?</p>
                        <p>Temos roteiros para Star Wars, Game of Thrones e Harry Potter!</p>
                        <p>Se você tem interesse de conhecer lugares íconicos dessas obras,</p>
                        <p>entre em contato conosco, temos os melhores serviços com os menores preços!</p>
                        <HashLink className="link" to="/#contato" smooth={true}>
                            <button className="main-btn" id="roteiros-btn">Contato</button>
                        </HashLink>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Roteiros;