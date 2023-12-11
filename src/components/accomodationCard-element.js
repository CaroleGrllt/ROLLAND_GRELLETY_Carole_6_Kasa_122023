import { Link } from "react-router-dom";

export default function accomodationCard({id, image, name}) {
    return (
        <article className="accomodation-item">
            <Link to={"/accomodation/" + id}>
                <div className="accomodation-item__card">
                    <div className="accomodation-item__card-img">
                        <img src={image} alt={name} />
                    </div>
                    <div className="accomodation-item__title">
                        <h3>{name}</h3>
                    </div>
                </div>
            </Link>
        </article>
    )
}