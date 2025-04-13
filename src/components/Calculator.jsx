import {useEffect, useState} from "react";

export default function Calculator({API_URL}) {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/form`)
            .then(res => res.json())
            .then(data => setCities(data.cities))
            .catch(err => console.error(err));
    }, [API_URL]);

    const [formData, setFormData] = useState({
        from_id: '',
        to_id: '',
        total_weight: '',
        volume_of_cargo: '',
        highest: '',
        longest: '',
        widest: '',
        machine_occupancy: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="calculator mb-5">
            <h2 className="mb-2">Калькулятор</h2>

            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div>
                        <div className="input-container">
                            <label htmlFor="from_id">Откуда</label>
                            <select name="from_id" id="from_id" value={formData.from_id} onChange={handleChange}>
                                <option defaultValue="" hidden>Выбрать</option>
                                {cities.map(city => (
                                    <option value={city.id} key={city.id}>{city.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="input-container">
                            <label htmlFor="to_id">Куда</label>
                            <select name="to_id" id="to_id" value={formData.to_id} onChange={handleChange}>
                                <option defaultValue="" hidden>Выбрать</option>
                                {cities.map(city => (
                                    <option value={city.id} key={city.id}>{city.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className="input-container">
                            <label htmlFor="total_weight">Общий вес</label>
                            <input type="number" name="total_weight" id="total_weight" value={formData.total_weight}
                                   onChange={handleChange}/>
                        </div>

                        <div className="input-container">
                            <label htmlFor="volume_of_cargo">Объем груза</label>
                            <input type="number" name="volume_of_cargo" id="volume_of_cargo"
                                   value={formData.volume_of_cargo}
                                   onChange={handleChange}/>
                        </div>

                        <div className="input-container">
                            <label htmlFor="highest">Самое высокое</label>
                            <input type="number" name="highest" id="highest" value={formData.highest}
                                   onChange={handleChange}/>
                        </div>
                    </div>

                    <div>
                        <div className="input-container">
                            <label htmlFor="longest">Самое длинное</label>
                            <input type="number" name="longest" id="longest" value={formData.longest}
                                   onChange={handleChange}/>
                        </div>

                        <div className="input-container">
                            <label htmlFor="widest">Самое широкое</label>
                            <input type="number" name="widest" id="widest" value={formData.widest}
                                   onChange={handleChange}/>
                        </div>

                        <div className="input-container">
                            <label htmlFor="machine_occupancy">Заполненность машины</label>
                            <input type="number" name="machine_occupancy" id="machine_occupancy"
                                   value={formData.machine_occupancy} onChange={handleChange}/>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn">Рассчитать</button>
            </form>
        </section>
    )
}