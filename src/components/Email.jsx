import email from "../img/icons/email.svg";

export default function Email() {
    return (
        <a href="mailto:southernline193@gmail.com" id="email" className="img-container"
           title="Напишите нам на электронную почту southernline193@gmail.com">
            <img src={email || ''} alt="Электронная почта для связи"
                 title="Напишите нам на электронную почту southernline193@gmail.com"/>
            <span>southernline193@gmail.com</span>
        </a>
    )
}