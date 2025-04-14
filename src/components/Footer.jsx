import logoWebp from "../img/logo.webp";
import logo from '../img/logo.png';
import avito from '../img/icons/avito.svg';
import Navigation from "./Navigation.jsx";
import WhatsApp from "./WhatsApp.jsx";
import PhoneNumber from "./PhoneNumber.jsx";
import Email from "./Email.jsx";

export default function Footer() {
    return (
        <footer>
            <div className="info">
                <div className="logo">
                    <div>
                        <div className="img-logo">
                            <picture>
                                {logoWebp && <source srcSet={logoWebp} type="image/webp"/>}
                                <img src={logo || ''} alt="Логотип компании Южные линии"
                                     title="Южные линии - грузоперевозки по России"/>
                            </picture>
                        </div>

                        <div className="contacts">
                            <div className="contacts-container">
                                <div>
                                    <WhatsApp/>

                                    <PhoneNumber/>
                                </div>

                                <Email/>
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