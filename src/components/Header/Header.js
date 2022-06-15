import logo from "../../images/logo.png";

export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} width="320" alt="ForRest Logo" />
    </div>
  );
}
