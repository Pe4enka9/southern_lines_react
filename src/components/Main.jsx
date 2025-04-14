import bannerWebp from "../img/webp/banner.webp";
import banner from "../img/banner.png";
import documents from "../img/icons/documents.svg";
import truckLoading from "../img/icons/truck_loading.svg";
import delivery from "../img/icons/delivery.svg";
import boxes from "../img/icons/boxes.svg";
import document from "../img/icons/document.svg";
import creditCard from "../img/icons/credit_card.svg";
import ruble from "../img/icons/ruble.svg";
import truck from "../img/icons/truck.svg";
import employee from "../img/icons/employee.svg";
import shield from "../img/icons/shield.svg";
import leaderWebp from "../img/webp/leader.webp";
import leader from "../img/leader.jpg";
import Calculator from "./Calculator.jsx";
import Step from "./Step.jsx";
import StepArrow from "./StepArrow.jsx";
import WhyUs from "./WhyUs.jsx";
import Service from "./Service.jsx";

export default function Main({setIsVisible, API_URL}) {
    const handleOpen = () => {
        setIsVisible(true);
    };

    return (
        <>
            <section className="banner mb-5">
                <picture>
                    {bannerWebp && <source srcSet={bannerWebp} type="image/webp"/>}
                    <img src={banner || ''} alt="Газель для грузоперевозок по России"
                         title="Грузоперевозки по России с Южными линиями"/>
                </picture>

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
                    <WhyUs image={creditCard} imageAlt="Принимаем все виды оплаты за грузоперевозки"
                           imageTitle="Принимаем наличные и безналичные платежи" title="Все виды оплаты"/>

                    <WhyUs image={ruble} imageAlt="Прозрачные цены на грузоперевозки"
                           imageTitle="Прозрачные и выгодные цены на перевозки" title="Прозрачные, выгодные цены"/>

                    <WhyUs image={truck} imageAlt="Собственный транспорт для грузоперевозок"
                           imageTitle="Собственный транспорт для перевозки грузов" title="Собственный транспорт"/>

                    <WhyUs image={employee} imageAlt="Квалифицированный водитель для грузоперевозок"
                           imageTitle="Опытный водитель с многолетним стажем" title="Квалифицированный сотрудник"/>

                    <WhyUs image={shield} imageAlt="Гарантия безопасности груза при перевозке"
                           imageTitle="Гарантия безопасности вашего груза" title="Гарантия безопасности груза"/>
                </div>
            </section>

            <section className="services mb-5" id="services">
                <h2 className="mb-2">Услуги</h2>

                <div className="services-container">
                    <Service title="Виды погрузок:" list={['Верх', 'Бок', 'Зад']}/>

                    <Service title={['Перевозки', 'Отдельной машиной', 'Попутный груз']}
                             list={['Междугородние перевозки', 'Домашние переезды', 'Перевозки материалов', 'Товары народного производства (ТМП)']}/>

                    <Service title="Доп. услуги" list={['Грузчик', 'Паллетирование']}/>
                </div>
            </section>

            <section className="about-me mb-5">
                <h2 className="mb-2">Кратко обо мне</h2>

                <div className="about-me-container">
                    <div className="img-container">
                        <picture>
                            {leaderWebp && <source srcSet={leaderWebp} type="image/webp"/>}
                            <img src={leader || ''} alt="Фото Виталия - предпринимателя в сфере грузоперевозок"
                                 title="Виталий - владелец компании Южные линии"/>
                        </picture>
                    </div>

                    <p>Меня зовут Виталий, я специализируюсь в сфере грузоперевозок. Управляю Газелью лично,
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