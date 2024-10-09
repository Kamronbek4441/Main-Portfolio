import React from "react";
import "./Main.css";
import w from "../../assets/w.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import location from "../../assets/location.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <div className="head1">
        <div className="he1">
          <h1 className="h1r">
            ШКОЛА испанского ЯЗЫКА <br /> «ЛаВИта» в петербурге
          </h1>
        </div>
        <div className="he2">
          <p>
            <img src={location} alt="" />
            Лиговский пр. 133 Е
          </p>
          <p>
            <img src={phone} alt="" />
            +7 (911) 123-45-67
          </p>
          <p>
            <img src={mail} alt="" />
            lavita_school@gmail.com
          </p>
        </div>
        <div className="he3">
          <button>Запись на курсы</button>
        </div>
      </div>
      <hr />
      <div className="head2">
        <div className="hea1">
          <Link to="/Main1">
            <img src={w} alt="" />
          </Link>
        </div>
        <div className="hea2">
          <Link to="/Page1" className="a">
            О нас
          </Link>
          <Link to="/Page2" className="a">
            Расписание и оплата
          </Link>
          <Link to="/Yaratilyapti" className="a">
            Мероприятия
          </Link>
          <Link to="/Page3" className="a">
            Экзамены
          </Link>
          <Link to="/Yaratilyapti" className="a">
            Обучение в испании
          </Link>
          <Link to="/Yaratilyapti" className="a">
            Новости
          </Link>
          <Link to="/Yaratilyapti" className="a">
            Фотогалерея
          </Link>
          <Link to="/Page4" className="a">
            Контакты
          </Link>
          <Link to="/Yaratilyapti" className="a">
            Отзывы
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
