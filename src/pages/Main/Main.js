import './Main.scss';
import Header from "../../components/Header/Header";

export default function Main() {
  return (
    <main>
      <Header/>

      <section className="hero container">
        <h1 className="hero__title">
          Гончарная Студия ЛЁН
        </h1>

        <p className="hero__description">
          В уютной и дружной атмосфере погружаемся в творчество и создаем новые миры своими руками
        </p>

      </section>


      <section className="about container">

        <div className="about__quote">
          <p> &ldquo;Гончарка &mdash; это способ вернуться в детство
            &mdash; с его восторгом и тихой радостью,
            постоянными открытиями и новыми свершениями,
            когда каждый день покоряешь свой Эверест,
            а когда устанешь &mdash; можно попить вкусного чая с печенькой
            &mdash; и все будет хорошо.
            <br/>
            Обязательно!&rdquo;
          </p>


          <p className="about__quote-author">
            Алёна Кичичиди
            <span> основатель студии </span>
          </p>
        </div>

        <a href="/" className="link about__link"> О гончарке </a>

        <img className="about__photo" src="../../assets/imgs/people/alena5-sqr.jpg" alt=""/>
      </section>

      <section className="services container">
        <figure className="services__card">
          <img src="../../assets/imgs/people/girl-potter.jpg" alt="Мастер-классы в гончарной студии Лён"/>
          <figcaption>
            <div>
              <h2 className="">
                Мастер-классы
              </h2>
              <p>Лепим, получаем радость от творчества и создаем предметы домашнего обихода с душой</p>
            </div>

            <a href="/">Подробнее...</a>
          </figcaption>
        </figure>

        <figure className="services__card">
          <img src="../../assets/imgs/products/cert.jpg" alt="Сертификаты гончарная студия ЛЁН"/>
          <figcaption>
            <div>
              <h2 className="">
                Сертификаты
              </h2>
              <p>Потратить можно на что угодно - гончарный круг, ручная лепка или на всю сумму набрать нашей
                керамики с полок</p>
            </div>

            <a href="/">Подробнее...</a>
          </figcaption>
        </figure>

        <figure className="services__card">
          <img src="../../assets/imgs/products/goshi.jpg" alt="Изделия гончарная студия ЛЁН"/>
          <figcaption>
            <div className="">
              <h2>
                Магазин керамики
              </h2>

              <p>Изделия, сделанные с душой, нашими мастерами</p>
            </div>
            <a href="/">Подробнее...</a>
          </figcaption>
        </figure>
      </section>


      <section className="invitation container">
        <p><strong> Приглашаем лепить и творить!</strong></p>
        <p className="invitation__address">Мы живём здесь: <a href="https://yandex.ru/profile/-/CDUmMZl9"> г. Белгород,
          ул.
          Архиерейская, 18</a></p>
        <a href="/" className="link invitation__link"> Записаться </a>
      </section>

    </main>
  )
}