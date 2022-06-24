import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export default function Header() {
  return (
    <div className="header">
      <Link to="/forrest-app">
        <img className="header__logo" src={logo} alt="ForRest Logo" />
      </Link>
    </div>
  );
}
