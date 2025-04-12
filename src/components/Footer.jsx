import logo from '../img/logo.png';
import whatsapp from '../img/icons/whatsapp.svg';
import avito from '../img/icons/avito.svg';

export default function Footer() {
    return (
        <footer>
            <div className="info">
                <div className="logo">
                    <div className="img-logo">
                        <img src={logo || ''} alt="Логотип"/>
                    </div>

                    <h1>Южные линии</h1>
                </div>

                <div className="contacts">
                    <a href="https://api.whatsapp.com/send?phone=+79235907071" target="_blank"
                       className="img-container">
                        <img src={whatsapp || ''} alt="WhatsApp"/>
                    </a>

                    <a href="tel:+79237777777">+7 (923) 777-77-77</a>
                    <a href="mailto:maksg543@gmail.com">maksg543@gmail.com</a>
                </div>

                <p>Цены на сайте не являются публичной офертой</p>
            </div>

            <div className="avito">
                <h1>Независимые отзывы</h1>

                <a href="https://www.avito.ru/user/74fce72075e1a46fae7c0a91802f7f30/profile?src=sharing"
                   target="_blank">
                    <img src={avito || ''} alt="Авито"/>
                </a>
            </div>

            <nav>
                <a href="#" className="btn">Услуги</a>
                <a href="#" className="btn">Цены</a>
                <a href="#" className="btn">Калькулятор</a>
            </nav>
        </footer>
    )
}