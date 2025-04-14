export default function Service({title, list}) {
    return (
        <div className="service">
            <div className="header">
                {Array.isArray(title) ? title.map((item, id) => (
                    <h3 key={id}>{item}</h3>
                )) : (
                    <h3>{title}</h3>
                )}
            </div>

            <div className="list">
                <ul>
                    {list.map((item, id) => (
                        <li key={id}>
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}