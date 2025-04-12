import {useEffect, useState} from "react";

export default function Modal({isVisible, setIsVisible, API_URL}) {
    const [cities, setCities] = useState([]);
    const [services, setServices] = useState([]);
    const [cargoTypes, setCargoTypes] = useState([]);
    const [additionalServices, setAdditionalServices] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/form`)
            .then(res => res.json())
            .then(data => {
                setCities(data.cities);
                setServices(data.services);
                setCargoTypes(data.cargoTypes);
                setAdditionalServices(data.additionalServices);
            })
            .catch(err => console.error(err));
    }, [API_URL]);

    useEffect(() => {
        isVisible ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
    }, [isVisible]);

    const handleClose = () => {
        setIsVisible(false);
    };

    const [formData, setFormData] = useState({
        first_name: '',
        patronymic: '',
        phone_number: '',
        comment: '',
        from_id: '',
        to_id: '',
        service_id: '',
        cargo_type_id: '',
        delivery_date: '',
        additional_service_id: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
        setErrors({...errors, [name]: ''});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        fetch(`${API_URL}/form`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.errors) setErrors(data.errors)
                else {
                    setFormData({
                        first_name: '',
                        patronymic: '',
                        phone_number: '',
                        comment: '',
                        from_id: '',
                        to_id: '',
                        service_id: '',
                        cargo_type_id: '',
                        delivery_date: '',
                        additional_service_id: ''
                    });

                    setSuccess(true);

                    setTimeout(() => {
                        setIsVisible(false);
                        setSuccess(false);
                    }, 2000);
                }
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    };

    return (
        <div id="application-container" className={`modal-container ${isVisible ? 'visible' : ''}`}
             onClick={handleClose}>
            <form id="application" className={`modal ${isVisible ? 'visible' : ''}`} onSubmit={handleSubmit}
                  onClick={e => e.stopPropagation()}>
                <h2>Заявка</h2>

                <div className="inputs">
                    <div>
                        <div className="input-container">
                            <label htmlFor="first_name">Имя <sup>*</sup></label>
                            <input type="text" name="first_name" id="first_name" placeholder="Иван"
                                   value={formData.first_name}
                                   onChange={handleChange}/>
                            {errors.first_name && <p className="error">{errors.first_name}</p>}
                        </div>

                        <div className="input-container">
                            <label htmlFor="patronymic">Отчество</label>
                            <input type="text" name="patronymic" id="patronymic" placeholder="Иванович"
                                   value={formData.patronymic} onChange={handleChange}/>
                            {errors.patronymic && <p className="error">{errors.patronymic}</p>}
                        </div>

                        <div className="input-container">
                            <label htmlFor="phone_number">Номер телефона <sup>*</sup></label>
                            <input type="tel" name="phone_number" id="phone_number" placeholder="+7 (999) 999-99-99"
                                   value={formData.phone_number} onChange={handleChange}/>
                            {errors.phone_number && <p className="error">{errors.phone_number}</p>}
                        </div>

                        <div className="input-container">
                            <label htmlFor="comment">Комментарий</label>
                            <textarea name="comment" id="comment" value={formData.comment}
                                      onChange={handleChange}></textarea>
                            {errors.comment && <p className="error">{errors.comment}</p>}
                        </div>
                    </div>

                    <div>
                        <div className="input-container">
                            <label htmlFor="from_id">Откуда <sup>*</sup></label>
                            <select name="from_id" id="from_id" required value={formData.from_id}
                                    onChange={handleChange}>
                                <option defaultValue="" hidden>Выбрать</option>
                                {cities.map(city => (
                                    <option value={city.id} key={city.id}>{city.name}</option>
                                ))}
                            </select>
                            {errors.from_id && <p className="error">{errors.from_id}</p>}
                        </div>

                        <div className="input-container">
                            <label htmlFor="to_id">Куда <sup>*</sup></label>
                            <select name="to_id" id="to_id" required value={formData.to_id} onChange={handleChange}>
                                <option defaultValue="" hidden>Выбрать</option>
                                {cities.map(city => (
                                    <option value={city.id} key={city.id}>{city.name}</option>
                                ))}
                            </select>
                            {errors.to_id && <p className="error">{errors.to_id}</p>}
                        </div>
                    </div>

                    <div>
                        <div className="input-container">
                            <label htmlFor="service_id">Услуга <sup>*</sup></label>
                            <select name="service_id" id="service_id" required value={formData.service_id}
                                    onChange={handleChange}>
                                <option defaultValue="" hidden>Выберите услугу</option>
                                {services.map(service => (
                                    <option value={service.id} key={service.id}>{service.name}</option>
                                ))}
                            </select>
                            {errors.service_id && <p className="error">{errors.service_id}</p>}
                        </div>

                        <div className="input-container">
                            <label htmlFor="cargo_type_id">Тип груза <sup>*</sup></label>
                            <select name="cargo_type_id" id="cargo_type_id" required value={formData.cargo_type_id}
                                    onChange={handleChange}>
                                <option defaultValue="" hidden>Выберите тип груза</option>
                                {cargoTypes.map(cargoType => (
                                    <option value={cargoType.id} key={cargoType.id}>{cargoType.name}</option>
                                ))}
                            </select>
                            {errors.cargo_type_id && <p className="error">{errors.cargo_type_id}</p>}
                        </div>
                    </div>

                    <div>
                        <div className="input-container">
                            <label htmlFor="delivery_date">Дата доставки <sup>*</sup></label>
                            <input type="date" name="delivery_date" id="delivery_date" value={formData.delivery_date}
                                   onChange={handleChange}/>
                            {errors.delivery_date && <p className="error">{errors.delivery_date}</p>}
                        </div>

                        <div className="input-container">
                            <label htmlFor="additional_service_id">Доп. услуга</label>
                            <select name="additional_service_id" id="additional_service_id"
                                    value={formData.additional_service_id}
                                    onChange={handleChange}>
                                <option defaultValue="" hidden>Выбрать доп. услугу</option>
                                {additionalServices.map(additionalService => (
                                    <option value={additionalService.id}
                                            key={additionalService.id}>{additionalService.name}</option>
                                ))}
                            </select>
                            {errors.additional_service_id && <p className="error">{errors.additional_service_id}</p>}
                        </div>
                    </div>
                </div>

                {success && <h2 className="success">Заявка отправлена!</h2>}

                <button type="submit" className={`btn ${loading ? 'disabled' : ''}`} disabled={loading}>Отправить
                </button>
            </form>
        </div>
    )
}