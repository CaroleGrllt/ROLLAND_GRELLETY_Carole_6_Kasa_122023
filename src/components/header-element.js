import logo from '../assets/img/logo_red.png'
import { Link } from "react-router-dom";


export default function header() {
    return (
        <div className="container">
            <div className="header__container__img">
                <Link to={"/"}> 
                    <img src={logo} alt="Logo Kasa" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={"/about"}> A propos</Link>
                    </li>
                </ul>               
            </nav>
        </div>
    )
}