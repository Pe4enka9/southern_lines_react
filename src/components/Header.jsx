import logo from '../img/logo.png';
import whatsapp from '../img/icons/whatsapp.svg';
import phone from '../img/icons/phone.svg';
import email from '../img/icons/email.svg';

export default function Header() {
    return (
        <header className="mb-5">
            <div className="logo">
                <div className="img-logo">
                    <img src={logo || ''} alt="Логотип компании Южные линии"
                         title="Южные линии - грузоперевозки по России"/>
                </div>
            </div>

            <nav>
                <a href="#services" className="btn" title="Перейти к разделу Услуги">Услуги</a>
                {/*<a href="#" className="btn" title="Перейти к разделу Цены">Цены</a>*/}
            </nav>

            <div className="contacts">
                <a href="https://api.whatsapp.com/send?phone=+79235907071" target="_blank" className="img-container"
                   title="Напишите нам в WhatsApp">
                    <img src={whatsapp || ''} alt="Ссылка на WhatsApp для связи" title="Напишите нам в WhatsApp"/>
                </a>

                <a href="tel:+79235907071" id="phone" className="img-container"
                   title="Позвоните нам по телефону +7 (923) 590-70-71">
                    <img src={phone || ''} alt="Телефон для связи"
                         title="Позвоните нам по телефону +7 (923) 590-70-71"/>
                    <span>+7 (923) 590-70-71</span>
                </a>

                <a href="mailto:southernline193@gmail.com" id="email" className="img-container"
                   title="Напишите нам на электронную почту southernline193@gmail.com">
                    <img src={email || ''} alt="Электронная почта для связи"
                         title="Напишите нам на электронную почту southernline193@gmail.com"/>
                    <span>southernline193@gmail.com</span>
                </a>
            </div>
        </header>
    )
}