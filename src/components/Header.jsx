import logo from '../img/logo.png';
import whatsapp from '../img/icons/whatsapp.svg';
import phone from '../img/icons/phone.svg';
import email from '../img/icons/email.svg';

export default function Header() {
    return (
        <header className="mb-5">
            <div className="logo">
                <div className="img-logo">
                    <img src={logo || ''} alt="Логотип"/>
                </div>
            </div>

            <nav>
                <a href="#services" className="btn">Услуги</a>
                <a href="#" className="btn">Цены</a>
            </nav>

            <div className="contacts">
                <a href="https://api.whatsapp.com/send?phone=+79235907071" target="_blank" className="img-container">
                    <img src={whatsapp || ''} alt="WhatsApp"/>
                </a>

                <a href="tel:+79237777777" id="phone" className="img-container">
                    <img src={phone || ''} alt="Телефон"/>
                    <span>+7 (923) 777-77-77</span>
                </a>

                <a href="mailto:maksg543@gmail.com" id="email" className="img-container">
                    <img src={email || ''} alt="Эл. почта"/>
                    <span>maksg543@gmail.com</span>
                </a>
            </div>
        </header>
    )
}