import background from '../assets/img/background-header.png'

export default function homeCover() {
    return (
        <div className="homepage-cover__container">
            <div className="homepage-cover__image">
                <img src={background} alt="Paysage de bord de mer" />
            </div>
            <div className="homepage-cover__title">
                <h2>Chez vous, <br className="hide"/>partout et ailleurs</h2>
            </div>
        </div>
    )
}
