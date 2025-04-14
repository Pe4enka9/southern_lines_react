import phone from "../img/icons/phone.svg";

export default function PhoneNumber() {
    return (
        <a href="tel:+79235907071" id="phone" className="img-container"
           title="Позвоните нам по телефону +7 (923) 590-70-71">
            <img src={phone || ''} alt="Телефон для связи"
                 title="Позвоните нам по телефону +7 (923) 590-70-71"/>
            <span>+7 (923) 590-70-71</span>
        </a>
    )
}