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
import Calculator from "./Calculator.jsx";
import Step from "./Step.jsx";
import StepArrow from "./StepArrow.jsx";

export default function Main({setIsVisible, API_URL}) {
    const handleOpen = () => {
        setIsVisible(true);
    };

    return (
        <>
            <section className="banner mb-5">
                <img src={banner || ''} alt="Газель для грузоперевозок по России"
                     title="Грузоперевозки по России с Южными линиями"/>

                <div className="slogan">
                    <h1>Ваш груз — моя забота.<br/>Доставлю без срока!</h1>

                    <button type="button" className="btn" onClick={handleOpen}>Оставить заявку</button>
                </div>
            </section>

            <section className="steps mb-5">
                <h2 className="mb-2">Этапы доставки</h2>

                <div className="steps-container">
                    <Step image={documents} imageAlt="Подготовка документов для грузоперевозок"
                          imageTitle="Подготовка документов перед отправкой груза" title="1. Подготовка"
                          description="Обговорим детали заказа по телефону или онлайн заявкой"/>

                    <StepArrow/>

                    <Step image={truckLoading} imageAlt="Загрузка груза в Газель"
                          imageTitle="Загрузка груза в автомобиль для перевозки" title="2. Загрузка"
                          description={
                              <>
                                  - Грузим товар в машину<br/>
                                  - Проверяем, чтобы все было закреплено.
                              </>
                          }/>

                    <StepArrow/>

                    <Step image={delivery} imageAlt="Доставка грузов по России"
                          imageTitle="Доставка грузов по выбранному маршруту" title="3. Доставка"
                          description="Везём груз по выбранному маршруту"/>

                    <StepArrow/>

                    <Step image={boxes} imageAlt="Разгрузка груза на месте назначения"
                          imageTitle="Разгрузка груза по прибытию" title="4. Разгрузка"
                          description="Прибываем на место и производим разгрузку"/>

                    <StepArrow/>

                    <Step image={document} imageAlt="Завершение доставки грузов"
                          imageTitle="Завершение доставки груза клиенту" title="5. Завершение"
                          description="Доставка окончена"/>
                </div>
            </section>

            <section className="why-us mb-5">
                <h2 className="mb-2">Почему стоит обратиться к нам?</h2>

                <div className="why-us-container">
                    <div className="why-us-item">
                        <div className="img-container">
                            <img src={creditCard || ''} alt="Принимаем все виды оплаты за грузоперевозки"
                                 title="Принимаем наличные и безналичные платежи"/>
                        </div>

                        <h3>Все виды оплаты</h3>
                    </div>

                    <div className="why-us-item">
                        <div className="img-container">
                            <img src={ruble || ''} alt="Прозрачные цены на грузоперевозки"
                                 title="Прозрачные и выгодные цены на перевозки"/>
                        </div>

                        <h3>Прозрачные, выгодные цены</h3>
                    </div>

                    <div className="why-us-item">
                        <div className="img-container">
                            <img src={truck || ''} alt="Собственный транспорт для грузоперевозок"
                                 title="Собственный транспорт для перевозки грузов"/>
                        </div>

                        <h3>Собственный транспорт</h3>
                    </div>

                    <div className="why-us-item">
                        <div className="img-container">
                            <img src={employee || ''} alt="Квалифицированный водитель для грузоперевозок"
                                 title="Опытный водитель с многолетним стажем"/>
                        </div>

                        <h3>Квалифицированный сотрудник</h3>
                    </div>

                    <div className="why-us-item">
                        <div className="img-container">
                            <img src={shield || ''} alt="Гарантия безопасности груза при перевозке"
                                 title="Гарантия безопасности вашего груза"/>
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
                        <img src={leader || ''} alt="Фото Виталия - предпринимателя в сфере грузоперевозок"
                             title="Виталий - владелец компании Южные линии"/>
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

            {/*<Calculator API_URL={API_URL}/>*/}
        </>
    )
}