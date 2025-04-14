import logo from '../img/logo.png';
import avito from '../img/icons/avito.svg';
import email from "../img/icons/email.svg";
import Navigation from "./Navigation.jsx";
import WhatsApp from "./WhatsApp.jsx";
import PhoneNumber from "./PhoneNumber.jsx";

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
                                    <WhatsApp/>

                                    <PhoneNumber/>
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

            <Navigation/>
        </footer>
    )
}