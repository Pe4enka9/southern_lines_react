import arrow from "../img/icons/arrow.svg";

export default function StepArrow() {
    return (
        <img src={arrow || ''} alt="Стрелка, указывающая следующий этап" className="arrow"
             title="Переход к следующему этапу доставки"/>
    )
}