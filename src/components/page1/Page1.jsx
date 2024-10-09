import React from "react";
import "./Page1.css";
import iconsf from "../../assets/iconsf.png"
import group from "../../assets/group.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import location from "../../assets/location.png";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import a from "../../assets/a.png";
import b from "../../assets/b.png";
import c from "../../assets/c.png";
import d from "../../assets/d.png";
import Rectangle1 from "../../assets/Rectangle1.png";
import Rectangle2 from "../../assets/Rectangle2.png";
import Rectangle3 from "../../assets/Rectangle3.png";

const Page1 = () => {
  return (
    <div className="page1">
      <div className="img">
        <div className="img1">
          <img className="lrl" src={left} alt="" />
          <div className="text">
            <div className="tt">
              <h2>
                ИДЕТ НАБОР НА ОБУЧЕНИЕ В ШКОЛУ "ЛАВИТА" В НЕВСКОМ РАЙОНЕ
                ПЕТЕРБУРГА! УСПЕЙ ЗАПИСАТЬСЯ!
              </h2>
            </div>
            <button>Подробнее</button>
          </div>
          <img className="lrr" src={right} alt="" />
        </div>
      </div>
      <div class="container">
        <div className="con1">
          <h1 class="title">Школа "Лавита"</h1>
          <div class="content-box">
            <p>
              Eleifend purus dictum nunc, aenean tincidunt massa libero. Aliquam
              nullam enim at ac. Imperdiet risus mi quis vitae non. Cursus
              scelerisque donec vulputate ante etiam libero donec ridiculus at.
              Phasellus at nullam dapibus ut in. Vulputate consequat purus
              tellus vel cras. Eu sollicitudin arcu faucibus turpis venenatis.
            </p>
            <p>
              Aliquet auctor tempus, erat at interdum eu. Sapien amet, amet sit
              non at sodales volutpat. Cursus et laoreet eget velit a tortor eu
              nibh mattis. Mi facilisi ultrices maecenas id.
            </p>
          </div>
        </div>
        <div className="con2">
          <img className="group" src={group} alt="" />
        </div>
      </div>
      <div className="money">
        <h1>Курсы и стоимость обучения</h1>
        <div className="btn">
          <button>
            (учебный год с <br /> сентября по май)
          </button>
          <button>
            (учебный год с <br /> сентября по июнь)
          </button>
        </div>
        <div className="lan">
          <h3 className="red">
            Испанский язык <br /> для детей
          </h3>
          <h3>
            Испанский язык <br /> для взрослых
          </h3>
          <h3>
            Индивидуальные занятия <br /> и минигруппы
          </h3>
          <h3>
            Подготовка к <br /> международным экзаменам
          </h3>
        </div>
      </div>
      <div className="test">
        <h1>Экзамены</h1>
        <br />
        <div className="test0">
          <div className="tes">
            <img src={a} alt="" />
            <br />
            <h3>Massa fringilla rhoncus purus gravida magnis.</h3>
            <br />
            <p>
              Sed viverra in nulla duis elit purus <br /> urna.
            </p>
            <p>
              Enim volutpat nisi, sit eget sed <br /> consectetur consectetur.
            </p>
            <p>
              Massa turpis enim, pellentesque <br /> amet morbi sagittis.
              Euismod morbi
            </p>
            <button>Подробнее</button>
          </div>
          <div className="tes">
            <img src={b} alt="" />
            <br />
            <h3>Massa fringilla rhoncus purus gravida magnis.</h3>
            <br />
            <p>
              Sed viverra in nulla duis elit purus
              <br /> urna.
            </p>
            <p>
              Enim volutpat nisi, sit eget sed <br /> consectetur consectetur.
            </p>
            <p>
              Massa turpis enim, pellentesque <br /> amet morbi sagittis.
              Euismod morbi
            </p>
            <button>Подробнее</button>
          </div>
          <div className="tes">
            <img src={c} alt="" />
            <br />
            <h3>Massa fringilla rhoncus purus gravida magnis.</h3>
            <br />
            <p>
              Sed viverra in nulla duis elit purus <br /> urna.
            </p>
            <p>
              Enim volutpat nisi, sit eget sed <br /> consectetur consectetur.
            </p>
            <p>
              Massa turpis enim, pellentesque <br /> amet morbi sagittis.
              Euismod morbi
            </p>
            <button>Подробнее</button>
          </div>
          <div className="tes">
            <img src={d} alt="" />
            <br />
            <h3>Massa fringilla rhoncus purus gravida magnis.</h3>
            <br />
            <p>
              Sed viverra in nulla duis elit purus <br /> urna.
            </p>
            <p>
              Enim volutpat nisi, sit eget sed <br /> consectetur consectetur.
            </p>
            <p>
              Massa turpis enim, pellentesque <br /> amet morbi sagittis.
              Euismod morbi
            </p>
            <button>Подробнее</button>
          </div>
        </div>
      </div>
      <div className="test1">
        <h1>Мероприятия</h1>
        <br />
        <div className="tes0">
          <div className="tes1">
            <img src={Rectangle1} alt="" />
            <h3>
              Sed sem vulputate habitant quis eu, vitae quis porttitor augue.
            </h3>
            <p>
              Elementum, sed viverra volutpat nam lacus egestas. Scelerisque
              quisque egestas maecenas fermentum semper auctor massa tincidunt.
              Tristique pulvinar commodo fermentum neque. Elementum tortor.
            </p>
            <button>Подробнее</button>
          </div>
          <div className="tes1">
            <img src={Rectangle2} alt="" />
            <h3>
              Sed sem vulputate habitant quis eu, vitae quis porttitor augue.
            </h3>
            <p>
              Elementum, sed viverra volutpat nam lacus egestas. Scelerisque
              quisque egestas maecenas fermentum semper auctor massa tincidunt.
              Tristique pulvinar commodo fermentum neque. Elementum tortor.
            </p>
            <button>Подробнее</button>
          </div>
          <div className="tes1">
            <img src={Rectangle3} alt="" />
            <h3>
              Sed sem vulputate habitant quis eu, vitae quis porttitor augue.
            </h3>
            <p>
              Elementum, sed viverra volutpat nam lacus egestas. Scelerisque
              quisque egestas maecenas fermentum semper auctor massa tincidunt.
              Tristique pulvinar commodo fermentum neque. Elementum tortor.
            </p>
            <button>Подробнее</button>
          </div>
        </div>
      </div>
      <div className="test2">
        <h1>Новости школы</h1>
        <div className="tes22">
          <div className="tes2">
            <h3>
              Eu faucibus facilisi est pharetra, augue vulputate nisi elementum.
              Molestie id.
            </h3>
            <p>
              Commodo bibendum eget purus vivamus amet ut. Nisl habitant tellus
              augue quam lectus elementum platea. A imperdiet facilisis quis
              aliquet. Venenatis sit nibh pellentesque interdum sem. Donec vitae
              tristique vel dictum sagittis a purus.
            </p>
            <button>Подробнее</button>
          </div>
          <div className="tes2">
            <h3>
              Eu faucibus facilisi est pharetra, augue vulputate nisi elementum.
              Molestie id.
            </h3>
            <p>
              Commodo bibendum eget purus vivamus amet ut. Nisl habitant tellus
              augue quam lectus elementum platea. A imperdiet facilisis quis
              aliquet. Venenatis sit nibh pellentesque interdum sem. Donec vitae
              tristique vel dictum sagittis a purus.
            </p>
            <button>Подробнее</button>
          </div>
          <div className="tes2">
            <h3>
              Eu faucibus facilisi est pharetra, augue vulputate nisi elementum.
              Molestie id.
            </h3>
            <p>
              Commodo bibendum eget purus vivamus amet ut. Nisl habitant tellus
              augue quam lectus elementum platea. A imperdiet facilisis quis
              aliquet. Venenatis sit nibh pellentesque interdum sem. Donec vitae
              tristique vel dictum sagittis a purus.
            </p>
            <button>Подробнее</button>
          </div>
          <div className="tes2">
            <h3>
              Eu faucibus facilisi est pharetra, augue vulputate nisi elementum.
              Molestie id.
            </h3>
            <p>
              Commodo bibendum eget purus vivamus amet ut. Nisl habitant tellus
              augue quam lectus elementum platea. A imperdiet facilisis quis
              aliquet. Venenatis sit nibh pellentesque interdum sem. Donec vitae
              tristique vel dictum sagittis a purus.
            </p>
            <button>Подробнее</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="foot">
          <div className="foot1">
            <h3>
              ШКОЛА КИТАЙСКОГО ЯЗЫКА <br /> «КОНФУЦИЙ» в петербурге
            </h3>
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
            <img src={iconsf} alt="" />
          </div>
          <div className="foot2">
            <h2>О нас</h2>
            <p>Основные сведения</p>
            <p>
              Структура и органы управления <br /> образовательной организацией
            </p>
            <p>Документы</p>
            <p>Образование</p>
            <p>Образовательные стандарты</p>
            <p>
              Руководство. Педагогический <br /> (научно-педагогический) состав
            </p>
            <p>
              Материально-техническое <br /> обеспечение и оснащенность <br />{" "}
              образовательного процесса
            </p>
            <p>Доступная среда</p>
          </div>
          <div className="foot3">
            <h2>Расписание и оплата</h2>
            <p>Расписание занятий</p>
            <p>Курсы и стоимость</p>
            <p>Расписание работы кассы</p>
            <br />
            <h2>Обучение в китае</h2>
            <p>Стипендиальные программы</p>
            <p>Лингвистические лагеря</p>
            <p>Оформление визы на обучение</p>
          </div>
          <div className="foot4">
            <h2>Экзамены</h2>
            <p>MSK 1</p>
            <p>OPT</p>
            <p>YSV</p>
            <p>NNB</p>
            <p>
              Порядок регистрации на <br /> онлайн экзамен
            </p>
            <p>
              Порядок регистрации на очный <br /> экзамен
            </p>
            <p>Расписание экзаменов</p>
          </div>
          <div className="foot5">
            <h2>Школа</h2>
            <p>Новости</p>
            <p>Мероприятия</p>
            <p>Фотогалерея</p>
            <p>Контакты</p>
            <p>Отзывы</p>
          </div>
        </div>
        <div className="footer6">
          <hr />
          <div className="foot6">
            <p>© «ЛАВИТА» 2021</p>
            <p>Разработано d-e-n.ru</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
