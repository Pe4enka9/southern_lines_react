export default function Step({image, imageAlt, imageTitle, title, description}) {
    return (
        <div className="step">
            <div className="img-container">
                <img src={image || ''} alt={imageAlt} title={imageTitle}/>
            </div>

            <h3>{title}</h3>

            <p>{description}</p>
        </div>
    )
}