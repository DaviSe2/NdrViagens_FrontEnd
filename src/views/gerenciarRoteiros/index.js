import LinkButton from '../../components/LinkButton'

import './estilo.css'

export default function GerenciarRoteiros() {
    return (

        <div id="gerenciarRoteiros">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="main-title">Meus Roteiros</h3>
                        <LinkButton text={`Novo Roteiro`} to={"/NovoRoteiro"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}