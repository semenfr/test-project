import logo from '../logo.svg';

export default function Header() {
    return (
        <header className="Main-header">
          <div className="Logo-link">
            <a href="https://reactjs.org">
                <img src={logo} className="App-logo" alt="logo"/>
            </a>
          </div>
          <div className="Main-nav">
            <a className="link-first" href="#">Главная</a>
            <a className="link" href="#">Кейсы</a>
            <a className="link" href="#">Контакты</a>
            <a className="link-last" href="#">Оставить заявку</a>
          </div>
        </header>
    )
}