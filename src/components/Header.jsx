import logo from '../img/logo.png';
import whatsapp from '../img/icons/whatsapp.svg';

export default function Header() {
    return (
        <header className="mb-5">
            <div className="logo">
                <div className="img-logo">
                    <img src={logo || ''} alt="Логотип"/>
                </div>

                {/*<h1>Южные линии</h1>*/}
            </div>

            <nav>
                <a href="#services" className="btn">Услуги</a>
                <a href="#" className="btn">Цены</a>
            </nav>

            <div className="contacts">
                <a href="https://api.whatsapp.com/send?phone=+79235907071" target="_blank" className="img-container">
                    <img src={whatsapp || ''} alt="WhatsApp"/>
                </a>

                <a href="tel:+79237777777">+7 (923) 777-77-77</a>
                <a href="mailto:maksg543@gmail.com">maksg543@gmail.com</a>
            </div>
        </header>
    )
}