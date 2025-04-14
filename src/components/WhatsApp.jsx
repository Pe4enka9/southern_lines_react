import whatsapp from "../img/icons/whatsapp.svg";

export default function WhatsApp() {
    return (
        <a href="https://api.whatsapp.com/send?phone=+79235907071" target="_blank"
           className="img-container" title="Напишите нам в WhatsApp">
            <img src={whatsapp || ''} alt="Ссылка на WhatsApp для связи"
                 title="Напишите нам в WhatsApp"/>
        </a>
    )
}