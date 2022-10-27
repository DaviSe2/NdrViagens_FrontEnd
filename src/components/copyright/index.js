import { HashLink } from "react-router-hash-link"

function Copyright(){
    return(
        <div id="copy-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>Desenvolvido por <HashLink to="/#destaques">NdR Viagens </HashLink>2022 &copy;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright;