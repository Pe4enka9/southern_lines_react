import {useState} from "react";

export default function Navigation() {
    const [openPrice, setOpenPrice] = useState(false);

    const handleOpenPrice = () => {
        setOpenPrice(!openPrice);
    };

    return (
        <nav>
            <a href="#services" className="btn" title="Перейти к разделу Услуги">Услуги</a>
            <a href="https://www.avito.ru/user/9bc97a3fa75e0197b7d289ac2008c706/profile?src=sharing" className="btn"
               target="_blank" title="Перейти к отзывам на Avito">Отзывы</a>

            <div className="price">
                <a className="btn price" title="Посмотреть цены" onClick={handleOpenPrice}>Цены</a>

                <div className={`prices ${openPrice ? 'active' : ''}`}>
                    <p>0 - 500 км. 3000 руб. 1 куб.</p>
                    <p>500+ км. - 5000 руб. 1 куб.</p>
                </div>
            </div>

            {/*<a href="#" className="btn">Калькулятор</a>*/}
        </nav>
    )
}