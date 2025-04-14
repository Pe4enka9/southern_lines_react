export default function WhyUs({image, imageAlt, imageTitle, title}) {
    return (
        <div className="why-us-item">
            <div className="img-container">
                <img src={image || ''} alt={imageAlt} title={imageTitle}/>
            </div>

            <h3>{title}</h3>
        </div>
    )
}