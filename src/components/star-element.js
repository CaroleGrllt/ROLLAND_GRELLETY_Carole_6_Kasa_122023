export default function star ({toggle}) {
    return (
        <span className={`star star-${toggle}`}>
            <i className="fa-solid fa-star"></i>
        </span>
    )
}