import logo from '../img/logo.png';
import whatsapp from '../img/icons/whatsapp.svg';
import avito from '../img/icons/avito.svg';
import phone from "../img/icons/phone.svg";
import email from "../img/icons/email.svg";

export default function Footer() {
    return (
        <footer>
            <div className="info">
                <div className="logo">
                    <div>
                        <div className="img-logo">
                            <img src={logo || ''} alt="Логотип компании Южные линии"
                                 title="Южные линии - грузоперевозки по России"/>
                        </div>

                        <div className="contacts">
                            <div className="contacts-container">
                                <div>
                                    <a href="https://api.whatsapp.com/send?phone=+79235907071" target="_blank"
                                       className="img-container" title="Напишите нам в WhatsApp">
                                        <img src={whatsapp || ''} alt="Ссылка на WhatsApp для связи"
                                             title="Напишите нам в WhatsApp"/>
                                    </a>

                                    <a href="tel:+79235907071" id="phone" className="img-container"
                                       title="Позвоните нам по телефону +7 (923) 590-70-71">
                                        <img src={phone || ''} alt="Телефон для связи"
                                             title="Позвоните нам по телефону +7 (923) 590-70-71"/>
                                        <span>+7 (923) 590-70-71</span>
                                    </a>
                                </div>

                                <a href="mailto:southernline193@gmail.com" id="email" className="img-container"
                                   title="Напишите нам на электронную почту southernline193@gmail.com">
                                    <img src={email || ''} alt="Электронная почта для связи"
                                         title="Напишите нам на электронную почту southernline193@gmail.com"/>
                                    <span>southernline193@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <p>Цены на сайте не являются публичной офертой</p>
            </div>

            <div className="avito">
                <h1>Независимые отзывы</h1>

                <a href="https://www.avito.ru/user/74fce72075e1a46fae7c0a91802f7f30/profile?src=sharing" target="_blank"
                   title="Прочитайте независимые отзывы о нас на Авито">
                    <img src={avito || ''} alt="Отзывы о компании на Авито"
                         title="Прочитайте независимые отзывы о нас на Авито"/>
                </a>
            </div>

            <nav>
                <a href="#services" className="btn" title="Перейти к разделу Услуги">Услуги</a>
                {/*<a href="#" className="btn" title="Перейти к разделу Цены">Цены</a>*/}
                {/*<a href="#" className="btn">Калькулятор</a>*/}
            </nav>
        </footer>
    )
}