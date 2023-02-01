import HeaderLogo from '../images/header__logo.svg';

export default function Header(props) {
    return (
        <header className="header">
            <img className="header__logo" src={HeaderLogo} alt="Логотип приложения `Место`" />
        </header>
    );
}
