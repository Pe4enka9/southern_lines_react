import logoWebp from '../img/webp/logo.webp';
import logo from '../img/logo.png';
import Navigation from "./Navigation.jsx";
import WhatsApp from "./WhatsApp.jsx";
import PhoneNumber from "./PhoneNumber.jsx";
import Email from "./Email.jsx";

export default function Header() {
    return (
        <header className="mb-5">
            <div className="logo">
                <div className="img-logo">
                    <picture>
                        {logoWebp && <source srcSet={logoWebp} type="image/webp"/>}
                        <img src={logo || ''} alt="Логотип компании Южные линии"
                             title="Южные линии - грузоперевозки по России"/>
                    </picture>
                </div>
            </div>

            <Navigation/>

            <div className="contacts">
                <WhatsApp/>

                <PhoneNumber/>

                <Email/>
            </div>
        </header>
    )
}