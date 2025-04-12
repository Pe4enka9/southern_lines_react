import banner from "../img/banner.png";
import documents from "../img/icons/documents.svg";
import arrow from "../img/icons/arrow.svg";
import truckLoading from "../img/icons/truck_loading.svg";
import delivery from "../img/icons/delivery.svg";
import boxes from "../img/icons/boxes.svg";
import document from "../img/icons/document.svg";
import creditCard from "../img/icons/credit_card.svg";
import ruble from "../img/icons/ruble.svg";
import truck from "../img/icons/truck.svg";
import employee from "../img/icons/employee.svg";
import shield from "../img/icons/shield.svg";
import leader from "../img/leader.jpg";

export default function Main({setIsVisible}) {
    const handleOpen = () => {
        setIsVisible(true);
    };

    return (
        <>
            <section className="banner mb-5">
                <img src={banner || ''} alt="Газель"/>

                <div className="slogan">
                    <h1>Ваш груз — моя забота.<br/>Доставлю без срока!</h1>

                    <button type="button" className="btn" onClick={handleOpen}>Оставить заявку</button>
                </div>
            </section>

            <section className="steps mb-5">
                <h2 className="mb-2">Этапы доставки</h2>

                <div className="steps-container">
                    <div className="step">
                        <div className="img-container">
                            <img src={documents || ''} alt="Документы"/>
                        </div>

                        <h3>1. Подготовка</h3>

                        <p>Обговорим детали заказа по телефону или онлайн заявкой</p>
                    </div>

                    <img src={arrow || ''} alt="Стрелка"/>

                    <div className="step">
                        <div className="img-container">
                            <img src={truckLoading || ''} alt="Загрузка"/>
                        </div>

                        <h3>2. Загрузка</h3>

                        <p>- Грузим товар в машину<br/>- Проверяем, чтобы все было закреплено.</p>
                    </div>

                    <img src={arrow || ''} alt="Стрелка"/>

                    <div className="step">
                        <div className="img-container">
                            <img src={delivery || ''} alt="Доставка"/>
                        </div>

                        <h3>3. Доставка</h3>

                        <p>Везём груз по выбранному маршруту</p>
                    </div>

                    <img src={arrow || ''} alt="Стрелка"/>

                    <div className="step">
                        <div className="img-container">
                            <img src={boxes || ''} alt="Разгрузка"/>
                        </div>

                        <h3>4. Разгрузка</h3>

                        <p>Прибываем на место и производим разгрузку</p>
                    </div>

                    <img src={arrow || ''} alt="Стрелка"/>

                    <div className="step">
                        <div className="img-container">
                            <img src={document || ''} alt="Завершение"/>
                        </div>

                        <h3>5. Завершение</h3>

                        <p>Доставка окончена</p>
                    </div>
                </div>
            </section>

            <section className="why-us mb-5">
                <h2 className="mb-2">Почему стоит обратиться к нам?</h2>

                <div className="why-us-container">
                    <div className="why-us-item">
                        <div className="img-container">
                            <img src={creditCard || ''} alt="Кредитные карты"/>
                        </div>

                        <h3>Все виды оплаты</h3>
                    </div>

                    <div className="why-us-item">
                        <div className="img-container">
                            <img src={ruble || ''} alt="Рубль"/>
                        </div>

                        <h3>Прозрачные, выгодные цены</h3>
                    </div>

                    <div className="why-us-item">
                        <div className="img-container">
                            <img src={truck || ''} alt="Газель"/>
                        </div>

                        <h3>Собственный транспорт</h3>
                    </div>

                    <div className="why-us-item">
                        <div className="img-container">
                            <img src={employee || ''} alt="Сотрудник"/>
                        </div>

                        <h3>Квалифицированный сотрудник</h3>
                    </div>

                    <div className="why-us-item">
                        <div className="img-container">
                            <img src={shield || ''} alt="Защита"/>
                        </div>

                        <h3>Гарантия безопасности груза</h3>
                    </div>
                </div>
            </section>

            <section className="services mb-5" id="services">
                <h2 className="mb-2">Услуги</h2>

                <div className="services-container">
                    <div className="service">
                        <h3>Виды погрузок:</h3>

                        <div className="list">
                            <ul>
                                <li>
                                    <p>Верх</p>
                                </li>
                                <li>
                                    <p>Бок</p>
                                </li>
                                <li>
                                    <p>Зад</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="service">
                        <div className="header">
                            <h3>Перевозки</h3>
                            <h3>Отдельной машиной</h3>
                            <h3>Попутный груз</h3>
                        </div>

                        <div className="list">
                            <ul>
                                <li>
                                    <p>Междугородние перевозки</p>
                                </li>
                                <li>
                                    <p>Домашние переезды</p>
                                </li>
                                <li>
                                    <p>Перевозки материалов</p>
                                </li>
                                <li>
                                    <p>Товары народного производства (ТМП)</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="service">
                        <h3>Доп. услуги</h3>

                        <div className="list">
                            <ul>
                                <li>
                                    <p>Грузчик</p>
                                </li>
                                <li>
                                    <p>Паллетирование</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-me mb-5">
                <h2 className="mb-2">Кратко обо мне</h2>

                <div className="about-me-container">
                    <div className="img-container">
                        <img src={leader || ''} alt="Фото руководителя"/>
                    </div>

                    <p>Меня зовут Виталий, я предприниматель в сфере грузоперевозок. Управляю Газелью лично,
                        гарантируя
                        надежность и профессионализм на каждом этапе. Специализируюсь на перевозке любых грузов — от
                        переездов до строительных материалов и оборудования. Многолетний опыт работы позволяет мне
                        уверенно
                        справляться с любыми задачами и гарантировать пунктуальность доставки. Я предлагаю
                        индивидуальный
                        подход: уточняю детали заказа, помогаю с погрузкой и разгрузкой при необходимости.
                        Прозрачные и
                        доступные цены оговариваются заранее, без скрытых платежей. Качество и своевременность
                        выполнения
                        заказов — мои главные приоритеты.</p>
                </div>
            </section>
        </>
    )
}