import React, {useEffect} from "react"
import Logo from "../../components/Logo/Logo";
import "./LoginPage.scss"

export default function LoginPage() {
  useEffect(() => {
    document.title = "Вход";
  }, []);

  return (
    <main>
      <section className="login-container">

        <div className="login">
          <Logo addStyle="login__logo"/>

          <form>
            <div className="login__input">
              <label> <input className="form-text-input" placeholder="89012345678"/> </label>
            </div>

            <div className="login__input">
              <label> <input className="form-text-input" placeholder="Пароль"/> </label>
            </div>

            <button type="submit">Войти</button>
          </form>

          <div className="help-link">
            <a href="/">Зарегистрироваться</a>
            <a href="/">Забыли пароль?</a>
          </div>
        </div>

      </section>
    </main>
  )
}