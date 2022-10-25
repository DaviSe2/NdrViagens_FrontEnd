import { Link } from "react-router-dom"
import './estilo.css'

export default function LinkButton({to, text}){
    return(
        <div className="linkButton">
            <Link className="main-btn button"  to={to}>{text}</Link>
        </div>
    )
}