import logo from '../assets/img/logo_white.png'

export default function footer() {
    return (
        <div className="footer__container">
            <img className="footer__container__img" src={logo} alt="Logo Kasa" />
            <span>© 2020 Kasa. All rights reserved </span>
        </div>
    )
}