import './Header.scss';
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <header className="container-header">
      <Logo height="80px" width="80px"/>

      <nav>
        <ul className="header__nav">
          <li className="header__dropdown">
            <a href="/" className="header__nav-link header__nav-link_dropdown">
              Услуги
            </a>

            <div className="header__dropdown-container">
              <ul className="header__dropdown-menu">
                <li><a href="/"> Мастер-классы и мероприятия </a></li>
                <li><a href="/"> Сертификаты </a></li>
                <li><a href="/"> Магазин керамики </a></li>
              </ul>
            </div>
          </li>

          <li><a href="/" className="header__nav-link"> Контакты </a></li>
          <li><a href="/" className="header__nav-link"> Расписание </a></li>
          <li><a href="/" className="header__nav-link"> О нас </a></li>

        </ul>
      </nav>

      <a href="/" className="header__user-icon"> </a>

    </header>
  )
}