import logo from "../../images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="ForRest Logo" />
    </header>
  );
}
